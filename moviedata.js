document.addEventListener("DOMContentLoaded", () => {

	const sinopsis = document.getElementById("sinopsis");
	if (!sinopsis) return;

	/* ===========================
	   QUALITY -> BADGES
	=========================== */
	const badgeWrap = document.getElementById("moviebadges");
	const quality = sinopsis.querySelector("#moviequality");

	if (badgeWrap && quality) {

		const icons = [
			"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4H8l4-4h8v4zm-6 2H6V6l4 4-4 4h8v8l4-4V6z",
			"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2H8v2h8v-2h-1v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
		];

		quality.querySelectorAll("span").forEach((span, i) => {

			const el = document.createElement("span");
			el.className = i === 0 ? "badge-quality" : "badge-purple";

			el.innerHTML = `
				<svg class="mr-0.5 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="${icons[i] || icons[1]}"></path>
				</svg>
				${span.textContent.trim()}
			`;

			badgeWrap.appendChild(el);

		});

		quality.remove();
	}

	/* ===========================
	   YEAR
	=========================== */
	const yearTarget = document.getElementById("movieyear");
	const yearSource = sinopsis.querySelector("#movieyear");

	if (yearTarget && yearSource) {

		const year = yearSource.textContent.trim();

		yearTarget.innerHTML = `
			<span class="badge-cyan">
				<svg class="mr-0.5 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z">
					</path>
				</svg>
				${year}
			</span>
		`;

		yearSource.remove();
	}

	/* ===========================
	   GENRE
	=========================== */
	const genreTarget = document.getElementById("moviegenres");
	const genreSource = sinopsis.querySelector("#moviegenre");

	if (genreTarget && genreSource) {

		const genres = [...genreSource.querySelectorAll("span")]
			.map(e => e.textContent.trim())
			.filter(Boolean);

		if (genres.length) {
			genreTarget.innerHTML =
				`<span class="text-film-100">Genre:</span> ` +
				genres.map(g =>
					`<a href="/search/${encodeURIComponent(g)}/" class="text-blue-400 hover:text-blue-300">${g}</a>`
				).join(", ");
		}

		genreSource.remove();
	}

	/* ===========================
	   COUNTRY
	=========================== */
	const countryTarget = document.getElementById("moviecountrys");
	const countrySource = sinopsis.querySelector("#moviecountry");

	if (countryTarget && countrySource) {

		const countries = [...countrySource.querySelectorAll("span")]
			.map(e => e.textContent.trim())
			.filter(Boolean);

		if (countries.length) {
			countryTarget.innerHTML =
				`<span class="text-film-100">Country:</span> ` +
				countries.map(c =>
					`<a href="/search/${encodeURIComponent(c)}/" class="text-blue-400 hover:text-blue-300">${c}</a>`
				).join(", ");
		}

		countrySource.remove();
	}

});