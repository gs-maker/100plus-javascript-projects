const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");

async function getUser(username) {
	try {
		const { data } = await axios(API_URL + username);
		getUserData(data);
	} catch (error) {
		console.log(error);
	}
}

function getUserData(user) {
	const cardHTML = `<div class="card">
<div>
    <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
</div>
<div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
        <li>${user.followers}<strong> Followers</strong></li>
        <li>${user.following}<strong> Following</strong></li>
        <li>${user.public_repo}<strong> Repositories</strong></li>
    </ul>
    <div id="repos">
        <a href="" class="repos">Repo 1</a>
        <a href="" class="repos">Repo 2</a>
        <a href="" class="repos">Repo 3</a>
    </div>
</div>
</div>`;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = search.value;

	if (user) {
		getUser(user);
		search.value = "";
	}
});
