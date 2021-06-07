import {toggleTodoButton} from "./toggleTodoButton.js";
import {displayTime} from "./displayTimeOnWatch.js"
import {timeToString} from "./timeToString.js";
import {playTodoTime, pauseTodoTime} from "./script.js"


let startTime;
let elapsedTime = 0;
let timerInterval;
 
 export function startTodoTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      displayTime(timeToString(elapsedTime));
    }, 1000);
    // toggleTodoButton("PAUSE");
  // playTodoTime.style.display = "none"
  // pauseTodoTime.style.display = "block"

  }
  
  export function pauseTodoTimer() {
    clearInterval(timerInterval);
    // toggleTodoButton("PLAY");
    // playTodoTime.style.display = "block"
    // pauseTodoTime.style.display = "none"
  }