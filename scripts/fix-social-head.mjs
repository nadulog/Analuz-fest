import { readFile, writeFile } from "node:fs/promises";

const outputFile = new URL("../out/index.html", import.meta.url);
const imageUrl = "https://bloomdate-analuz-fest.netlify.app/ana-luz-whatsapp.jpg?v=3";

const socialHead = [
  '<meta name="description" content="Se acerca una noche muy especial y me haría muy feliz compartirla con vos. Te espero para celebrar juntos ✨">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="es_AR">',
  '<meta property="og:title" content="Mis XV · Ana Luz">',
  '<meta property="og:description" content="Se acerca una noche muy especial y me haría muy feliz compartirla con vos. Te espero para celebrar juntos ✨">',
  `<meta property="og:image" content="${imageUrl}">`,
  `<meta property="og:image:secure_url" content="${imageUrl}">`,
  '<meta property="og:image:type" content="image/jpeg">',
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta property="og:image:alt" content="Ana Luz Fest, Mis XV">',
  '<meta property="og:url" content="https://bloomdate-analuz-fest.netlify.app/">',
  '<meta name="twitter:card" content="summary_large_image">',
  '<meta name="twitter:title" content="Mis XV · Ana Luz">',
  '<meta name="twitter:description" content="Se acerca una noche muy especial y me haría muy feliz compartirla con vos. Te espero para celebrar juntos ✨">',
  `<meta name="twitter:image" content="${imageUrl}">`,
  '<title>Mis XV · Ana Luz</title>',
].join("");

let html = await readFile(outputFile, "utf8");

html = html
  .replace(/<title>[^<]*<\/title>/, "")
  .replace(/<meta name="description"[^>]*\/>/, "")
  .replace(/<meta property="og:[^"]+"[^>]*\/>/g, "")
  .replace(/<meta name="twitter:[^"]+"[^>]*\/>/g, "")
  .replace(
    '<head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>',
    `<head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>${socialHead}`,
  );

await writeFile(outputFile, html, "utf8");
