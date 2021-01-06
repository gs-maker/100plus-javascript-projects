const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		// plus operand converts string to number
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		const increment = target / 200;

		if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            // animation spread across 10 seconds
			setTimeout(updateCounter, 10);
		} else {
			counter.innerText = count;
		}
	};
	updateCounter();
});
