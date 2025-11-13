import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const inputPath = path.join(projectRoot, 'public', 'images', 'avatar.jpg');
const outputPath = path.join(projectRoot, 'public', 'images', 'avatar.png');

async function main() {
  const buffer = await fs.readFile(inputPath);
  const base64 = buffer.toString('base64');
  const { width, height } = imageSize(buffer);
  const w = width || 800;
  const h = height || 800;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
  <image href="data:image/jpeg;base64,${base64}" width="${w}" height="${h}" />
</svg>
`.trim();
  await fs.writeFile(outputPath, svg, 'utf8');
  console.log('Inline SVG written to ' + outputPath);
}

main().catch((err) => {
  console.error('Failed to create inline SVG:', err);
  process.exit(1);
});


