const countNumber = document.querySelector('.count') as HTMLDivElement;

const incrementBtn = document.getElementById('increment-btn') as HTMLButtonElement;
const decrementBtn = document.getElementById('decrement-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;


let count:number = 0;

function updateDisplay():void{
    countNumber.textContent = count.toString();
}


incrementBtn.addEventListener("click", ():void => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click",():void => {
    if(count >=1)
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", ():void => {
    count = 0;
    updateDisplay();
});




