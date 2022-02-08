// Dropdown active menu

  document.getElementById("dropDownCinema").onclick = function(){
	document.getElementById("dropDownCinema").style.color = 'red';
  document.getElementById("dropDownRestaurant").style.color = 'white';
  document.getElementById("dropDownBar").style.color = 'white';
  document.getElementById("dropDownPrivate").style.color = 'white';
 } 

  document.getElementById("dropDownRestaurant").onclick = function(){
	document.getElementById("dropDownRestaurant").style.color = 'red';
  document.getElementById("dropDownCinema").style.color = 'white';
  document.getElementById("dropDownBar").style.color = 'white';
  document.getElementById("dropDownPrivate").style.color = 'white';
 }

  document.getElementById("dropDownBar").onclick = function(){
	document.getElementById("dropDownBar").style.color = 'red';
  document.getElementById("dropDownCinema").style.color = 'white';
  document.getElementById("dropDownRestaurant").style.color = 'white';
  document.getElementById("dropDownPrivate").style.color = 'white';
 }

  document.getElementById("dropDownPrivate").onclick = function(){
	document.getElementById("dropDownPrivate").style.color = 'red';
  document.getElementById("dropDownCinema").style.color = 'white';
  document.getElementById("dropDownRestaurant").style.color = 'white';
  document.getElementById("dropDownBar").style.color = 'white';
 }


// -----------------------SLIDESHOW GALLERY-------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumbnails");
  var captionText = document.getElementById("caption");
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


// --------------------------- Video Player -------------------------

  function videoUrl(x){
  document.getElementById("vidSlider").src = x;
  }
  