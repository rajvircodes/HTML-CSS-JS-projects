"use strict";
const countNumber = document.querySelector('.count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
let count = 0;
function updateDisplay() {
    countNumber.textContent = count.toString();
}
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});
decrementBtn.addEventListener("click", () => {
    if (count >= 1)
        count--;
    updateDisplay();
});
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
