import { playTodoTime, pauseTodoTime } from "./script.js";

export function toggleTodoButton(buttonKey) {

    const buttonVisible = buttonKey === "PLAY" ? playTodoTime : pauseTodoTime;
    const buttonHidden = buttonKey === "PAUSE" ? playTodoTime : pauseTodoTime;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
  }

