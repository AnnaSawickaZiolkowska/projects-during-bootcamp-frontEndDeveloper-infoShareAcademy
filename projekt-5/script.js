
// Convert time to a format of hours, minutes, seconds, and milliseconds

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

//   document.querySelector('#display').textContent = `${formattedMM}:${formattedSS}`;

  function print(txt){
      document.querySelector('#display').innerHTML = txt;
  }


// function start(){
//     if (status === "stopped"){
//         interval = setInterval(timeToString, 1000);
//         showButton('PAUSE');
//         status = 'started';
//     }
//     else{
//         clearInterval(timeToString);
//         showButton('PLAY');
//     }
// }
let startTime;
let elapsedTime = 0;
let timerInterval;


function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }

  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }


  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }

let playButton = document.querySelector('#playButton');
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener('click', start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);




// const counter = 0;
// const interval;

// function convertSeconds(s) {
//     const min = floor(s/60);
//     const sec = s % 60;
//     return nf(min, 2) + ":" + nf(sec, 2);
// }

// function setup(){

//     const stopWatch = select("#display2");
//     stopWatch.html(convertSeconds(counter));

//     const interval = setTimeout(timeIt, 1000);


//     function timeIt(){
//         counter++;
//         stopWatch.html(convertSeconds(counter));


//     }
// };


const timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#display2').html(timer.getTimeValues().toString());
});
