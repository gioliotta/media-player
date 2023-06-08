"use strict";
const video = document.querySelector("video");
const playBtn = document.getElementById("playBtn");
const restartBtn = document.getElementById("restartBtn");
const selectVideo = document.getElementById("selectVideo");
const increaseVolumeBtn = document.getElementById("increaseVolumeBtn");
const decreaseVolumeBtn = document.getElementById("decreaseVolumeBtn");
const volumeText = document.getElementById("volumeText");
const muteVolumeBtn = document.getElementById("muteVolumeBtn");

//?
console.log(this);

//?

window.addEventListener("DOMContentLoaded", () => {
  playBtn.src = "media/play.png";
  restartBtn.src = "media/restart.png";
  selectVideo.value = "";
  video.volume = 0;
  video.setAttribute("autoplay", true);
  video.src = "media/video.mp4";
  volumeText.innerText = Math.floor(video.volume * 100) + "%";
});

playBtn.addEventListener("click", handlePlayBtn);

video.addEventListener("click", handlePlayBtn);

restartBtn.addEventListener("click", handleRestartBtn);

selectVideo.addEventListener("change", videoSelected);

increaseVolumeBtn.addEventListener("click", increaseVolume);

decreaseVolumeBtn.addEventListener("click", decreaseVolume);

muteVolumeBtn.addEventListener("click", handleMuteVolume);

video.addEventListener("dblclick", handleFullScreen);

//?

function handlePlayBtn() {
  if (video.paused) {
    // playBtn.src = "media/pause.png";
    return video.play();
  } else {
    // playBtn.src = "media/play.png";
    return video.pause();
  }
}

function handleRestartBtn() {
  return (video.currentTime = 0);
}

function videoSelected(event) {
  const file = event.target.files[0];
  const videoURL = URL.createObjectURL(file);
  return (video.src = videoURL);
}

function increaseVolume() {
  if (video.volume < 1) {
    video.volume += 0.1;
    volumeText.innerText = Math.floor(video.volume * 100) + "%";
  }
}

function decreaseVolume() {
  if (video.volume > 0) {
    video.volume -= 0.1;
    volumeText.innerText = Math.floor(video.volume * 100) + "%";
  }
}

function handleMuteVolume() {
  return video.muted ? (video.muted = false) : (video.muted = true);
}

function handleFullScreen() {
  const detectFullScreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  if (detectFullScreen) {
    if (document.exitFullscreen) document.exitFullscreen();
    if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    if (document.msExitFullscreen) document.msExitFullscreen();
  } else {
    if (video.requestFullscreen) video.requestFullscreen();
    if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    if (video.msRequestFullscreen) video.msRequestFullscreen();
  }
}
