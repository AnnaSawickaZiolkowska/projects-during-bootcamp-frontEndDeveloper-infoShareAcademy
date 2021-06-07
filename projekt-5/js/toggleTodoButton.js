import { playTodoTime, pauseTodoTime } from "./script.js";

export function toggleTodoButton(buttonKey) {

    // const playTodoTime = document.querySelector(".fa-play-circle");
    // const stopTodoTime = document.querySelector(".fa-pause-circle");
    const buttonVisible = buttonKey === "PLAY" ? playTodoTime : pauseTodoTime;
    const buttonHidden = buttonKey === "PAUSE" ? playTodoTime : pauseTodoTime;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
  }

