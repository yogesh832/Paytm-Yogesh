// this is to smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector(".all-content"),
    smooth: true
});






function openModal() {
    document.getElementsByClassName("modal-signIn")[0].style.display = "block";
}

function closeModal() {
    document.getElementsByClassName("modal-signIn")[0].style.display = "none";
}

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    const modal = document.querySelector("modal-signIn")[0];
    if (event.target === modal) {
        closeModal();
    }
});

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
