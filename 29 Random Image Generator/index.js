const container = document.querySelector(".container");
const imageURL = "https://source.unsplash.com/random/";

// number of rows on page
let rows = 10;

// generate images for listed rows
for (let i = 0; i < rows * 3; i++) {
	const image = document.createElement("img");
	image.src = `${imageURL}${getImageResolution()}`;
	container.appendChild(image);
}

// random image resolution
function getImageResolution() {
	return `${getRandomSize()}x${getRandomSize()}`;
}

// random image size
function getRandomSize() {
	return Math.floor(Math.random() * rows) + 320;
}
