
const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
const billInput = document.getElementById("billAmount") as HTMLInputElement;
const tipSelect = document.getElementById("tipPercent") as HTMLSelectElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

calculateBtn.addEventListener("click", (): void => {
  
  const bill: number = parseFloat(billInput.value);
  const tipRate: number = parseFloat(tipSelect.value);

  if (isNaN(bill) || bill <= 0) {
    resultDiv.textContent = "Please enter a valid bill amount.";
    return;
  }

  if (isNaN(tipRate)) {
    resultDiv.textContent = "Please select a valid tip percentage.";
    return;
  }

  const tip: number = bill * tipRate;
  const total: number = bill + tip;

  resultDiv.textContent = `Tip: ₹${tip.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
});