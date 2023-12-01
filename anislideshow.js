window.onload=changeImg;

var i = 0; 			// Start Point
var images = ["slides/1.png","slides/2.png","slides/3.png","slides/4.png","slides/15.png","slides/Live Programs.jpeg","slides/Church Media.png","slides/It's Ours To Reach.png"];	// Images Array
var time = 9000;	// Time Between Switch

function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
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
  let detail="`<h1>HeLLo</h1>`"
  let result = getImageFromURL(src, images)
  console.log(result)
  var x = document.getElementById("modal");
    x.style.display = "block";
    document.window.src = result
}
function closemodal() {
  var x = document.getElementById("modal");
  x.style.display = "none";
}

//Find object image.
function getObjectByImage(announcements, image) {
  for (let i = 0; i < announcements.length; i++) {
    if (announcements[i].image === image) {
      return announcements[i];
    }
  }
  return null; // Return null if no matching object is found
}

//This is a nested function which only called
function getImageFromURL(url, imagesArray) {
  if (!url || typeof url !== 'string') {
    return null; // Invalid URL, return null
  }
  //let regex1 = /slides\/(\w+\.(?:png|jpeg|jpg))/; // Regular expression to match "slides/" followed by the image filename
  //With regex1 I cannot get the image url without the %20 space sign.
  let regex2 = /slides\/([^/]+(?:png|jpeg|jpg))/;
  let matches = url.match(regex2); // Find matches in the given URL

  const desiredImage = decodeURIComponent(matches[1]);
  const ImgObjectDetails = getObjectByImage(announcements, desiredImage);

  console.log(ImgObjectDetails)

  if (matches) {
    var modalDetails = "";
    var title = ImgObjectDetails.title
    var detail = ImgObjectDetails.details
    //v1 let matchedImage = matches[0] //This gave a none decoded url such as "http://127.0.0.1:5500/slides/Live%20Programs.jpeg"
    let matchedImage = decodeURIComponent(matches[0]); // Extract the matched image filename
    if (imagesArray.includes(matchedImage)) {
      modalDetails += `<div class="column">
    <img id="ModalImage" name="window" style="width:50vw" alt="Announcements">
    </div>
    <div class="column right">
    <h1>${title}</h1>
    <p>${detail}</p>
    </div>`
      document.querySelector(".row").innerHTML = modalDetails
      return matchedImage; // Return the matched image filename
    }
  }

  return null; // No match found or image not present in the array, return null
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
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