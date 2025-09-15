const addTaskbtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addTaskbtn.addEventListener("click",addTask);
function addTask(){
    const taskText = taskInput.value.trim();    
   
    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () =>{
        li.remove();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = " ";
}


