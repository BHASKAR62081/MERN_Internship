const fs = require("fs");
const path = require("path");
const js = path.join(__dirname, "js");
const file1 = `${js}/b4.js`;

fs.unlink(file1, (err) => {
  if (err) {
    throw err;
  }
  console.log("deleted");
});
