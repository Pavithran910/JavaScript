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
    } else if(password<4){
        res.innerHTML = "Password length should be atleast 4.";
        res.style.color = "red";
    }else if (!/[A-Z]/.test(password)) {
        res.innerHTML = "Password should contain <br>at least one uppercase";
        res.style.color = "red";
        
    } else if (!/[a-z]/.test(password)) {
        res.innerHTML = "Password should contain <br>at least one lowercase";
        res.style.color = "red";
    } else if (!/[0-9]/.test(password)) {
        res.innerHTML = "Password should contain <br>at least one number";
        res.style.color = "red";
    } else if (!/[@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
        res.innerHTML = "Password should contain <br>at least one special character";
        res.style.color = "red";
    }else{
        window.location.href="homepage.html";
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

var overlay = document.querySelector(".overlay");
var insertTask = document.querySelector(".insert-task");
var edityourTask = document.querySelector(".edit-yourtask");
var deletetask = document.querySelector(".deleteTask-btn");

function addtask() {
    overlay.style.display = "block";
    insertTask.style.display = "block";
}

function cancel() {
    overlay.style.display = "none";
    insertTask.style.display = "none";
    deletetask.style.display = "none";
    edityourTask.style.display = "none";
}

//function dltbtn(event) {
     // overlay.style.display = "block";
    // deletetask.style.display = "block";
    // var ensuredbtn=document.querySelector(".delete")
    // function dltbtn(){
    //     var taskBox = event.target.closest('.taskbox1');
    //     taskBox.remove();
    //     overlay.style.display="none"
    //     deletetask.style.display="none"
    //     saveTasksToLocalStorage();
    // 
//}

function deleteTask(event) {
    var taskBox = event.target.closest('.taskbox1');
    var taskName = taskBox.querySelector('button').innerText;
    var confirmDelete = document.querySelector(".delete");

    if (confirmDelete) {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(function(task) {
            return task.name !== taskName;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskBox.remove();
    }
}

function editTask(event) {
    var taskBox = event.target.closest('.taskbox1');
    var taskName = taskBox.querySelector('button').innerText;
    var editField = document.querySelector('.edit-yourtask input[name="edit-task"]');
    editField.value = taskName;
    overlay.style.display = "block";
    edityourTask.style.display = "block";
    edityourTask.setAttribute("data-task-name", taskName);
}

function editbtn() {
    var oldTaskName = edityourTask.getAttribute("data-task-name");
    var editedTaskName = document.querySelector('.edit-yourtask input[name="edit-task"]').value.trim();
    if (editedTaskName !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.map(function(task) {
            if (task.name === oldTaskName) {
                task.name = editedTaskName;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasksFromLocalStorage();
        overlay.style.display = "none";
        edityourTask.style.display = "none";
    } else {
        alert("Please enter a valid task name.");
    }
}

function add() {
    var taskName = document.getElementById("insert-name").value;
    var category = document.getElementById("category").value;

    var task = {
        name: taskName,
        category: category,
        done: false
    };

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasksFromLocalStorage();

    document.getElementById("insert-name").value = "";
    document.getElementById("category").value = "";
    overlay.style.display = "none";
    insertTask.style.display = "none";
}

function renderTask(task) {
    var taskBox = document.createElement("div");
    taskBox.classList.add("taskbox1");

    var rectangle = document.createElement("div");
    rectangle.classList.add("rectangle1");

    var radioInput = document.createElement("input");
    radioInput.type = "checkbox";
    radioInput.checked = task.done;
    radioInput.addEventListener('change', function() {
        task.done = radioInput.checked;
        updateTaskStatus(task.name, task.done);
        if (radioInput.checked) {
            taskButton.style.textDecoration = "line-through";
            taskButton.style.color = "gray";
        } else {
            taskButton.style.textDecoration = "none";
            taskButton.style.color = "black";
        }
    });
    rectangle.appendChild(radioInput);

    var taskHome = document.createElement("div");
    taskHome.classList.add("taskhome");

    var taskButton = document.createElement("button");
    taskButton.innerHTML = "<b>" + task.name + "</b>";
    if (task.done) {
        taskButton.style.textDecoration = "line-through";
        taskButton.style.color = "gray";
    }
    taskHome.appendChild(taskButton);

    var homeBox = document.createElement("div");
    homeBox.classList.add("homebox");
    homeBox.classList.add("homebox-color");

    taskHome.appendChild(homeBox);

    var homeBoxcont = document.createElement("div");
    homeBoxcont.classList.add("contentTag");
    homeBoxcont.innerHTML = "<p>" + task.category + "</p>";
    taskHome.appendChild(homeBoxcont);
    rectangle.appendChild(taskHome);

    var editDelete = document.createElement("div");
    editDelete.classList.add("edit-delete");

    var editIcon = document.createElement("img");
    editIcon.src = "./edit.png";
    editIcon.classList.add("edit-btn");
    editIcon.addEventListener('click', editTask);
    editDelete.appendChild(editIcon);

    var deleteIcon = document.createElement("img");
    deleteIcon.src = "./delete.png";
    deleteIcon.classList.add("delete-btn");
    deleteIcon.addEventListener('click', deleteTask);
    editDelete.appendChild(deleteIcon);

    rectangle.appendChild(editDelete);

    taskBox.appendChild(rectangle);

    document.getElementById("tasks-container").appendChild(taskBox);
}

function updateTaskStatus(taskName, done) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(function(task) {
        if (task.name === taskName) {
            task.done = done;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasksFromLocalStorage(filter = "all") {
    var tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        if (filter === "all" || (filter === "done" && task.done) || (filter === "notdone" && !task.done)) {
            renderTask(task);
        }
    });
}
renderTasksFromLocalStorage();

function cleartask() {
    localStorage.clear();
    renderTasksFromLocalStorage();
}

function setActive(button) {
    var buttons = document.querySelectorAll('.btns button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

document.querySelector(".all").addEventListener("click", function() {
    setActive(this);
    renderTasksFromLocalStorage("all");
});

document.querySelector(".done").addEventListener("click", function() {
    setActive(this);
    renderTasksFromLocalStorage("done");
});

document.querySelector(".notdone").addEventListener("click", function() {
    setActive(this);
    renderTasksFromLocalStorage("notdone");
});

document.querySelector(".clear").addEventListener("click", function() {
    setActive(this);
    cleartask();
});

document.querySelector('.delete').addEventListener('click', dltbtn);
document.querySelector('.edit-task').addEventListener('click', editbtn);

function filterByCategory(category) {
    var tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        if (task.category === category) {
            renderTask(task);
        }
    });
}

function none() {
    filterByCategory("None");
}

function home() {
    filterByCategory("Home");
}

function school() {
    filterByCategory("School");
}

function shop() {
    filterByCategory("Shopping-List");
}

document.querySelector(".popup-none").addEventListener("click", function() {
    none();
});

document.querySelector(".popup-home").addEventListener("click", function() {
    home();
});

document.querySelector(".popup-school").addEventListener("click", function() {
    school();
});

document.querySelector(".popup-shop").addEventListener("click", function() {
    shop();
});

document.getElementById("categorybtn").addEventListener("click", function() {
    renderTasksFromLocalStorage("all");
});
