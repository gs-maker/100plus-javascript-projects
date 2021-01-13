const open = document.getElementById("open_modal");
const close = document.getElementById("close_modal");
const modal = document.getElementById("modal_content");

open.addEventListener("click", () => {
	modal.classList.add("show");
});

close.addEventListener("click", () => {
	modal.classList.remove("show");
});
