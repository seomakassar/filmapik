document.addEventListener("DOMContentLoaded", () => {

function getServerName(url) {
    try {
        const u = new URL(url);

        // Jika URL adalah player.php, gunakan parameter ?url=
        const target = u.pathname.endsWith("/player.php")
            ? (u.searchParams.get("url") || url)
            : url;

        const host = new URL(target).hostname.replace(/^www\./, "").toLowerCase();

        if (host.includes("byseqekaho")) return "FILEMOON";
        if (host.includes("strp2p")) return "STREAMP2P";
        if (host.includes("abyssplayer")) return "HYDRAX";
        if (host.includes("efek.stream")) return "VIP SERVER";
        if (host.includes("buzzheavier")) return "BUZZHEAVIER";
        if (host.includes("send.now")) return "SEND.CM";
        if (host.includes("q8y5z")) return "Q8Y5Z";

        return host.split(".")[0].toUpperCase();
    } catch {
        return "DOWNLOAD";
    }
}

	// Link player
	document.querySelectorAll("#player-list .player-option").forEach(link => {

		const name = getServerName(link.dataset.url || link.href);

		link.textContent = name;
		link.dataset.server = name;

	});

	// Dropdown player
	document.querySelectorAll("#player-select option").forEach(option => {

		const name = getServerName(option.value);

		option.textContent = `SERVER ${name}`;
		option.dataset.server = name;

	});

});