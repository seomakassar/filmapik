document.addEventListener('DOMContentLoaded', () => {
	initThemeToggle();
	initLiveSearch();
});

/**
 * Handle dark/light theme switching.
 */
function initThemeToggle() {
	const toggleBtn = document.getElementById('theme-toggle-btn');
	if (!toggleBtn) return;

	toggleBtn.addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('fmlp-theme', newTheme);
	});
}

/**
 * Perform debounced AJAX live search.
 */
function initLiveSearch() {
	const searchInput = document.getElementById('search-input');
	const searchResults = document.getElementById('search-results');
	if (!searchInput || !searchResults) return;

	let debounceTimeout = null;

	searchInput.addEventListener('input', (e) => {
		const keyword = e.target.value.trim();

		clearTimeout(debounceTimeout);
		if (keyword.length < 2) {
			searchResults.innerHTML = '';
			searchResults.classList.remove('active');
			return;
		}

		debounceTimeout = setTimeout(() => {
			fetch(`${fmlpAjax.restUrl}?keyword=${encodeURIComponent(keyword)}`)
				.then(response => {
					if (!response.ok) throw new Error('Search request failed');
					return response.json();
				})
				.then(data => {
					renderSearchResults(data, searchResults);
				})
				.catch(err => {
					console.error('Error fetching search results:', err);
				});
		}, 300); // 300ms debounce
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', (e) => {
		if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
			searchResults.classList.remove('active');
		}
	});

	// Focus input to open dropdown if not empty
	searchInput.addEventListener('focus', () => {
		if (searchResults.children.length > 0) {
			searchResults.classList.add('active');
		}
	});
}

/**
 * Render drop-down DOM list.
 */
function renderSearchResults(data, container) {
	container.innerHTML = '';

	if (data.length === 0) {
		container.innerHTML = '<div style="padding: 14px; text-align: center; font-size: 13px; color: var(--text-muted);">Tidak ada hasil.</div>';
		container.classList.add('active');
		return;
	}

	data.forEach(item => {
		const row = document.createElement('a');
		row.href = item.url;
		row.className = 'search-result-item';

		// Rating element markup if exists
		const ratingHTML = item.rating 
			? `<span class="search-result-meta"><svg width="10" height="10" fill="currentColor" style="color: #fbbf24;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>${item.rating}</span>`
			: '';

		row.innerHTML = `
			<img src="${item.poster}" alt="${item.title}">
			<div class="search-result-info">
				<div class="search-result-title">${item.title}</div>
				<div class="search-result-meta">
					<span>${item.type}</span>
					${ratingHTML}
				</div>
			</div>
		`;

		container.appendChild(row);
	});

	container.classList.add('active');
}
