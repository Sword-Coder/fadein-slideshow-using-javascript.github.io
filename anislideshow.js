window.onload = changeImg;
const folderPath = "./slide"; // Replace with the path to your folder

const missionsFolderPath = `${folderPath}/missions`;
fetch("slides/missions")
  .then((response) => response.text())
  .then((content) => {
    // Extract the URLs from the content and store them in an array
    const imageURLs = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => `${missionsFolderPath}/${line}`);

    console.log(imageURLs);
  })
  .catch((error) => console.error(error));

var currentImage;
var i = 0; // Start Point
var time = 10000; // Time Between Switch of Images
var dayOfYear;
var modalDetails = "";
var images = [
  "slides/verseoftheday.png",
  "slides/1.png",
  "slides/2.png",
  "slides/3.png",
  "slides/4.png",
  "slides/15.png",
  "slides/17.png",
  "slides/18.png",
  "slides/Live Programs.jpeg",
  "slides/Church Media.png",
  "slides/It's Ours To Reach.png",
]; // Images Array

function changeImg() {
  document.slide.src = images[i];
  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }
  // Run function every x seconds
  setTimeout("changeImg()", time);
}

function display(src) {
  result = getImageFromURL(src, images);
  var x = document.getElementById("modal");
  x.style.display = "block";
  document.window.src = result;
}

function closemodal() {
  var x = document.getElementById("modal");
  modalDetails = "";
  x.style.display = "none";
}

//Find object image.
//Announcements in this function is the array in store-data.js
function getObjectByImage(announcements, image) {
  for (let i = 0; i < announcements.length; i++) {
    if (announcements[i].image === image) {
      return announcements[i];
    }
  }
  return null; // Return null if no matching object is found
}

//This is a funtion that gets the # of the current day in the year
function getDayOfYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}
// console.log(dayOfYear);

//This is a funtion referred to getVerseByDayOfYear which searches for the specific verse.
function searchVerse(reference) {
  //console.log(reference);
  //console.log(parseInt(reference));
  dayOfYear = getDayOfYear();
  var referenceParts = reference.split(" ");
  console.log(referenceParts);
  var book = referenceParts[0];
  var completeChapterandVerse;
  var chapterVerse = referenceParts[1].split(":");
  var chap = chapterVerse[0];
  var ver = chapterVerse[1];

  if (referenceParts.length === 3) {
    book = referenceParts[0] + " " + referenceParts[1];
    //console.log(book);
    completeChapterandVerse = referenceParts[2];
    chapterVerse = referenceParts[2].split(":");
    chap = chapterVerse[0];
    //console.log(chap);
    ver = chapterVerse[1];
    //console.log(ver);
  } else if (referenceParts.length === 4) {
    book =
      referenceParts[0] + " " + referenceParts[1] + " " + referenceParts[2];
    console.log(book);
    completeChapterandVerse = referenceParts[3];
    chapterVerse = referenceParts[3].split(":");
    chap = chapterVerse[0];
    //console.log(chap);
    ver = chapterVerse[1];
  } else {
    var book = referenceParts[0];
    completeChapterandVerse = referenceParts[1];
    var chapterVerse = referenceParts[1].split(":");
    var chap = chapterVerse[0];
    var ver = chapterVerse[1];
  }

  if (bibleData.hasOwnProperty(book)) {
    var chapters = bibleData[book].chapters;
    //console.log(chapters);
    //console.log(chap);
    for (var i = 0; i < chapters.length; i++) {
      if (chapters[i].chapter === chap) {
        var verNum = parseInt(ver);
        var checkedVerse = chapters[i].verses[verNum - 1];
        var scriptureVerse = checkedVerse[ver];
        var verseOfTheDay = {
          Reference: book,
          ChapterandVerse: completeChapterandVerse,
          ScriptureVerse: scriptureVerse,
        };
        return verseOfTheDay;
      }
    }
  }
}

//This function referred to getImageFromURL
function getVerseByDayOfYear(dayOfYear) {
  //console.log(dayOfYear);
  if (dayOfYear >= 1 && dayOfYear <= memoryverses.length) {
    let verseOfTheDay = memoryverses[dayOfYear - 1];
    let result = searchVerse(verseOfTheDay);
    return result;
  } else {
    return (
      "Invalid day of the year. Please provide a number between 1 and " +
      memoryverses.length +
      "."
    );
  }
}

//This is a nested function is referred to by the function display() which only calls the url from the img src="", the current image shown on the device.
function getImageFromURL(url, imagesArray) {
  if (!url || typeof url !== "string") {
    return null; // Invalid URL, return null
  }
  //let regex1 = /slides\/(\w+\.(?:png|jpeg|jpg))/; // Regular expression to match "slides/" followed by the image filename
  //With regex1 I cannot get the image url without the %20 space sign.
  let regex2 = /slides\/([^/]+(?:png|jpeg|jpg))/;
  let matches = url.match(regex2); // Find matches in the given URL

  //Here I am choosing between the results given to me in matches.
  const desiredImage = decodeURIComponent(matches[1]);
  const ImgObjectDetails = getObjectByImage(announcements, desiredImage);
  if (desiredImage === "verseoftheday.png") {
    console.log("Today, is Day: " + dayOfYear);
    let verse = getVerseByDayOfYear(dayOfYear);
    console.log(verse);
    var reference = verse.Reference;
    var chapandVerse = verse.ChapterandVerse;
    var scriptureVerse = verse.ScriptureVerse;
    let matchedImage = decodeURIComponent(matches[0]);
    //Change the value of the currentImage so that it stays the same when searching for a new verse.
    currentImage = matchedImage;

    modalDetails += `<div class="column">
    <img id="ModalImage" name="window" style="width:50vw" alt="Announcements">
    </div>
    <div class="column right">
    <h2>Day ${dayOfYear}</h1>
    <h1>${reference} ${chapandVerse}</h1>
    <p>${scriptureVerse}</p>
    <a href="#" class="previous" onclick="prevVerse(${dayOfYear})">&laquo; Previous</a>
    
    </div>`;
    document.querySelector(".row").innerHTML = modalDetails;
    return matchedImage;
  } else if (matches) {
    var title = ImgObjectDetails.title;
    var detail = ImgObjectDetails.details;
    //v1 let matchedImage = matches[0] //This gave a none decoded url such as "http://127.0.0.1:5500/slides/Live%20Programs.jpeg"
    let matchedImage = decodeURIComponent(matches[0]); // Extract the matched image filename
    if (imagesArray.includes(matchedImage)) {
      modalDetails += `<div class="column">
    <img id="ModalImage" name="window" style="width:50vw" alt="Announcements">
    </div>
    <div class="column right">
    <h1>${title}</h1>
    <p>${detail}</p>
    </div>`;
      document.querySelector(".row").innerHTML = modalDetails;
      return matchedImage; // Return the matched image filename
    }
  }
  return null; // No match found or image not present in the array, return null
}
//This function gives you the ability to go back a day.
function prevVerse(dayOfYear) {
  let presentDay = getDayOfYear();
  if (dayOfYear === 1) {
    modalDetails = "";
    dayOfYear = presentDay;
    display(currentImage);
  } else {
    modalDetails = "";
    console.log("<<PREVIOUS");
    dayOfYear = dayOfYear - 1;
    console.log("Subtracted day: " + dayOfYear);
    let newVerse = getVerseByDayOfYear(dayOfYear);
    console.log(newVerse);
    var reference = newVerse.Reference;
    var chapandVerse = newVerse.ChapterandVerse;
    var scriptureVerse = newVerse.ScriptureVerse;
    modalDetails += `<div class="column">
    <img id="ModalImage" name="window" src="${currentImage}" style="width:50vw" alt="Announcements">
    </div>
    <div class="column right">
    <h2>Day ${dayOfYear}</h2>
    <h1>${reference} ${chapandVerse}</h1>
    <p>${scriptureVerse}</p>
    <a href="#" class="previous" onclick="prevVerse(${dayOfYear})">&laquo; Previous</a>
    <a href="#" class="next" onclick="nextVerse(${dayOfYear})">Next &raquo;</a>
    </div>`;
    document.querySelector(".row").innerHTML = modalDetails;
    console.log("This is the # of the day now: " + dayOfYear);
  }
}

function nextVerse(dayOfYear) {
  console.log("Still the day is: " + dayOfYear);
  let presentDay = getDayOfYear();
  dayOfYear = dayOfYear + 1;
  console.log(dayOfYear);
  if (dayOfYear === presentDay) {
    modalDetails = "";
    console.log("NEXT>>");
    dayOfYear = presentDay;
    display(currentImage);
  } else {
    modalDetails = "";
    console.log(modalDetails);
    console.log("Added day: " + dayOfYear);
    if (dayOfYear === presentDay) {
      dayOfYear = presentDay;
      display(currentImage);
    } else {
      let newVerse = getVerseByDayOfYear(dayOfYear);
      var reference = newVerse.Reference;
      console.log(reference);
      var chapandVerse = newVerse.ChapterandVerse;
      var scriptureVerse = newVerse.ScriptureVerse;
      console.log("This is the present day: " + presentDay);
      modalDetails += `<div class="column">
    <img id="ModalImage" name="window" src="${currentImage}" style="width:50vw" alt="Announcements">
    </div>
    <div class="column right">
    <h2>Day ${dayOfYear}</h2>
    <h1>${reference} ${chapandVerse}</h1>
    <p>${scriptureVerse}</p>
    <a href="#" class="previous" onclick="prevVerse(${dayOfYear})">&laquo; Previous</a>
    <a href="#" class="next" onclick="nextVerse(${dayOfYear})">Next &raquo;</a> 
    </div>`;
      document.querySelector(".row").innerHTML = modalDetails;
      console.log("This is the # of the day now: " + dayOfYear);
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}

/*(function(){
    "use strict"
    const container = document.querySelector("#content");
    const imgTag = document.querySelector("#myimage");
    let images = ["It's Ours To Reach.png","Church Media","1.png","2.png","3.png","4.png","11.png","15.png","Live Programs.png",];
    const nxtB = document.querySelector("#next");
    const preB = document.querySelector("#previous");
    let currentImage = 0;
    
    nxtB.addEventListener('click',(event)=>{
        event.preventDefault();
        currentImage++;
        if(currentImage===images.length){
            currentImage=0;
        }
        swapImage();
    });

    preB.addEventListener('click',(event)=>{
        event.preventDefault();
        currentImage--;
        if(currentImage<0){
            currentImage=images.length-1;
        }
        swapImage();
    });

    function swapImage () {
        'use strict'
        const newImage = document.createElement("img");
        newImage.src = `slides/${images[currentImage]}`;
        newImage.className = 'fadeinanimation';
        container.appendChild(newImage);
        if(container.children.length>2){
            container.children[0].remove();
        };        
    };
}());*/
