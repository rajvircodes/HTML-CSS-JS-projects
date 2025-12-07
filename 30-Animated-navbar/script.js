const searBarContainerEL = document.querySelector(".search-bar-container");

const magnifiereEL = document.querySelector(".magnifier");

magnifiereEL.addEventListener("click", () => {
    searBarContainerEL.classList.toggle("active");
});

//my code