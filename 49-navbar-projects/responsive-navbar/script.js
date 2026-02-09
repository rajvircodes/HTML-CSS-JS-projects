const mobilemenu = document.getElementById("mobile-menu");
const navLinks  = document.querySelector (".nav-links");

mobilemenu.addEventListener("click",() => {
    navLinks.classList.toggle("active");
})