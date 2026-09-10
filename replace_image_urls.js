import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Parse the log file to create a mapping
const logFilePath = 'C:/Users/5559/.gemini/antigravity-ide/brain/99c9d020-82cb-4efd-a793-cc084bd6de31/.system_generated/tasks/task-124.log';
const logContent = fs.readFileSync(logFilePath, 'utf8');

const regex = /Successfully uploaded E:\\LOCKZIE REACT\\React-App\\public\\(.*?) as .*? with public_id: (.*)/g;
let match;
const urlMapping = {}; // localPath -> cloudinaryUrl

const CLOUD_NAME = 'r0vgotvj';
const BASE_IMG_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1/`;
const BASE_VID_URL = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1/`;

while ((match = regex.exec(logContent)) !== null) {
    const rawLocalPath = match[1].replace(/\\/g, '/'); // e.g., 'images/aboutus img6.png'
    const publicId = match[2].trim();
    
    // Determine the original extension to append to the public ID in the URL
    const ext = path.extname(rawLocalPath).toLowerCase();
    
    // Determine if it's a video or image based on extension
    const isVideo = ['.mp4', '.webm', '.ogg', '.mov'].includes(ext);
    const baseUrl = isVideo ? BASE_VID_URL : BASE_IMG_URL;
    
    // Some Cloudinary public IDs already include the extension if the preset didn't strip it, 
    // but the log shows it stripped it (e.g., aboutus_img6). We need to request it with the original extension.
    const cloudinaryUrl = `${baseUrl}${publicId}${ext}`;
    
    urlMapping[`/${rawLocalPath}`] = cloudinaryUrl;
}

console.log(`Generated ${Object.keys(urlMapping).length} mappings from the upload log.`);

// 2. Function to recursively find all JSX and CSS files
function getTargetFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getTargetFiles(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const srcDir = path.join(__dirname, 'src');
const filesToProcess = getTargetFiles(srcDir);

let totalReplacements = 0;

// 3. Process each file and replace local paths with Cloudinary URLs
for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    for (const [localPath, cloudinaryUrl] of Object.entries(urlMapping)) {
        // We might need to escape the localPath for regex or just use split.join
        // Using split.join is safer for strings with special characters
        
        // Match exact strings like src="/images/something.png"
        // Also match url('/images/something.png') in CSS
        
        const replacements = [
            `"${localPath}"`, // src="/images/..."
            `'${localPath}'`, // src='/images/...'
            `\`${localPath}\``,
        ];
        
        for (const r of replacements) {
            if (content.includes(r)) {
                content = content.split(r).join(r[0] + cloudinaryUrl + r[0]);
                hasChanges = true;
                totalReplacements++;
            }
        }
    }
    
    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated file: ${path.relative(__dirname, file)}`);
    }
}

console.log(`Replacement complete! Total URLs updated: ${totalReplacements}`);
