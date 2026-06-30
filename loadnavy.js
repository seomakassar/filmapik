document.addEventListener("DOMContentLoaded", () => {

	const oldPagination = document.querySelector(".pagesBlockuz1");
	if (!oldPagination) return;

	const wrap = document.createElement("div");
	wrap.className = "pagination-wrap mt-8 flex flex-wrap items-center justify-center gap-2";
	wrap.id = "famv-latest-pagination";

	const items = [...oldPagination.querySelectorAll("b, a, span.swchItemDots")];

	let html = "";

	items.forEach(el => {

		// CURRENT PAGE
		if (el.tagName === "B") {

			const current = el.textContent.trim();

			html += `
				<span aria-current="page" class="page-numbers current">${current}</span>
			`;

		}

		// DOTS
		else if (el.classList.contains("swchItemDots")) {

			html += `<span class="page-numbers dots">…</span>`;

		}

		// LINKS
		else if (el.tagName === "A") {

			const text = el.textContent.trim();
			const href = el.getAttribute("href");

			// NEXT
			if (el.classList.contains("swchItem-next")) {

				html += `
					<a class="next page-numbers" href="${href}">›</a>
				`;

			} else {

				html += `
					<a class="page-numbers" href="${href}">${text}</a>
				`;
			}
		}
	});

	// OPTIONAL: PREV (ambil dari data halaman pertama kalau ada)
	const firstLink = oldPagination.querySelector("a.swchItem");
	const prevHref = firstLink ? firstLink.getAttribute("href") : "/";

	html = `
		<a class="prev page-numbers" href="${prevHref}">‹</a>
		${html}
	`;

	wrap.innerHTML = html;
	oldPagination.replaceWith(wrap);

});