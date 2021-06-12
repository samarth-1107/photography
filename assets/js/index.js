// PRELOADER
setTimeout(function () {
    document.getElementById("loading").style.display = "none";
}, 3000);

// HAMBURGER RESPONSIVE
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');


burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
});
navlist.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
});