// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function() {
        if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            navMenu.classList.add("close");
        } else {
            navMenu.classList.remove("close");
            navMenu.classList.add("open");
        }
    });
});
