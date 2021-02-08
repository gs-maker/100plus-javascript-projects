// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-container");

// event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(e) {
	e.preventDefault();

	// create a div for todo item
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	// create new todo item
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	// add completed button
	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete-btn");
	completeBtn.innerHTML = `<ion-icon name="checkbox-outline"></ion-icon>`;
	newTodo.appendChild(completeBtn);

	// add delete button
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("trash-btn");
	deleteBtn.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
	newTodo.appendChild(deleteBtn);

	// add new item to container
	todoList.appendChild(todoDiv);

	// clear input field after entering item
	todoInput.value = "";
}
