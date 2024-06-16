


  // this is to smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector(".all-content"),
  smooth: true
});



// hamburger menu
var menuIcon = document.getElementById("menu-icon");
var navbar = document.getElementById("navbar");
var hamburgerClose=document.getElementById("hamburger-close");

function closeHamburgerMenu(){
 menuIcon.style.display="none";
  hamburgerClose.style.display="block";
hamburgerClose.addEventListener("click",()=>{
  navbar.classList.toggle("active");
  hamburgerClose.style.display="none";
  menuIcon.style.display="block";
});
}

menuIcon.addEventListener("click", () => {
   navbar.classList.toggle("active");
   closeHamburgerMenu();
});




//open signin modal
var modal = document.getElementById("modal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

document.querySelector(".signin").addEventListener("click", openModal);
document.querySelectorAll(".close-button").forEach(button => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("click", (event) => {
  if (!modal.contains(event.target) && !event.target.closest(".signin")) {
      closeModal();
  }
});








// to toggle the footer's material
function openMaterial(id) {
  const section = document.getElementById(id);
  section.querySelector(".material").style.display = "block";
  section.querySelector(".add").style.display = "none";
  section.querySelector(".remove").style.display = "block";
}

function closeMaterial(id) {
  const section = document.getElementById(id);
  section.querySelector(".material").style.display = "none";
  section.querySelector(".add").style.display = "block";
  section.querySelector(".remove").style.display = "none";
}

