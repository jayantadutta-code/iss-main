const fs = require('fs');
const files = ['index1.html', 'index2.html', 'index3.html', 'index4.html', 'index5.html', 'index6.html', 'index7.html', 'index8.html', 'index9.html', 'index10.html', 'index11.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('backdrop-filter') && !lines[i].includes('-webkit-backdrop-filter')) {
            if (i + 1 < lines.length && !lines[i + 1].includes('-webkit-backdrop-filter')) {
                const webkitLine = lines[i].replace('backdrop-filter', '-webkit-backdrop-filter');
                lines.splice(i + 1, 0, webkitLine);
                modified = true;
                i++;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log(`Updated ${file} with Safari -webkit-backdrop-filter prefixes.`);
    }
});
