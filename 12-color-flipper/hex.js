"use strict";
// 1. Array containing valid Hexadecimal characters
const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"
];
// 2. Select DOM elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// 3. Helper function to generate a random index for the hex array
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
// 4. Event Listener to generate 6-character hex string
btn.addEventListener("click", () => {
    let hexColor = "#";
    // Loop 6 times to construct a valid #RRGGBB code
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
