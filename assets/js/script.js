var buttonEl = document.querySelector("#save-task")
var tasksToDoEl = document.querySelector("#tasks-to-do");
// Task Handler to create task item

var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Create Li element when save task button is clicked.
buttonEl.addEventListener("click",createTaskHandler);


