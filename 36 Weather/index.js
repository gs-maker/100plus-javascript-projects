const form = document.querySelector("form");
const weather = document.querySelector(".weather");
const input = document.querySelector(".search-bar");

const api = {
	key: "d16a5e9a3d326a9c3ca2c7850b855e7c",
	baseURL: "https://api.openweathermap.org/data/2.5/",
};

let city;
// search functionality
input.addEventListener("input", setQuery);
function setQuery(event) {
	city = event.target.value;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetchAPI(city);
});

// fetch API
async function fetchAPI(query) {
	fetch(`${api.baseURL}weather?q=${query}&units=metric&appid=${api.key}`)
		.then((weather) => {
			console.log(weather);
			return weather.json();
		})
		.then(generateHTML);
}

// // data feed into DOM from API
function generateHTML(weather) {
	document.querySelector(".city").innerText = `Weather in ${weather.name}`;
	document.querySelector(".temp").innerText = `${weather.main.temp}°C`;
	document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
	document.querySelector(".description").innerText = weather.weather[0].description;
	document.querySelector(".humidity").innerText = `Humidity: ${weather.main.humidity} %`;
	document.querySelector(".wind").innerText = `Wind speed: ${weather.wind.speed}km/hr`;
}

fetchAPI();
