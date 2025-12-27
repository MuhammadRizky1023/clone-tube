const menuButton = document.querySelector(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");

themeButton.addEventListener("click", ()=> {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeButton.classList.toggle("uil-moon", !isDarkMode) 
    themeButton.classList.toggle("uil-sun", isDarkMode);
})
menuButton.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
})

if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}

