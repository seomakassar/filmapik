document.addEventListener("DOMContentLoaded", () => {

	const sinopsis = document.getElementById("sinopsis");
	const downloadWrap = document.getElementById("downloadz");
	const downloadList = document.getElementById("list_download_link");

	if (!sinopsis || !downloadWrap || !downloadList) return;

	const downloadBox = sinopsis.querySelector("#downloadlist");

	// Tidak ada downloadlist -> sembunyikan
	if (!downloadBox) {
		downloadWrap.style.display = "none";
		return;
	}

	const urls = downloadBox.textContent
		.split(",")
		.map(v => v.trim())
		.filter(Boolean);

	// Kosong -> hapus dan sembunyikan
	if (!urls.length) {
		downloadBox.remove();
		downloadWrap.style.display = "none";
		return;
	}

	function getServerName(url) {

		try {

			const host = new URL(url).hostname.toLowerCase();

			if (host.includes("byseqekaho")) return "FILEMOON";
			if (host.includes("strp2p")) return "STREAMP2P";
			if (host.includes("abyssplayer")) return "HYDRAX";
			if (host.includes("efek.stream")) return "VIP SERVER";
			if (host.includes("buzzheavier")) return "BUZZHEAVIER";
			if (host.includes("send.now")) return "SEND.CM";

			return host.replace(/^www\./, "").toUpperCase();

		} catch {

			return "DOWNLOAD";

		}
	}

	// Kosongkan UL terlebih dahulu
	downloadList.innerHTML = "";

	urls.forEach(url => {

		const li = document.createElement("li");
		li.className = "inline-flex items-center gap-1";

		const a = document.createElement("a");
		a.href = "http://ouo.io/qs/mH4aOrLs?s=https://preview.do.am/?link="+url;
		a.target = "_blank";
		a.rel = "nofollow noopener";
		a.className = "download-option";
		a.textContent = getServerName(url);

		li.appendChild(a);
		downloadList.appendChild(li);

	});

	// Hapus downloadlist dari sinopsis
	// Hapus downloadlist dari sinopsis
	downloadBox.remove();

	// Tetap sembunyikan saat load
	downloadWrap.style.display = "none";

	// Tampilkan setelah tombol Play diklik
	const playBtn = document.getElementById("playBtn");

	if (playBtn) {

		playBtn.addEventListener("click", () => {

			downloadWrap.style.display = "";

		}, { once: true });

	}

});


