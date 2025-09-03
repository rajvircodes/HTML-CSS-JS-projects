const countNumber = document.querySelector('.count');
// console.log(countNumber);

const incrementBtn = document.getElementById('increment-btn');
console.log(incrementBtn);
const decrementBtn = document.getElementById('decrement-btn');
console.log(decrementBtn);
const resetBtn = document.getElementById('reset-btn');
console.log(resetBtn);


let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click",() => {
    if(count >=1)
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

function updateDisplay(){
    countNumber.textContent = count;
}



