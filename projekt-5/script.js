
// Add buttons and create function for Toggle button 

let  playButton = document.querySelector('#playButton');
let  pauseButton = document.querySelector('#pauseButton');
let  resetButton = document.querySelector('#resetButton');

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


  // Modify watch textContent

// const watchTextContent = document.querySelector('#display').textContent = timeToString(0);
// console.log(timeToString(0));

function displayTime(txt){
    document.querySelector('#display').textContent = txt;
};

// Create function to start, stop and reset watch

let startTime;
let elapsedTime = 0;
let timerInterval;


function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(timeToString(elapsedTime));
  }, 1000);
  toggleButton("PAUSE");
  pauseButton.style.display = "block"
  playButton.style.display = "none";
};


 playButton.addEventListener('click', start);
