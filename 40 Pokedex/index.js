// selectors
const pokeContainer = document.getElementById("poke-container");
pokemonCount = 180;
const colors = {
	fire: "#fddfdf",
	grass: "#defde0",
	electric: "#fcf7de",
	water: "#def3fd",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	poison: "#fceaff",
	bug: "#98d7a5",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#f5f5f6",
	fighting: "#e6e0d4",
	normal: "#f5f5f5",
};
const main_types = Object.keys(colors);

// event listeners

// functions
const fetchPokemon = async () => {
	for (let i = 1; i <= pokemonCount; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	createPokemon(data);
};

const createPokemon = (pokemon) => {
	const pokemonEl = document.createElement("div");
	pokemonEl.classList.add("pokemon");

	const name = pokemon.name.toUpperCase();
	const id = pokemon.id.toString().padStart(3, "0");
	const poke_types = pokemon.types.map((type) => type.type.name);
	const type = main_types.find((type) => poke_types.indexOf(type > -1));
	const color = colors[type];

	pokemonEl.style.backgroundColor = color;
	pokemonEl.innerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

	pokeContainer.appendChild(pokemonEl);
};

fetchPokemon();
