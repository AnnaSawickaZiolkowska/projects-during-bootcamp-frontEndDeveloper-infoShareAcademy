import {displayTime} from "./displayTimeOnWatch.js";
import {timeToString} from "./timeToString.js";

export const getElapsedTime = (time) => {
    let startTime;
    let elapsedTime = 0;
    startTime = Date.now() - elapsedTime;
    elapsedTime = Date.now() - startTime;
    displayTime(timeToString(elapsedTime));
  
    return timeToString(elapsedTime);
  };