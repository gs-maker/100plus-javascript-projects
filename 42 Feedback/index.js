// selectors
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "satisfied";

// event listeners
ratingsContainer.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		removeActive();
		e.target.parentNode.classList.add("active");
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `
        <ion-icon name="heart"></ion-icon>
        <strong>Tussen Takk!</strong>
        </br>
        <p>Feedback: <strong>${selectedRating}</strong></p>
        </br>
        <p class="feedback">Thank you for your feedback. We shall use it to improve your customer service experience moving forward</p>

    `;
});

// remove active class
function removeActive() {
	ratings.forEach((rating) => {
		rating.classList.remove("active");
	});
}
