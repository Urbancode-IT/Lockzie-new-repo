const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Load environment variables from .env
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^\s*([^#=]+)\s*=\s*(.*)\s*$/);
        if (match) {
            process.env[match[1].trim()] = match[2].trim();
        }
    });
}
if (process.env.CLOUDINARY_URL) {
    const urlMatches = process.env.CLOUDINARY_URL.match(/cloudinary:\/\/([^:]+):([^@]+)@([^]+)/);
    if (urlMatches) {
        cloudinary.config({
            cloud_name: urlMatches[3],
            api_key: urlMatches[1],
            api_secret: urlMatches[2],
            secure: true
        });
    }
} else {
    console.error("Missing CLOUDINARY_URL in .env");
    process.exit(1);
}

function getTargetFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getTargetFiles(fullPath));
        } else {
            if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

function getPublicFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getPublicFiles(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

(async () => {
    const srcDir = path.join(process.cwd(), 'src');
    const publicDir = path.join(process.cwd(), 'public');
    const srcFiles = getTargetFiles(srcDir);
    const publicFiles = getPublicFiles(publicDir);

    let localPathsInSrc = new Set();
    const publicMap = new Map(); // relative path like '/images/foo.png' -> absolute path

    for (const file of publicFiles) {
        const relative = '/' + path.relative(publicDir, file).replace(/\\/g, '/');
        publicMap.set(relative, file);
    }

    for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        // Search for any occurrence of the known public paths in the source files
        for (const [relPath] of publicMap.entries()) {
            if (content.includes(relPath)) {
                localPathsInSrc.add(relPath);
            }
        }
    }

    console.log(`Found ${localPathsInSrc.size} local paths used in src files.`);
    
    // Upload each and replace
    let totalReplacements = 0;
    
    for (const relPath of localPathsInSrc) {
        const absPath = publicMap.get(relPath);
        const stat = fs.statSync(absPath);
        
        // Skip files > 100MB
        if (stat.size > 100 * 1024 * 1024) {
            console.log(`Skipping large file (over 100MB): ${relPath}`);
            continue;
        }

        console.log(`Uploading: ${relPath}...`);
        
        try {
            // Upload to Cloudinary
            const result = await cloudinary.uploader.upload(absPath, {
                resource_type: "auto",
                use_filename: true,
                unique_filename: false,
                overwrite: false
            });
            
            const cloudUrl = result.secure_url;
            console.log(`Success -> ${cloudUrl}`);
            
            // Replace in src files
            for (const file of srcFiles) {
                let content = fs.readFileSync(file, 'utf8');
                let hasChanges = false;
                
                // Be careful to only replace exactly the path
                // Using split/join
                const replacements = [
                    `"${relPath}"`,
                    `'${relPath}'`,
                    `\`${relPath}\``,
                    `url("${relPath}")`,
                    `url('${relPath}')`,
                    `url(${relPath})`
                ];
                
                for (const r of replacements) {
                    if (content.includes(r)) {
                        const newR = r.replace(relPath, cloudUrl);
                        content = content.split(r).join(newR);
                        hasChanges = true;
                        totalReplacements++;
                    }
                }
                
                // Also check if relPath is just injected like "url('..."
                // Since our replacements handle quotes, we are safe.
                if (content.includes(relPath)) {
                   // Fallback for tricky scenarios like "url('/Gallery..." inside a template literal
                   // We replace the relPath directly if it's preceded by a quote
                   const r1 = `"${relPath}`;
                   const n1 = `"${cloudUrl}`;
                   if (content.includes(r1)) { content = content.split(r1).join(n1); hasChanges = true; }

                   const r2 = `'${relPath}`;
                   const n2 = `'${cloudUrl}`;
                   if (content.includes(r2)) { content = content.split(r2).join(n2); hasChanges = true; }
                }

                if (hasChanges) {
                    fs.writeFileSync(file, content, 'utf8');
                }
            }
        } catch (e) {
            console.error(`Failed to upload ${relPath}:`, e.message);
        }
    }
    
    console.log(`Done. Total replacements made: ${totalReplacements}`);
})();
