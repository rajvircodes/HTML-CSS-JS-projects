const timerEl = document.getElementById("timer") as HTMLDivElement;
const startButtonEl = document.getElementById("start") as HTMLButtonElement;
const stopButtonEl = document.getElementById("stop") as HTMLButtonElement;
const resetButtonEl = document.getElementById("reset") as HTMLButtonElement;

// typing and type inference
let startTime:number = 0;
let elapsedTime:number = 0;

// return value
let timerInterval:number | undefined;

function startTimer():void{
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function formatTime(elapsedTime:number):string{
    const milliseconds:number = Math.floor((elapsedTime % 1000) / 10);
    const seconds:number = Math.floor((elapsedTime / 1000) % 60);
    const minutes:number = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours:number = Math.floor(elapsedTime / (1000 * 60 * 60));

    const formattedMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedHours = hours < 10 ? "0" + hours : hours;

    return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + ":" + formattedMilliseconds;
}

function stopTimer():void{
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

function resetTimer():void{
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00:00";
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);