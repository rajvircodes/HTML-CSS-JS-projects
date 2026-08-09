// 1. Interface Declaration (Custom Object Type)
interface HistoryItem {
  expression: string;
  result: string | number;
}

// 2. Element Type Assertions
const display = document.getElementById("display") as HTMLInputElement;
const historyList = document.getElementById("history-list") as HTMLUListElement;
const historyPanel = document.getElementById("history-panel") as HTMLDivElement;

// 3. Typed Array of Objects
let historyData: HistoryItem[] = [];

function appendValue(value: string): void {
  // Prevent multiple decimals in one number segment
  if (value === "." && display.value.includes(".")) {
    const lastPart = display.value.split(/[\+\-\*\/]/).pop();
    if (lastPart?.includes(".")) return;
  }
  display.value += value;
}

function clearDisplay(): void {
  display.value = "";
}

function deleteLast(): void {
  display.value = display.value.slice(0, -1);
}

function calculateResult(): void {
  if (display.value === "") return;

  try {
    const expression: string = display.value;

    const result: number | string = eval(expression);

    addToHistory(expression, result);

    display.value = String(result);
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1500);
  }
}

function addToHistory(expr: string, res: number | string): void {
  const entry: HistoryItem = { expression: expr, result: res };
  historyData.unshift(entry);
  renderHistory();
}

function renderHistory(): void {
  historyList.innerHTML = "";

  historyData.forEach((item: HistoryItem): void => {
    const li = document.createElement("li");
    li.className = "history-item";
    li.innerHTML = `<strong>${item.expression}</strong> = ${item.result}`;

    li.onclick = (): void => {
      display.value = String(item.result);
    };

    historyList.appendChild(li);
  });
}

function toggleHistory(): void {
  const isHidden: boolean =
    historyPanel.style.display === "none" || historyPanel.style.display === "";
  historyPanel.style.display = isHidden ? "block" : "none";
}

function clearHistory(): void {
  historyData = [];
  renderHistory();
}