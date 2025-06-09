const fs = require("fs");
const path = require("path");
const js = path.join(__dirname, "js");
const file1 = `${js}/b3.js`;

fs.appendFile(file1, ". good afternoon", (err) => {
  if (err) {
    throw err;
  }
  console.log("updated");
});
