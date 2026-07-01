document.addEventListener("DOMContentLoaded", () => {

function getServerName(url){
    try{
        const u = new URL(url);

        // Jika URL adalah endpoint player.php,
        // ambil URL asli dari parameter ?url=
        if(u.pathname.endsWith("/player.php")){
            const realUrl = u.searchParams.get("url");
            if(realUrl){
                url = decodeURIComponent(realUrl);
            }
        }

        const host = new URL(url).hostname.replace(/^www\./,"").toLowerCase();

        if(host.includes("byseqekaho")) return "FILEMOON";
        if(host.includes("strp2p")) return "STREAMP2P";
        if(host.includes("abyssplayer")) return "HYDRAX";
        if(host.includes("efek.stream")) return "VIP SERVER";
        if(host.includes("buzzheavier")) return "BUZZHEAVIER";
        if(host.includes("send.now")) return "SEND.CM";

        return host.split(".")[0].toUpperCase();

    }catch(e){
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