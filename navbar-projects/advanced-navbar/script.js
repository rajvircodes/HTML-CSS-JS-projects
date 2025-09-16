// Get Elements 

const menuBtn = document.getElementById("menuBtn");
const fullscreenNav = document.getElementById("fullscreenNav");
const darkModeToggle = document.getElementById("darkModeToggle")
const body = document.body


// toggle fullsceeen menu 

menuBtn.addEventListener("click", () => {
    fullscreenNav.classList.toggle("active");
});

// Toggle dark mode 
darkModeToggle.addEventListener("click", () => {
   body.classList.toggle("dark-mode");
   darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});