
   const playTodoTime = document.querySelector(".fa-play-circle");
   const stopTodoTime = document.querySelector("fa-pause-circle");

export function toggleTodoButton(buttonKey) {
    const playTodoTime = document.querySelector(".fa-play-circle");
    const stopTodoTime = document.querySelector(".fa-pause-circle");
    const buttonVisible = buttonKey === "PLAY" ? playTodoTime : stopTodoTime;
    const buttonHidden = buttonKey === "PAUSE" ? playTodoTime : stopTodoTime;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
  }

  document.querySelectorAll(".fa-play-circle").forEach(play => {
    play.addEventListener('click', toggleTodoButton)
  });