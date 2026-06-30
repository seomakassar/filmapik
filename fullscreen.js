 

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("famv-fullscreen-btn");
    const player = document.getElementById("famv-player-container");

    if (!btn || !player) return;

    btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (!document.fullscreenElement) {

            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen(); // Safari
            } else if (player.msRequestFullscreen) {
                player.msRequestFullscreen(); // IE11
            }

        } else {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

        }
    });

});
 