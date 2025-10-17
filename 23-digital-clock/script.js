function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();


    // Formae time - add 0 before dingle digits 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    const timeString = `${hours}:${minutes}:${second}`
    document.getElementById("clock").textContent = timeString;

}


// Update clock every 1 second 
setInterval(() => {
    updateClock();
},1000);
