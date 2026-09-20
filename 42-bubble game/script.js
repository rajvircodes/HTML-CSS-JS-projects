"use strict";
// State Variables
let timerCount = 60;
let currentScore = 0;
let targetHitNumber = 0;
let timerInterval;
// DOM Elements
const hitValEl = document.getElementById("hitval");
const timerValEl = document.getElementById("timerValue");
const scoreValEl = document.getElementById("scoreval");
const panelBottomEl = document.querySelector(".pbottom");
function increaseScore() {
    currentScore += 10;
    scoreValEl.textContent = currentScore.toString();
}
function getNewHitNumber() {
    targetHitNumber = Math.floor(Math.random() * 10);
    hitValEl.textContent = targetHitNumber.toString();
}
function makeBubbles() {
    let bubblesHTML = "";
    for (let i = 1; i <= 70; i++) {
        const bubbleNumber = Math.floor(Math.random() * 10);
        bubblesHTML += `<div class="bubble">${bubbleNumber}</div>`;
    }
    panelBottomEl.innerHTML = bubblesHTML;
}
function startTimer() {
    timerInterval = window.setInterval(() => {
        if (timerCount > 0) {
            timerCount--;
            timerValEl.textContent = timerCount.toString();
        }
        else {
            clearInterval(timerInterval);
            panelBottomEl.innerHTML = `<h1 class="game-over">Game Over</h1>`;
        }
    }, 1000);
}
// Event Delegation with Type Guarding
panelBottomEl.addEventListener("click", (event) => {
    const clickedElement = event.target;
    // Ensure click was specifically on a bubble
    if (clickedElement.classList.contains("bubble")) {
        const clickedNumber = Number(clickedElement.textContent);
        if (clickedNumber === targetHitNumber) {
            increaseScore();
            makeBubbles();
            getNewHitNumber();
        }
    }
});
// Initialize Game
startTimer();
makeBubbles();
getNewHitNumber();
