function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in both fields");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({ name, email });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasksFromLocalStorage();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
function renderTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let info = document.createElement("div");
        info.classList.add("info");

        let username = document.createElement("h3");
        username.textContent = task.name;

        let emailid = document.createElement("p");
        emailid.textContent = task.email;

        let dltbtn = document.createElement("button");
        dltbtn.textContent = "Delete";
        dltbtn.classList.add("deletebtn");
        info.appendChild(dltbtn);
        dltbtn.onclick = () => deleteTask(index);

        info.appendChild(username);
        info.appendChild(emailid);
        

        taskList.appendChild(info);
    });
}
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasksFromLocalStorage();
}
window.onload = renderTasksFromLocalStorage;
