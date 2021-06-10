import {displayTime} from "./displayTimeOnWatch.js";
import {timeToString} from "./timeToString.js";
export let elapsedTime = 0;

export const getElapsedTime = (time) => {
    let startTime;
    startTime = Date.now() - elapsedTime;
    function printTime(){
      elapsedTime = Date.now() - startTime;
      displayTime(timeToString(elapsedTime));
    }
   
  
    return timeToString(elapsedTime);
  };