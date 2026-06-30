
document.addEventListener("DOMContentLoaded", function () {

    const playBtn = document.getElementById("playBtn");
    const background = document.getElementById("backgroundz");
    const player = document.getElementById("playerz");
    const download = document.getElementById("downloadz");

    if (!playBtn || !background || !player) {
        console.log("Element tidak ditemukan");
        return;
    } 
		
    playBtn.addEventListener("click", function (e) {
        e.preventDefault();

        background.style.display = "none";
        player.style.display = "block";
		download.style.display = "block";

        player.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

}); 

 