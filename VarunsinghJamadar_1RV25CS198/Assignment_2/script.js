let form = document.getElementById("Taskform");
let input = document.getElementById("task");
let list = document.getElementById("tasklist");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskText = input.value;
    console.log(taskText);
    let li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    input.value = "";
});