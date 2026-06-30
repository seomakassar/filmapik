document.addEventListener("DOMContentLoaded", () => {

	function syncRating() {

		const sourceRating = document.querySelector('[id^="entRating"]');
		const sourceRated = document.querySelector('[id^="entRated"]');

		const targetRating = document.getElementById("rating");
		const targetRated = document.getElementById("rated");

		if (!sourceRating || !sourceRated || !targetRating || !targetRated) return;

		const rating = parseFloat(sourceRating.textContent);

		if (!isNaN(rating)) {
			targetRating.textContent = (rating * 2).toFixed(1);
		}

		targetRated.textContent = sourceRated.textContent;
	}

	syncRating();

	setTimeout(syncRating, 500);
	setTimeout(syncRating, 1000);
	setTimeout(syncRating, 2000);

});