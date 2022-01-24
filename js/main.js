// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// } 

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





 

// Close the Modal
// function closeDropDown() {
//   document.getElementById("dropdown-content2").style.display = "none";
// }

// -------------------------CAROUSEL-------------------------------------

// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

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

//--------------------LIGHTBOX / GALLERY------------------------------------

