const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const counterUpdate = () => {
		// plus operand before counter turns string to number
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		// target divided to create our increment over time
		const increment = target / 200;

		if (count < target) {
			// get highest divisible element with math.ceil method
			counter.innerText = `${Math.ceil(count + increment)}`;
			setTimeout(counterUpdate, 10);
		} else {
			counter.innerText = target;
		}
	};
	counterUpdate();
});
