const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		// plus operand converts string to number
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		// number by which to increment
		const increment = target / 200;

		if (count < target) {
			counter.innerText = `${Math.ceil(count + increment)}`;
			setTimeout(updateCounter, 10);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});
