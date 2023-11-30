window.onload=changeImg;

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "slides/1.png";
images[1] = "slides/2.png";
images[2] = "slides/3.png";
images[3] = "slides/4.png";
images[4] = "slides/15.png";
images[5] = "slides/Live Programs.jpeg";
images[6] = "slides/Church Media.png";
images[7] = "slides/It's Ours To Reach.png";

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
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
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