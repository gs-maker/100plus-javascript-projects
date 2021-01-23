const nextBtn = document.querySelector("#nextBtn");
// add prev & next functionality
// remove 'active' class from all thumbnail maps
// use thumbnail as selector - remove 'active' class first
// match thumbnail index to display index

const prevBtn = document.querySelector("#prevBtn");
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides-container");
const items = document.querySelectorAll(".items");

const slideWidth = slides[0].clientWidth;
let index = 0;

// next item
nextBtn.addEventListener("click", () => {
	index++;
	slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

	// remove active class from all thumbnails
	items.forEach((item) => item.classList.remove("active"));

	// continuous scroll
	if (index > slides.length - 1) {
		index = 0;
		slidesContainer.style.transform = `translateX(0px)`;
		items[index].classList.add("active");
	} else {
		items[index].classList.add("active");
	}
});

// previous item
prevBtn.addEventListener("click", () => {
	index--;
	slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

	// continuous scroll
	if (index < 0) {
		index = slides.length - 1;
		slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	}
});

// match thumbnail index to display index
items.forEach((item, itemIndex) => {
	item.addEventListener("click", () => {
		items.forEach((item) => item.classList.remove("active"));

		// item index matches thumbnail
		index = itemIndex;
		item.classList.add("active");
		slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	});
});
