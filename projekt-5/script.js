// Add buttons and create function for Toggle button 

const  playButton = document.querySelector('#playButton');
const  pauseButton = document.querySelector("#pauseButton");
const  resetButton = document.querySelector("#resetButton");

function toggleButton(buttonKey) {
    const buttonVisible = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonHidden = buttonKey === "PAUSE" ? pauseButton : playButton;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
};


// Convert time to a format of hours, minutes, seconds.

function timeToString(time) {
    const timeInHrs = time / 3600000;
    const hh = Math.floor(timeInHrs);
  
    const timeInMin = (timeInHrs - hh) * 60;
    const mm = Math.floor(timeInMin);
  
    const timeInSec = (timeInMin - mm) * 60;
    const ss = Math.floor(timeInSec);
  

    const formattedHH = hh.toString().padStart(2, "0");
    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
  
  
    return `${formattedMM}:${formattedSS}`;
  }
