const fs = require('fs');
const path = require('path');
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
const srcDir = path.join(process.cwd(), 'src');
const files = getTargetFiles(srcDir);
// Match src="/path" or url('/path') or url("/path")
const regex1 = /src\s*=\s*['\"\`](\/[^'\"\`]+)['\"\`]/g;
const regex2 = /url\s*\(\s*['\"]?(\/[^'\"\) ]+)['\"]?\s*\)/g;
let missing = new Set();

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regex1.exec(content)) !== null) {
        if (!match[1].startsWith('https://') && !match[1].startsWith('http://')) {
            missing.add(match[1]);
        }
    }
    while ((match = regex2.exec(content)) !== null) {
        if (!match[1].startsWith('https://') && !match[1].startsWith('http://')) {
            missing.add(match[1]);
        }
    }
}
console.log(Array.from(missing).join('\n'));
console.log('Total local references:', missing.size);
