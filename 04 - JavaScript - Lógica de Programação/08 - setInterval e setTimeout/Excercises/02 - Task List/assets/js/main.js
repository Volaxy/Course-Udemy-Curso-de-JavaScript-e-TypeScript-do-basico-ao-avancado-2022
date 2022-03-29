function initialize() {
    let taskList = document.querySelector(".task-list");
    let addTask = document.querySelector(".add-task");
    let task = document.querySelector(".task");

    task.addEventListener("keypress", function(e) {
        if(e.keyCode === 13) {
            if (!task.value) return;

            createTask(task.value);
            clearInput();
        }
    });

    addTask.addEventListener("click", function() {
        if (!task.value) return;

        createTask(task.value);
        clearInput();
    });




    function clearInput() {
        task.value = "";
        task.focus();
    }

    function createTask(taskDescription) {
        let li = document.createElement("li");
        li.innerText = `${taskDescription} `;
        let finishTaskButton = document.createElement("button");
        finishTaskButton.innerText = "Delete";

        finishTaskButton.addEventListener("click", function() {
            finishTaskButton.parentElement.remove();
            saveTasks();
        });

        li.appendChild(finishTaskButton);

        taskList.appendChild(li);

        saveTasks();
    }

    function saveTasks() {
        let liTasks = taskList.querySelectorAll("li");
        let liDescriptionTasks = [];

        for(let task of liTasks) {
            let taskText = task.innerText;
            taskText = taskText.replace("Delete", "").trim();

            liDescriptionTasks.push(taskText);
        }

        let tasksJSON = JSON.stringify(liDescriptionTasks);
        localStorage.setItem("tasks", tasksJSON);
    }

    function readSavedTasks() {
        let tasks = localStorage.getItem("tasks");
        
        for(let task of JSON.parse(tasks)) {
            createTask(task);
        }
    }

    readSavedTasks();
}

initialize();