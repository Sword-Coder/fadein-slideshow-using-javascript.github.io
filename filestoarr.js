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

//Mistake 3
/* This works and gives [
  'slides/missions/1 Tingson.png',
  'slides/missions/10 LIAN.png',
  'slides/missions/11 DELA CRUZ.png',
  'slides/missions/12 GENADA.png',
  'slides/missions/13 BLANCO.png',
  'slides/missions/14 ALISAN.png',
  'slides/missions/15 DE LA CRUZ.png',
  'slides/missions/16 LASTRA.png',
  'slides/missions/17 TAGARDA.png',
  'slides/missions/18 SOLORIANO.png',
  'slides/missions/19 FUNTECHA.png',
  'slides/missions/2 Unay.png',
  'slides/missions/20 Arana.png',
  'slides/missions/21 NIERVES.png',
  'slides/missions/22 MANUEL.png',
  'slides/missions/23 Mampay.png',
  'slides/missions/24 CAHUAN.png',
  'slides/missions/25 BANCALE.png',
  'slides/missions/26 TOLERO.png',
  'slides/missions/27 Suficiencia.png',
  'slides/missions/28 CERBAS.png',
  'slides/missions/29 PISTIN.png',
  'slides/missions/3 Escaro.png',
  'slides/missions/30 ARMAH.png',
  'slides/missions/31 ZACAL.png',
  'slides/missions/32 BALONZO.png',
  'slides/missions/33 MONTEALTO.png',
  'slides/missions/34 DAVE.png',
  'slides/missions/35 MAGLASANG.png',
  'slides/missions/36 NARVAEZ.png',
  'slides/missions/37 SINOY.png',
  'slides/missions/38 Paguntalan.png',
  'slides/missions/4 Arteta.png',
  'slides/missions/5 Nonn.png',
  'slides/missions/6 ALTURA.png',
  'slides/missions/7 ANGELES.png',
  'slides/missions/8 ANDRADA.png',
  'slides/missions/9 SATUNERO.png'
]
*/

/*
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

console.log(missionaries);
*/
/*
const folderPath = "slides"; // Replace with the path to your folder

const missionsFolderPath = `${folderPath}/missions`;
// Fetch the image URLs from the missions folder
fetch(missionsFolderPath)
  .then((response) => response.text())
  .then((content) => {
    console.log(content);
    // Extract the URLs from the content and store them in an array
    const imageURLs = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => `${missionsFolderPath}/${line}`);

    console.log(imageURLs);
  })
  .catch((error) => console.error(error));

  $(document).ready(function () {
    $.getJSON("bibleData.json", function (data) {
      // Use the loaded JSON data here
      var bibleData = data;
      // Your code that references bibleData goes here
    });
  });*/
