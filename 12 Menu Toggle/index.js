const navToggle = document.querySelector("#burger");
const navLinks = document.querySelector(".navLinks");

navToggle.addEventListener("click", function () {
	navLinks.classList.toggle("show");
});
