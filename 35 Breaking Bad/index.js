const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const characters = document.querySelector(".characters");
const form = document.querySelector("form");

let search;
// characters available on load
window.addEventListener("load", fetchAPI);

// search field functionality
searchInput.addEventListener("change", () => {
	let search = searchInput.value;
	fetchAPI(search);
});
// fetchAPI
async function fetchAPI(query) {
	let response;
	if (query) {
		response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
	} else {
		response = await fetch("https://www.breakingbadapi.com/api/characters");
	}
	const results = await response.json();
	// console.log(results);
	generateHTML(results);
}

// function for each character
function generateHTML(actors) {
	actors.forEach((actor) => {
		const characterEl = document.createElement("div");
		characterEl.innerHTML = "";

        characterEl.classList.add("actor");
        
		characterEl.innerHTML = `
            <img src="${actor.img}"/>
            <p>Name: ${actor.name}</p>
            <p>Nickname: ${actor.nickname}</p>
            <p>Seasons: <span>${actor.appearance}</span></p>
            <p class="${getStatus(actor.status)}">Status: ${actor.status}</p>
        `;
		characters.appendChild(characterEl);
	});
}

fetchAPI();

// function to check character status
function getStatus(status) {
	if (status == "Presumed Dead") {
		return "orange";
	} else if (status == "Alive") {
		return "green";
	} else {
		return "red";
	}
}
