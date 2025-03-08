function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = createTaskElement(taskText, false);
    document.getElementById("pendingTasks").appendChild(li);
    taskInput.value = "";
}

function createTaskElement(taskText, isCompleted) {
    let li = document.createElement("li");
    li.classList.add("task");
    if (isCompleted) li.classList.add("completed");
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    
    let completeBtn = document.createElement("button");
    completeBtn.textContent = isCompleted ? "Undo" : "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = function() {
        toggleTask(li, taskText);
    };
    
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function() {
        editTask(span);
    };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    
    li.appendChild(span);
    li.appendChild(btnGroup);
    return li;
}

function toggleTask(taskElement, taskText) {
    let parentList = taskElement.parentElement.id;
    taskElement.remove();
    let newList = parentList === "pendingTasks" ? "completedTasks" : "pendingTasks";
    document.getElementById(newList).appendChild(createTaskElement(taskText, parentList === "pendingTasks"));
}

function editTask(taskSpan) {
    let newTask = prompt("Edit task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask.trim();
    }
}