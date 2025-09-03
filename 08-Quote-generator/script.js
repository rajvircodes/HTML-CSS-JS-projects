// 1. Array of quotes
const quotes = [
    "Code is like human.When you have to explain it, it's bad.",
    "Experience is the name everyone gives to their mistakes ",
    "JavaScript is the duct tape of Internet",
    "Simplicity is the soul of officiecy",
    "First solve the problem. Then, write the code."
];

// 2. Select DOM elements
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote');

// 3. function to get random quote 

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

// 4.Function to update the DOM

function updateQuote(){
    const quote = getRandomQuote();
    quoteText.textContent = quote;
}

// 5. Event Listener
newQuoteBtn.addEventListener("click", updateQuote);
