import {toggleTodoButton} from "./toggleTodoButton.js";
import {displayTime} from "./displayTimeOnWatch.js"
import {timeToString} from "./timeToString.js";



let startTime;
let elapsedTime = 0;
let timerInterval;
 
 export function startTodoTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      displayTime(timeToString(elapsedTime));
    }, 1000);
    toggleTodoButton("PAUSE");
  }
  
  export function pauseTodoTimer() {
    clearInterval(timerInterval);
    toggleTodoButton("PLAY");
  }