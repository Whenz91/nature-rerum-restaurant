const mobileMenuButton = document.querySelector(".mobile-menu");
const sideNav = document.querySelector(".sidenav");

mobileMenuButton.addEventListener("click", function() {
    this.classList.toggle("active");
    sideNav.classList.toggle("active");
})