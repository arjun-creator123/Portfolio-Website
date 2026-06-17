import fs from 'fs';
import path from 'path';

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

try {
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
  // Get all JS files - we need both the entry and the app bundle
  const jsFiles = files.filter(f => f.endsWith('.js')).sort((a, b) => {
    // Sort by file size - smaller file is the entry, larger is the app bundle
    const sizeA = fs.statSync(path.join(assetsDir, a)).size;
    const sizeB = fs.statSync(path.join(assetsDir, b)).size;
    return sizeA - sizeB;
  });

  if (!cssFile || jsFiles.length === 0) {
    throw new Error('Could not find built client assets.');
  }

  console.log('Found CSS:', cssFile);
  console.log('Found JS files:', jsFiles.map(f => `${f} (${(fs.statSync(path.join(assetsDir, f)).size / 1024).toFixed(1)}KB)`).join(', '));

  // Build script tags for all JS files
  const scriptTags = jsFiles.map(f => `  <script type="module" src="./assets/${f}"></script>`).join('\n');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio — AI, IoT & Real-time Systems Engineer</title>
  <meta name="description" content="Interactive portfolio showcasing AI/ML, IoT, and real-time architecture projects with immersive 3D and motion design.">
  <link rel="icon" type="image/png" href="./favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap">
  <link rel="stylesheet" href="./assets/${cssFile}">
</head>
<body class="dark">
  <div id="root"></div>
${scriptTags}
</body>
</html>`;

  fs.writeFileSync(path.join(clientDir, 'index.html'), htmlContent);
  
  // Also copy index.html to 404.html for SPA routing on GitHub Pages
  fs.copyFileSync(path.join(clientDir, 'index.html'), path.join(clientDir, '404.html'));
  
  console.log('Successfully prepared static assets for deployment!');
  console.log('Created index.html and 404.html');
} catch (error) {
  console.error('Failed to prepare static assets:', error);
  process.exit(1);
}
