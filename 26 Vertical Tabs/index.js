const buttons = document.querySelectorAll(".btn");
const tabContents = document.querySelectorAll(".tab-content");

// tab functionality
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// remove the class from all and add only when clicked
		buttons.forEach((button) => button.classList.remove("active"));
		tabContents.forEach((content) => content.classList.remove("active"));
		button.classList.add("active");

		// access corresponding tab content for display
		document.querySelector(button.dataset.target).classList.add("active");
	});
});
