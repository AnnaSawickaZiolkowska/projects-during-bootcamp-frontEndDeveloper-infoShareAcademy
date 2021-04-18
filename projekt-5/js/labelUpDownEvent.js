
//CREATE LABEL FOCUS EVENT

const label = document.querySelector("label");
const inputField = document.querySelector("#yourtask");


export const labelUpDownEvent = (value) => {
  const labelUpEvent = document.querySelector('input[type="text"]');

  labelUpEvent.addEventListener("focus", (e) => {
    label.style.fontSize = "20px";
    label.style.transform = "translateY(0px)";
    label.style.lineHeight = "26px";
  });
  
  const labelDownEvent = document.querySelector('input[type="text"]');

  labelDownEvent.addEventListener("blur", (e) => {
    if (e.target.value != 0) {
      label.style.fontSize = "20px";
      label.style.transform = "translateY(0px)";
      label.style.lineHeight = "26px";
    } else {
      label.style.fontSize = "26px";
      label.style.transform = "translateY(33px)";
      label.style.lineHeight = "26px";
    }
  });
};

export function labelFocusEnter (){
    inputField.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.querySelector(".add-todo").click();
      }
    });
  }