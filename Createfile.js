//console.log(process.argv[1]);

const fs = require("fs");

// a = process.argv;
// fs.writeFileSync(a[3], a[4]);

const path = require("path");
const js = path.join(__dirname, "js");
const php = path.join(__dirname, "php");

for (i = 1; i <= 50; i++) {
  fs.writeFileSync(php + "/a" + i + ".php", "this is my php file");
  fs.writeFileSync(js + "/b" + i + ".js", "this is my js file");
}
