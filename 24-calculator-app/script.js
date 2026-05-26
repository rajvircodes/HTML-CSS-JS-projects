const display = document.getElementById("display");
    const historyList = document.getElementById("history-list");
    const historyPanel = document.getElementById("history-panel");
    let historyData = [];

    function appendValue(value) {
        // Prevent multiple decimals in one number
        if (value === "." && display.value.includes(".")) {
            const lastPart = display.value.split(/[\+\-\*\/]/).pop();
            if (lastPart.includes(".")) return;
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
        if (display.value === "") return;
        
        try {
            const expression = display.value;
            const result = eval(expression);
            
            // Add to History
            addToHistory(expression, result);
            
            display.value = result;
        } catch (error) {
            display.value = "Error";
            setTimeout(clearDisplay, 1500);
        }
    }

    function addToHistory(expr, res) {
        const entry = { expression: expr, result: res };
        historyData.unshift(entry); // Add to start of array
        renderHistory();
    }

    function renderHistory() {
        historyList.innerHTML = "";
        historyData.forEach((item, index) => {
            const li = document.createElement("li");
            li.className = "history-item";
            li.innerHTML = `<strong>${item.expression}</strong> = ${item.result}`;
            // If you click a history item, it puts the result back in display
            li.onclick = () => {
                display.value = item.result;
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