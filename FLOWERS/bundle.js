const fs = require("fs");
const html = fs.readFileSync("index.template.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");
const out = html
  .replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`)
  .replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);
fs.writeFileSync("index.html", out);
console.log("Bundled into index.html");
