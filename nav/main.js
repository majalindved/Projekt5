//Når man scroller ned fra 50px fra toppen, vil headerens font size blive mindre
window.onscroll = function() {scrollFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "24px";
  } else {
    document.getElementById("header").style.fontSize = "36px";
  }
}
// Får DOM elementerne
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Hvad der sker
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Åbne funktion
function openModal() {
  modal.style.display = 'block';
}

// Luk funktion
function closeModal() {
  modal.style.display = 'none';
}

// Lukker hvis man klikker udenfor boksen
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
