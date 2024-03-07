const fs = require("fs-extra");
const path = require("path");

const sourceFolder = path.join(__dirname, "../../", "src");
const destinationFolder = path.join(__dirname, "../modules", "react-native-transak");

if (fs.existsSync(destinationFolder)) {
  fs.removeSync(destinationFolder);
}

fs.copySync(sourceFolder, destinationFolder);

console.log("Folder copied successfully!");
