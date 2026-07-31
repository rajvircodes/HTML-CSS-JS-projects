const inputBox = document.getElementById("input-box") as HTMLInputElement;
const listContainer = document.getElementById("list-container") as HTMLElement;

function addTask():void {
  if (inputBox.value === "") {
    alert("You must write something !");
  } else {
    let li:HTMLLIElement = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span:HTMLSpanElement = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e:MouseEvent):void {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
      target.parentElement?.remove();
      saveData();
    }
  },
  false,
);

function saveData():void{
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask():void{
  const data = localStorage.getItem("data");
  if(data){
  listContainer.innerHTML = data;
  }
}
showTask();
