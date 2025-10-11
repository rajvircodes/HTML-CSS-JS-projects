// Select elements 

const bt = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");

// Function to generate random hex color 

function getRandomColor(){
    let letters = "12346789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Change background and update text 

btn.addEventListener("click",() =>{
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
});