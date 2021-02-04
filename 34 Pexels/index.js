const API_key = "563492ad6f917000010000019e38357ea9604a3d98fb3b29bbef78d3";
const url = "https://api.pexels.com/v1/curated?per_page=20&page=1";

// selection from DOM
const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");

let search;
// value for search field
searchInput.addEventListener("input", inputUpdate);
function inputUpdate(e) {
	search = e.target.value;
}

// form functionality
form.addEventListener("submit", (e) => {
	e.preventDefault();
	searchPhotos(search);
});

// fetch  API
async function fetchAPI(url) {
	const dataFetch = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: API_key,
		},
	});
	const data = await dataFetch.json();
	return data;
}

// curated photos
async function curatedPhotos() {
	const data = await fetchAPI("https://api.pexels.com/v1/curated?&per_page=20&page=1");
	generatePictures(data);
}

// search particular photos
async function searchPhotos(query) {
	clearGallery();
	const data = await fetchAPI(`https://api.pexels.com/v1/search?query=${query}&per_page=20`);
	generatePictures(data);
}

// generate HTML
function generatePictures(data) {
	data.photos.forEach((photo) => {
		const galleryImg = document.createElement("div");
		galleryImg.classList.add("photo");

		// photo element
		galleryImg.innerHTML = `
            <img src=${photo.src.large}  alt=${photo.photographer}/>
            <p class="name">${photo.photographer}</p>
            <div class="photo-info">
                <a href=${photo.photographer_url} target="_blank" class="name">More photos</a>
                <a href=${photo.src.original} target="_blank" class="download">Download</a>
            </div>
        `;
		gallery.appendChild(galleryImg);
	});
}

// clear gallery on search
function clearGallery() {
	gallery.innerHTML = "";
	searchInput.value = "";
}

curatedPhotos();
