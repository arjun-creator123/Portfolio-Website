import fs from 'fs';
import path from 'path';

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

try {
  // Find JS and CSS files
  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

  if (!jsFile || !cssFile) {
    throw new Error('Could not find built client assets.');
  }

  // Create static index.html content
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="./assets/${cssFile}">
</head>
<body class="dark">
  <div id="root"></div>
  <script type="module" src="./assets/${jsFile}"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(clientDir, 'index.html'), htmlContent);
  console.log('Successfully prepared static assets for deployment!');
} catch (error) {
  console.error('Failed to prepare static assets:', error);
  process.exit(1);
}
