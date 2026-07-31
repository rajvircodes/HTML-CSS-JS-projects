"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }
    else if (target.tagName === "SPAN") {
        target.parentElement?.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}
showTask();
