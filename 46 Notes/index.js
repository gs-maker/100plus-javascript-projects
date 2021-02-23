// selectors
const addButton = document.getElementById("add");

// notes from local storage
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
	notes.forEach((note) => {
		addNewNote();
	});
}

// event listeners
addButton.addEventListener("click", addNewNote);

// functions
function addNewNote(text = "") {
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main"></div>
        <textarea></textarea>
    `;

	// elements on note selectors
	const deleteBtn = note.querySelector(".delete");
	const editBtn = note.querySelector(".edit");
	const main = note.querySelector(".main");
	const textArea = note.querySelector("textarea");

	// delete
	deleteBtn.addEventListener("click", () => {
		note.remove();
		updateLocalStorage();
	});

	// edit
	editBtn.addEventListener("click", () => {
		main.classList.toggle("hidden");
		textArea.classList.toggle("hidden");
	});

	// text area input
	textArea.addEventListener("input", (e) => {
		const { value } = e.target;
		main.innerHTML = marked(value);
		updateLocalStorage();
	});

	document.body.appendChild(note);
}

// local storage
function updateLocalStorage() {
	const notesText = document.querySelectorAll("textarea");
	const notes = [];
	notesText.forEach((note) => {
		notes.push(note.value);
	});
	localStorage.setItem("notes", JSON.stringify(notes));
}
