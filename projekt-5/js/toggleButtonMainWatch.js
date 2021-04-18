
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let resetButton = document.querySelector("#resetButton");



export function toggleButton(buttonKey) {
    const buttonVisible = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonHidden = buttonKey === "PAUSE" ?  playButton : pauseButton;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
  }

