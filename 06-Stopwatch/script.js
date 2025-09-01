const timerE1 = document.getElementById("timer");
const startButtonE1 = document.getElementById("start");
const stopButtonE1 = document.getElementById("stop");
const resetButtonE1 = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerE1.textContent = formatTime(elapsedTime);
    }, 10);
    startButtonE1.disabled = true;
    stopButtonE1.disabled = false;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    const formattedMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedHours = hours < 10 ? "0" + hours : hours;

    return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + ":" + formattedMilliseconds;
}

function stopTimer(){
    clearInterval(timerInterval);
    startButtonE1.disabled = false;
    stopButtonE1.disabled = true;
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerE1.textContent = "00:00:00:00";
    startButtonE1.disabled = false;
    stopButtonE1.disabled = true;
}

startButtonE1.addEventListener("click", startTimer);
stopButtonE1.addEventListener("click", stopTimer);
resetButtonE1.addEventListener("click", resetTimer);