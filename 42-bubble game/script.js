let timer = 5;
let score = 0;
let hitrn = 0;

function increaseScore(){
  score += 10;
  let scoreEl = document.getElementById("scoreval").textContent = score;
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  let hitEl = document.getElementById("hitval").textContent = hitrn;
}


function makeBubble() {
  let clutter = "";
  for (i = 1; i <= 70; i++) {
    let bblNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${bblNumber}</div>`;
  }
  
  let pbt = (document.querySelector(".pbottom").innerHTML = clutter);
}

function runTimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      let timerEl = (document.getElementById("timerValue").textContent = timer);
    } else {
      clearInterval(timerint);
      document.querySelector(".pbottom").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbottom").addEventListener("click",function(dets){
  let clickedNumber = (Number(dets.target.textContent));
  if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
  
});

runTimer();
makeBubble();
getNewHit();

