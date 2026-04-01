const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

function injectScript(html) {
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  if (html.includes(scriptTag)) return html;
  return html.replace('</head>', `  ${scriptTag}\n</head>`);
}

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf8');
      fs.writeFileSync(filePath, injectScript(content));
    }
  });
}

processDir(outDir);