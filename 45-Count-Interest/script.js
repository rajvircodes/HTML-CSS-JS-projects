let priceEl = document.getElementById("price");
let rateEl = document.getElementById("rate");
let timeEl = document.getElementById("time");
let totalEl = document.getElementById("total");

let btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let price = Number(priceEl.value);
    let rate = Number(rateEl.value);
    let time = Number(timeEl.value);

    
    if (price <= 0 || rate <= 0 || time <= 0) {
        totalEl.innerText = "❌ Please enter valid values";
        return;
    }

    let totalInterest = (price * rate * time) / 100;

    totalEl.innerText = `Total Interest: ₹ ${totalInterest}`;

    priceEl.value = "";
    rateEl.value = "";
    timeEl.value = "";
});
