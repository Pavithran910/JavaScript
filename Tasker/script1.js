var res = document.getElementById("indication");
var logout = document.querySelector(".logout");
var tapButton = document.getElementById("categories");

function signInClick() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.length == 0 && password.length == 0) {
        res.innerHTML = "Insert your Email and Password.";
        res.style.color = "red";
    } else if (email.length == 0) {
        res.innerHTML = "Insert your Email.";
        res.style.color = "red";
    } else if (password.length == 0) {
        res.innerHTML = "Insert your Password.";
        res.style.color = "red";
    } else if (email === "pavi@gmail.com" && password === "Password@123") {
        window.location.href = "homepage.html"
    } else {
        res.innerHTML = "Email and Password are invalid"
        res.style.color = "red"
    }
}

function categories() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

var overlay = document.querySelector(".overlay")
var insertTask = document.querySelector(".insert-task")
var edityourTask = document.querySelector(".edit-yourtask")

function addtask() {
    overlay.style.display = "block"
    insertTask.style.display = "block"
}

function cancel() {
    overlay.style.display = "none"
    insertTask.style.display = "none"
    deletetask.style.display = "none"
    edityourTask.style.display = "none"
}

var deletetask = document.querySelector(".deleteTask-btn")

function del() {
    overlay.style.display = "block"
    deletetask.style.display = "block"
}

function editicon() {
    edityourTask.style.display = "block"
    overlay.style.display = "block"
}

var radio = document.getElementById("ex1");
var taskbutton = document.querySelector(".task1");

radio.addEventListener("click", function () {
    if (taskbutton.style.textDecoration === "none") {
        taskbutton.style.textDecoration = "line-through";
        taskbutton.style.color = "gray";
    } else {
        taskbutton.style.textDecoration = "none";
        taskbutton.style.color = "black";
        this.checked = false;
    }
});

function add() {
    var taskName = document.getElementById("insert-name").value;
    var category = document.getElementById("category").value;

    
    var task = {
        name: taskName,
        category: category
    };

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(task);

    document.getElementById("insert-name").value = "";
    document.getElementById("category").value = "";
    overlay.style.display="none";
    insertTask.style.display="none";
}

function renderTask(task) {
    var taskBox = document.createElement("div");
    taskBox.classList.add("taskbox1");

    var rectangle = document.createElement("div");
    rectangle.classList.add("rectangle1");

    var radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "tasks";
    rectangle.appendChild(radioInput);

    var taskHome = document.createElement("div");
    taskHome.classList.add("taskhome");

    var taskButton = document.createElement("button");
    taskButton.innerHTML = "<b>" + task.name + "</b>";
    taskHome.appendChild(taskButton);

    var homeBox = document.createElement("div");
    homeBox.classList.add("homebox");
    homeBox.innerHTML = "<p>" + task.category + "</p>"; 
    taskHome.appendChild(homeBox);

    rectangle.appendChild(taskHome);

    var editDelete = document.createElement("div");
    editDelete.classList.add("edit-delete");

    var editIcon = document.createElement("img");
    editIcon.src = "./edit.png";
    editIcon.onclick = editicon;
    editIcon.classList.add("edit-btn");
    editDelete.appendChild(editIcon);

    var deleteIcon = document.createElement("img");
    deleteIcon.src = "./delete.png";
    deleteIcon.onclick = del;
    deleteIcon.classList.add("delete-btn");
    editDelete.appendChild(deleteIcon);

    rectangle.appendChild(editDelete);

    taskBox.appendChild(rectangle);

    document.getElementById("tasks-container").appendChild(taskBox);
}

function renderTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        renderTask(task);
    });
}

renderTasksFromLocalStorage();

renderTasksFromLocalStorage();

document.querySelector('.delete').addEventListener('click', dltbtn);
document.querySelector('.edit-task').addEventListener('click', editbtn);
function del() {
    var taskBox = this.closest('.taskbox1'); 
    var taskName = taskBox.querySelector('button').innerText; 
    var confirmDelete = confirm("Are you sure you want to delete the task: " + taskName + "?");
    if (confirmDelete) {
   
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(function(task) {
            return task.name !== taskName;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskBox.remove();
    }
}

function editicon() {
    var taskBox = this.closest('.taskbox1'); 
    var taskName = taskBox.querySelector('button').innerText;     
    var editField = document.querySelector('.edit-yourtask input[name="edit-task"]');
    editField.value = taskName; 
    overlay.style.display = "block";
    edityourTask.style.display = "block";
}

function editbtn() {
    var taskBox = document.querySelector('.taskbox1'); 
    var editField = document.querySelector('.edit-yourtask input[name="edit-task"]');
    var editedTaskName = editField.value.trim(); 
    if (editedTaskName !== "") {
        var taskButton = taskBox.querySelector('button');
        taskButton.innerHTML = "<b>" + editedTaskName + "</b>"; 

        
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function(task) {
            if (task.name === taskButton.innerText) {
                task.name = editedTaskName;
            }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));

       
        overlay.style.display = "none";
        edityourTask.style.display = "none";
    } else {
        alert("Please enter a valid task name.");
    }
}
