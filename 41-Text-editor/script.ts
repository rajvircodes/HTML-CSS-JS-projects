const inputEl = document.getElementById("text") as HTMLInputElement;
let notes = document.getElementById("notes") as HTMLParagraphElement;

inputEl.addEventListener("input",function():void{
    notes.textContent = inputEl.value;
});
