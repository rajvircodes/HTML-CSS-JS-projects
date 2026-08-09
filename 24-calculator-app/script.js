"use strict";
// 2. Element Type Assertions
const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const historyPanel = document.getElementById("history-panel");
// 3. Typed Array of Objects
let historyData = [];
function appendValue(value) {
    // Prevent multiple decimals in one number segment
    if (value === "." && display.value.includes(".")) {
        const lastPart = display.value.split(/[\+\-\*\/]/).pop();
        if (lastPart?.includes("."))
            return;
    }
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    if (display.value === "")
        return;
    try {
        const expression = display.value;
        const result = eval(expression);
        addToHistory(expression, result);
        display.value = String(result);
    }
    catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
function addToHistory(expr, res) {
    const entry = { expression: expr, result: res };
    historyData.unshift(entry);
    renderHistory();
}
function renderHistory() {
    historyList.innerHTML = "";
    historyData.forEach((item) => {
        const li = document.createElement("li");
        li.className = "history-item";
        li.innerHTML = `<strong>${item.expression}</strong> = ${item.result}`;
        li.onclick = () => {
            display.value = String(item.result);
        };
        historyList.appendChild(li);
    });
}
function toggleHistory() {
    const isHidden = historyPanel.style.display === "none" || historyPanel.style.display === "";
    historyPanel.style.display = isHidden ? "block" : "none";
}
function clearHistory() {
    historyData = [];
    renderHistory();
}
