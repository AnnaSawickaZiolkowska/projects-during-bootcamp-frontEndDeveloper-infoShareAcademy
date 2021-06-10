import {toggleTodoButton} from "./toggleTodoButton.js";
import {displayTime} from "./displayTimeOnWatch.js"
import {timeToString} from "./timeToString.js";

let startTime;
let elapsedTime = 0;
export let timerTodoInterval;
 
 export function startTodoTimer() {
    startTime = Date.now() - elapsedTime;
    timerTodoInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      displayTime(timeToString(elapsedTime));
    }, 1000);
    toggleTodoButton("PAUSE");
    return elapsedTime;
  }
  
  export function pauseTodoTimer() {
    clearInterval(timerTodoInterval);
    console.log("STOP");
    toggleTodoButton("PLAY");
  }