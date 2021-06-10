import {getElapsedTime} from "./getElapsedTime.js"


export let timeArray = [];

export function addTimeToArray(elapsedTime) {
  const taskTime = {
    elapsedTime: getElapsedTime(elapsedTime),
  };
  timeArray.push(taskTime);
  console.log(timeArray);
}
