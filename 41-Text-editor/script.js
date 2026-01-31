const inp = document.getElementById("text");
let notes = document.getElementById("notes")

inp.addEventListener("input",function(){
    console.log(inp.value);
    notes.textContent = inp.value;
    
})
