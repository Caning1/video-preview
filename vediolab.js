console.log("page loaded...");

var video = document.getElementById("pix")

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
    video.currentTime = 0;
}
