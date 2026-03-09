const input = document.querySelector("#task-input");
const btn = document.querySelector("#btn");
const item = document.querySelector(".task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const createTask = (taskText) => {
  const element = document.createElement("li");
  element.textContent = taskText;
  element.classList.add("task-item");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    element.remove();
    tasks = tasks.filter((t) => t !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  element.appendChild(deleteBtn);
  item.appendChild(element);
};
tasks.forEach((tasks) => {
  createTask(tasks.toUpperCase());
});

btn.addEventListener("click", () => {
  const con = input.value.trim();
  if (con === "") return;
  tasks.push(con);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createTask(con);
  input.value = "";
});

// function createTask(taskText) {
//   const element = document.createElement("li");
//   element.textContent = taskText;
//   element.classList.add("task-item");

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.classList.add("delete-btn");

//   deleteBtn.addEventListener("click", () => {
//     element.remove();
//     tasks = tasks.filter((t) => t !== taskText);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   });

//   element.appendChild(deleteBtn);
//   item.appendChild(element);
// }

// tasks.forEach((task) => createTask(task));

// btn.addEventListener("click", () => {
//   const con = input.value.trim();
//   if (con === "") return;

//   tasks.push(con);
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   createTask(con);
//   input.value = "";
// });
