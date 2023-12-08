//Mistake # This searches for individual files.
/*const fs = require("fs");
console.log(fs);
const path = require("path");
console.log(path);
const folderPath = "./slides"; // Replace with the path to your folder

// Read the content of the 'missions' file
const missionsFilePath = path.join(folderPath, "missions");
const missionsContent = fs.readFileSync(missionsFilePath, "utf-8");

// Extract the URLs from the content and store them in an array
const imageURLs = missionsContent
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line !== "")
  .map((line) => path.join(folderPath, line));

console.log(imageURLs); */

/*const fs = require("fs");
const path = require("path");

const folderPath = "./slides"; // Replace with the path to your folder

// Read the content of the 'missions' file
const missionsFilePath = path.join(folderPath, "missions");
const missionsContent = fs.readFileSync(missionsFilePath, "utf-8");

// Extract the URLs from the content and store them in an array
const imageURLs = missionsContent
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line !== "")
  .map((line) => path.join(folderPath, line));

console.log(imageURLs);*/

const fs = require("fs");
const path = require("path");

const folderPath = "./slides"; // Replace with the path to your folder

// Read the contents of the 'missions' folder
const missionsFolderPath = path.join(folderPath, "missions");
const imageFiles = fs.readdirSync(missionsFolderPath);

// Extract the URLs of the image files and store them in an array
let missionaries = imageFiles.map((file) =>
  path.join(missionsFolderPath, file)
);

console.log(imageURLs);
