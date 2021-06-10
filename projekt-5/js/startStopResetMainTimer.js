import {displayTime} from "./displayTimeOnWatch.js";
import {timeToString} from "./timeToString.js";
import {toggleButton} from "./toggleButtonMainWatch.js";


// Create function to start, stop and reset watch

let startTime;
let elapsedTime = 0;
let timerInterval;

export function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(timeToString(elapsedTime));
  }, 1000);
  toggleButton("PAUSE");
}

export function pause() {
  clearInterval(timerInterval);
  toggleButton("PLAY");
}

export function reset() {
  clearInterval(timerInterval);
  displayTime("00:00");
  elapsedTime = 0;
  toggleButton("PLAY");
}

