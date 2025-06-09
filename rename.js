const fs = require("fs");
const path = require("path");
const js = path.join(__dirname, "js");
const file1 = `${js}/b5.js`;

fs.rename(file1, "c1.js", (err) => {
  if (err) {
    throw err;
  }
  console.log("Renamed.");
});
