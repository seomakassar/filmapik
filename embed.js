document.addEventListener("DOMContentLoaded", function () {

    const iframe = document.querySelector("#famv-player-container iframe");
    const playerLinks = document.querySelectorAll(".player-option");
    const playerSelect = document.getElementById("player-select");

    if (!iframe) return;

    // Klik tombol player
    playerLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const url = this.dataset.url || this.href;

            iframe.src = url;

            // Active class
            playerLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            // Sinkronkan select
            if (playerSelect) {
                playerSelect.value = url;
            }
        });
    });

    // Ganti melalui select
    if (playerSelect) {
        playerSelect.addEventListener("change", function() {

            iframe.src = this.value;

            // Sinkronkan active link
            playerLinks.forEach(function(link) {
                if ((link.dataset.url || link.href) === playerSelect.value) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
    }

});