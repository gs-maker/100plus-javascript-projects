const codes = document.querySelectorAll(".code");

// focus on first input field
codes[0].focus();

codes.forEach((code, index) => {
	code.addEventListener("keydown", (event) => {
		if (event.key >= 0 && event.key <= 9) {
			// replace any number in input
			codes[index].value = "";

			// delay input into next field
			setTimeout(() => {
				codes[index + 1].focus();
			}, 10);
		} else if (event.key === "Backspace") {
			setTimeout(() => {
				codes[index - 1].focus();
			}, 10);
		}
	});
});
