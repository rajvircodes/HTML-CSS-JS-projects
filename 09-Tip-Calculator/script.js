document.getElementById("calculateBtn").addEventListener("click", function () {
  // Step 1: Get input values
  const billInput = document.getElementById("billAmount").value;
  const tipInput = document.getElementById("tipPercent").value;

  // Step 2: Convert to numbers
  const bill = parseFloat(billInput);
  const tipRate = parseFloat(tipInput);

  console.log("Bill entered:", bill);
  console.log("Tip rate selected:", tipRate);

  // Step 3: Validate input
  if (isNaN(bill) || bill <= 0) {
    document.getElementById("result").textContent = "Please enter a valid bill amount.";
    return;
  }

  if (isNaN(tipRate)) {
    document.getElementById("result").textContent = "Please select a valid tip percentage.";
    return;
  }

  // Step 4: Calculate tip and total
  const tip = bill * tipRate;
  const total = bill + tip;

  // Step 5: Update DOM
  document.getElementById("result").textContent = 
    `Tip: ₹${tip.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
});
