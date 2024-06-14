

document.addEventListener("DOMContentLoaded",()=>{

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


// to toggle the footer

function openMaterial(){
    document.getElementsByClassName("material")[0].style.display = "block";
    document.getElementsByClassName("add")[0].style.display = "none";
    document.getElementsByClassName("remove")[0].style.display = "block";
}
function closeMaterial(){
    document.getElementsByClassName("material")[0].style.display = "none";
    document.getElementsByClassName("add")[0].style.display = "block";
    document.getElementsByClassName("remove")[0].style.display = "none";
}



function openMaterial1(){
    document.getElementsByClassName("material")[1].style.display = "block";
    document.getElementsByClassName("add")[1].style.display = "none";
    document.getElementsByClassName("remove")[1].style.display = "block";
}
function closeMaterial1(){
    document.getElementsByClassName("material")[1].style.display = "none";
    document.getElementsByClassName("add")[1].style.display = "block";
    document.getElementsByClassName("remove")[1].style.display = "none";
}





});




