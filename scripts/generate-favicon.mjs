import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Script to generate PNG favicon from SVG
// Uses sharp if available, otherwise provides instructions

async function generateFavicon() {
  const svgPath = join(rootDir, 'public', 'favicon.svg');
  const pngPath = join(rootDir, 'public', 'favicon.png');
  
  try {
    // Try to use sharp if available
    const sharp = await import('sharp');
    const svgContent = readFileSync(svgPath, 'utf-8');
    
    const pngBuffer = await sharp.default(Buffer.from(svgContent))
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    writeFileSync(pngPath, pngBuffer);
    console.log('✅ PNG favicon generated successfully at:', pngPath);
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' || err.message.includes('Cannot find module')) {
      console.log('⚠️  Sharp not installed. To generate PNG favicon:');
      console.log('   1. Install: npm install --save-dev sharp');
      console.log('   2. Run: node scripts/generate-favicon.mjs');
      console.log('\n   Or use an online tool: https://convertio.co/svg-png/');
      console.log('   (Modern browsers support SVG favicons, so PNG is optional)');
    } else {
      console.error('Error generating favicon:', err.message);
      process.exit(1);
    }
  }
}

generateFavicon();
