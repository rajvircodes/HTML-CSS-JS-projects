"use strict";
const inputEl = document.getElementById("text");
let notes = document.getElementById("notes");
inputEl.addEventListener("input", function () {
  notes.textContent = inputEl.value;
});
