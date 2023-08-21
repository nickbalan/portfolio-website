// Get the Modal
var modal = document.getElementById("modal-gallery");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img-n1");
var captionText = document.getElementById("caption");

// Modal Image Gallery function
function onClick(element) {
  modalImg.src = element.src;
  modal.style.display = "block";
  captionText.innerHTML = element.alt;
}