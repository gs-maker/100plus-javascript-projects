// selectors
const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

// event listeners
currencyOne.addEventListener("change", calculateCX);
amountOne.addEventListener("input", calculateCX);
currencyTwo.addEventListener("change", calculateCX);
amountTwo.addEventListener("input", calculateCX);

// functions
function calculateCX() {
	const currency_one = currencyOne.value;
	const currency_two = currencyTwo.value;

	fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}

calculateCX();
