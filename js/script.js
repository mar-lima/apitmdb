const apikey = "e84540b93410e7b9a5711cc9814026e6";
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;

// const url = "https://api.themoviedb.org/3/discover/movie?api_key=";

async function getAll() {
	const response = await fetch(url + "&language=pt-br");
	const data = await response.json();

	startDom(data);
}
getAll();

function startDom(data) {
	const baseUrl = "https://image.tmdb.org/t/p/w500";

	const list = data.results;
	const titles = data.results.map((movie) => movie.title);
	const posterImage = data.results.map((movie) => movie.poster_path);
	const overview = data.results.map((movie) => movie.overview);

	const container = document.querySelector(".container");

	data.results.map((item, index) => {
		const movieArea = document.createElement("div");
		movieArea.classList.add("movie-area");

		const h2 = document.createElement("h2");
		const img = document.createElement("img");
		const span = document.createElement("span");

		// Adicione os elementos criados a movieArea
		movieArea.appendChild(h2);
		movieArea.appendChild(img);
		movieArea.appendChild(span);

		// Adicione movieArea ao contêiner
		container.appendChild(movieArea);

		h2.innerHTML = item.title;
		img.src = baseUrl + item.poster_path;
		span.innerHTML = item.overview;
	});

	console.log(list);
	console.log(titles);
	console.log(overview);
	console.log(posterImage);
}
