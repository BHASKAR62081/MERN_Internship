const fs = require("fs");
const path = require("path");
const js = path.join(__dirname, "js");
const file1 = `${js}/b1.js`;

fs.readFile(file1, "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
