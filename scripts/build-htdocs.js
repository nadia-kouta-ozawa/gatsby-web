const fs = require('fs');
const path = require('path');

// Create htdocs and _assets directories
const htdocsDir = path.join(__dirname, '../htdocs');
const assetsDir = path.join(htdocsDir, '_assets');

if (fs.existsSync(htdocsDir)) {
  fs.rmSync(htdocsDir, { recursive: true });
}

fs.mkdirSync(htdocsDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

// Copy files from public directory
const publicDir = path.join(__dirname, '../public');
const items = fs.readdirSync(publicDir);

items.forEach(item => {
  const srcPath = path.join(publicDir, item);
  const stat = fs.statSync(srcPath);
  
  if (stat.isFile()) {
    // Move JS and CSS assets to _assets folder
    if (item.endsWith('.js') || item.endsWith('.css') || item.endsWith('.map') || item.endsWith('.LICENSE.txt')) {
      const destPath = path.join(assetsDir, item);
      fs.copyFileSync(srcPath, destPath);
    } else {
      // Copy other files to htdocs root
      const destPath = path.join(htdocsDir, item);
      fs.copyFileSync(srcPath, destPath);
    }
  } else if (stat.isDirectory()) {
    // Copy directories as-is
    const destPath = path.join(htdocsDir, item);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
});

// Update HTML files to reference _assets
const updateHtmlReferences = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get list of JS and CSS files from _assets
    const assetFiles = fs.readdirSync(assetsDir).filter(file => 
      file.endsWith('.js') || file.endsWith('.css')
    );
    
    // Replace each asset file reference in JSON and HTML
    assetFiles.forEach(file => {
      // Replace in chunkMapping JSON
      const jsonRegex = new RegExp(`"/${file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(jsonRegex, `"/_assets/${file}"`);
      
      // Replace in script src attributes
      const srcRegex = new RegExp(`src="/${file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(srcRegex, `src="/_assets/${file}"`);
      
      // Replace in href attributes  
      const hrefRegex = new RegExp(`href="/${file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(hrefRegex, `href="/_assets/${file}"`);
      
      // Replace in data-href attributes
      const dataHrefRegex = new RegExp(`data-href="/_assets/${file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(dataHrefRegex, `data-href="/_assets/${file}"`);
    });
    
    fs.writeFileSync(filePath, content);
  }
};

// Update index.html
updateHtmlReferences(path.join(htdocsDir, 'index.html'));

console.log('✅ htdocs build completed with assets in _assets folder');
console.log(`📁 Files generated in: ${htdocsDir}`);
console.log(`📦 Assets moved to: ${assetsDir}`);