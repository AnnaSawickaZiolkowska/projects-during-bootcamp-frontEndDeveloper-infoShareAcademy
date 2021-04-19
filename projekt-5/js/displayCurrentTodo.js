// FUNKCJA KTÓRA WYŚWIETLA AKTUALNE ZADANIE, DO KTÓREGO BĘDZIE MIERZON CZAS
const input = document.querySelector("input");
const fromInputToDo = document.querySelector(".current-to-do");

export function displayCurrentToDo() {
  input.addEventListener("input", currentToDo);

  function currentToDo(e) {
    // console.log(e);
    fromInputToDo.textContent = e.target.value;
    e.preventDefault();
  }
}