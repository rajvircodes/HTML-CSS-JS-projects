let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el")



function startGame(){
    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Cards:" + firstCard+" " +secondCard;
    
    if(sum <= 20){
        message = "Do you wabt to draw a new Card?";
    }else if (sum === 21){
        message = "Whooo! You've got Blackjack!";
    }else {
        message = "You are out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}