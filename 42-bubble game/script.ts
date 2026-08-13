// State Variables
let timerCount: number = 60;
let currentScore: number = 0;
let targetHitNumber: number = 0;
let timerInterval: number | undefined;

// DOM Elements
const hitValEl = document.getElementById("hitval") as HTMLDivElement;
const timerValEl = document.getElementById("timerValue") as HTMLDivElement;
const scoreValEl = document.getElementById("scoreval") as HTMLDivElement;
const panelBottomEl = document.querySelector(".pbottom") as HTMLDivElement;

function increaseScore(): void {
  currentScore += 10;
  scoreValEl.textContent = currentScore.toString();
}

function getNewHitNumber(): void {
  targetHitNumber = Math.floor(Math.random() * 10);
  hitValEl.textContent = targetHitNumber.toString();
}

function makeBubbles(): void {
  let bubblesHTML: string = "";
  for (let i: number = 1; i <= 70; i++) {
    const bubbleNumber: number = Math.floor(Math.random() * 10);
    bubblesHTML += `<div class="bubble">${bubbleNumber}</div>`;
  }
  panelBottomEl.innerHTML = bubblesHTML;
}

function startTimer(): void {
  timerInterval = window.setInterval((): void => {
    if (timerCount > 0) {
      timerCount--;
      timerValEl.textContent = timerCount.toString();
    } else {
      clearInterval(timerInterval);
      panelBottomEl.innerHTML = `<h1 class="game-over">Game Over</h1>`;
    }
  }, 1000);
}

// Event Delegation with Type Guarding
panelBottomEl.addEventListener("click", (event: MouseEvent): void => {
  const clickedElement = event.target as HTMLElement;

  // Ensure click was specifically on a bubble
  if (clickedElement.classList.contains("bubble")) {
    const clickedNumber: number = Number(clickedElement.textContent);
    
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