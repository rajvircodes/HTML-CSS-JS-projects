//Get all buttons and count display

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const descreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");


// Initialize count
let count = 0;

//Increase button 

increaseBtn.addEventListener("click",() =>{
    count++;
    updateDisplay();
});

//Decrease button 

descreaseBtn.addEventListener("click", () =>{
    count--;
    updateDisplay();
});

//Reset button 
resetBtn.addEventListener("click",() => {
    count = 0;
    updateDisplay();
});

// Function to update number on screen

function updateDisplay(){
    countDisplay.textContent = count;

    //Color feedback 
if(count > 0){
    countDisplay.style.color = "#28a745"; // Green
}else if (count < 0){
    countDisplay.style.color = "#dc3545"; // Red
}else {
    countDisplay.style.color = "white"; // Default
}
}


