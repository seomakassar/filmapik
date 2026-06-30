document.addEventListener("DOMContentLoaded", () => {

    function renderList(id, items, buildLink) {
        const ul = document.getElementById(id);
        if (!ul) return;

        let html = "";
        for (const item of items) {
            html += buildLink(item);
        }
        ul.innerHTML = html;
    }

    // =========================
    // YEAR
    // =========================
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

    renderList("header-year", years, (yr) => `
        <li class="relative">
            <a title="Daftar film terlengkap tahun ${yr}"
               href="/search/${yr}/"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${yr}
            </a>
        </li>
    `);

    renderList("mb-header-year", years, (yr) => `
        <li class="flex flex-col">
            <a title="Daftar film terlengkap tahun ${yr}"
               href="/search/${yr}"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${yr}
            </a>
        </li>
    `);

    // =========================
    // GENRE
    // =========================
    const genres = [
        { name: "Action", slug: "action" },
        { name: "Comedy", slug: "comedy" },
        { name: "Drama", slug: "drama" },
        { name: "Thriller", slug: "thriller" },
        { name: "Horror", slug: "horror" },
        { name: "Family", slug: "family" },
        { name: "Crime", slug: "crime" },
        { name: "Adventure", slug: "adventure" },
        { name: "Science Fiction", slug: "science-fiction" }
    ];

    renderList("header-genre", genres, (g) => `
        <li class="relative">
            <a href="/search/${g.slug}"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${g.name}
            </a>
        </li>
    `);

    renderList("mb-header-genre", genres, (g) => `
        <li class="flex flex-col">
            <a href="/search/${g.slug}"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${g.name}
            </a>
        </li>
    `);

    // =========================
    // COUNTRY
    // =========================
    const countries = [
        { name: "USA", slug: "usa" },
        { name: "United States", slug: "united-states" },
        { name: "Japan", slug: "japan" },
        { name: "Canada", slug: "canada" },
        { name: "France", slug: "france" },
        { name: "India", slug: "india" },
        { name: "Germany", slug: "germany" },
        { name: "South Korea", slug: "south-korea" }
    ];

    renderList("header-country", countries, (c) => `
        <li class="relative">
            <a href="/search/${c.slug}"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${c.name}
            </a>
        </li>
    `);

    renderList("mb-header-country", countries, (c) => `
        <li class="flex flex-col">
            <a href="/search/${c.slug}"
               class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-film-800 text-[#e5e7eb] hover:text-white">
               ${c.name}
            </a>
        </li>
    `);

});