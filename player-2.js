document.addEventListener("DOMContentLoaded", function () {

    const playerLinks = document.querySelectorAll(".player-option");
    const playerSelect = document.getElementById("player-select");
    const playerContainer = document.getElementById("famv-player-container");

    if (!playerContainer) return;

    function playerUrl(url) {
        if (!url) return "";

        if (url.startsWith("https://api.exthem.es/player.php?url=")) {
            return url;
        }

        return "https://api.exthem.es/player.php?url=" + encodeURIComponent(url);
    }

    // Pengganti function u()
    function u(url) {

        url = playerUrl(url);

        const loading = document.createElement("div");
        loading.id = "famv-player-loading";
        loading.className = "famv-player-loading";
        loading.innerHTML = `
            <div class="famv-spinner-ring">
                <div class="famv-spinner-ring-inner"></div>
                <div class="famv-spinner-glow"></div>
            </div>
            <span class="famv-loading-text">Memuat Player...</span>
        `;

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.className = "h-full w-full border-0";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.style.display = "none";

        iframe.onload = function () {
            loading.remove();
            iframe.style.display = "";
        };

        playerContainer.innerHTML = "";
        playerContainer.appendChild(loading);
        playerContainer.appendChild(iframe);

        setTimeout(function () {
            loading.remove();
            iframe.style.display = "";
        }, 10000);
    }

    // Player pertama
    const first = document.querySelector(".player-option.active") || playerLinks[0];
    if (first) {
        u(first.dataset.url || first.href);
    }

    // Klik server
    playerLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const url = this.dataset.url || this.href;

            u(url);

            playerLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            if (playerSelect) {
                playerSelect.value = url;
            }
        });
    });

    // Ganti dari dropdown
    if (playerSelect) {
        playerSelect.addEventListener("change", function() {

            u(this.value);

            playerLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    (link.dataset.url || link.href) === this.value
                );
            });

        });
    }

    // Supaya fungsi u() bisa dipanggil script lain
    window.u = u;

});