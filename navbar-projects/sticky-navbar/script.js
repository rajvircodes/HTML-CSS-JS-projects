window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50){
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
});