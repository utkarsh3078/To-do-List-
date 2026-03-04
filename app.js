let createButtonRef = document.getElementById("createButton");
let userInputRef = document.getElementById("userInput");
let todoListRef = document.getElementById("todoList");

createButtonRef.addEventListener("click", function () {
  const value = userInputRef.value;
  //Validation for empty user input
  if (value === "") {
    alert("Please write the task");
    return;
  }
  const li = document.createElement("li");
  li.innerText = value;
  //
  li.addEventListener("click", function () {
    li.remove();
  });
  todoListRef.appendChild(li);
  userInputRef.value = "";
});
