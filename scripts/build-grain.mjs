// Genera la textura de grano del Afiche (papel y navy): ruido monocromo, sin IA.
// Es un mosaico de 256×256 px que se repite; el color lo pone el fondo de cada sección y el grano
// se superpone con transparencia. Uso: node scripts/build-grain.mjs
import sharp from "sharp";

const SIZE = 256;
// Desviación medida en los fondos del Afiche (Figma, frame 26:2): unos 6 niveles sobre 255.
const STRENGTH = 0.07;

// Ruido determinista (mismo archivo en cada corrida).
let seed = 20261004;
const random = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const pixels = Buffer.alloc(SIZE * SIZE * 2);
for (let i = 0; i < SIZE * SIZE; i++) {
  const light = random() < 0.5;
  pixels[i * 2] = light ? 255 : 0;
  pixels[i * 2 + 1] = Math.round(random() * STRENGTH * 255);
}

await sharp(pixels, { raw: { width: SIZE, height: SIZE, channels: 2 } })
  .png({ compressionLevel: 9, palette: false })
  .toFile("src/assets/texturas/grano.png");
console.log("src/assets/texturas/grano.png");
