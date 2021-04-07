// Add buttons and create function for Toggle button 

let  playButton = document.querySelector('#playButton');
let  pauseButton = document.querySelector('#pauseButton');
let  resetButton = document.querySelector('#resetButton');

function toggleButton(buttonKey) {
    const buttonVisible = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonHidden = buttonKey === "PAUSE" ? pauseButton : playButton;
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
    //nie wiem czemu nie działają tutaj ostatnie dwie linijki
};


// Convert time to a format of hours, minutes, seconds.

function timeToString(time) {
    const timeInHrs = time / 3600000;
    const hh = Math.floor(timeInHrs);
  
    const timeInMin = (timeInHrs - hh) * 60;
    const mm = Math.floor(timeInMin);
  
    const timeInSec = (timeInMin - mm) * 60;
    const ss = Math.floor(timeInSec);
  

    const formattedHH = hh.toString().padStart(2, "0");
    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
  
  
    return `${formattedMM}:${formattedSS}`;
  }


  // Modify watch textContent

// const watchTextContent = document.querySelector('#display').textContent = timeToString(0);
// console.log(timeToString(0));

function displayTime(txt){
    document.querySelector('#display').textContent = txt;
};

// Create function to start, stop and reset watch

let startTime;
let elapsedTime = 0;
let timerInterval;


function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(timeToString(elapsedTime));
  }, 1000);
  toggleButton("PAUSE");
  pauseButton.style.display = "block"
  playButton.style.display = "none";
};


 function pause() {
    clearInterval(timerInterval);
    toggleButton("PLAY");
    pauseButton.style.display = "none"
    playButton.style.display = "block";
  };
   
  function reset() {
    clearInterval(timerInterval);
    displayTime("00:00");
    elapsedTime = 0;
    toggleButton("PLAY");
    playButton.style.display = "block";
    pauseButton.style.display = "none"
  };
  
  
  playButton.addEventListener('click', start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
  

  // TO DO LIST

  const addToDoButton = document.querySelector('.add-todo');
  const todoContainer = document.querySelector('.todoList');
//   const todoContainer = document.querySelector('.todoList').content.cloneNode(true);
  const inputField = document.querySelector('#yourtask');
  const userInputBox = document.querySelector('.todoList__user-input .todoList__buttons');
  todoContainer.append(userInputBox);

  const addForm = document.querySelector('.form');

// create template for user to do tasks

// const generateTemplate = (todo) =>{
//     const item = `<div class="todoList__user-input userInputBox">
//     <div class="todoList__buttons">
//         <a href="#" class="reset"><i class="far fa-trash-alt fa-2x"></i>
//         <a href="#" class="start "><i class="fa fa-play fa-2x"></i>
//         <a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a>
//          </div>   
//          <p class="paragraph__styling">${todo}</p>

//          </div>`;
//          todoContainer.textContent += item;
//          todoContainer.appendChild(item);
         
// };

// addToDoButton.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const todo = inputField.value.trim();
//     if(todo == '' || todo ==' '){
//        alert('Wyznacz sobie cel');
//     }else{
//         generateTemplate(todo)
//         addToDoButton.reset()
//     }
// });


// addForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const todo = inputField.value.trim();
//     if(todo.lenght){
//         generateTemplate(todo)
//         addForm.reset()
//     }
// });



// const todoObjectList = [];

  addToDoButton.addEventListener('click', function (e){
        e.preventDefault();
        const userEnteredValue = inputField.value;
        if(userEnteredValue.trim() !=0){
            const paragraph = document.createElement('p');
            paragraph.classList.add('paragraph__styling')
            paragraph.textContent = userEnteredValue;
            todoContainer.appendChild(paragraph);
               // powyszy kod działa
      // jak zresetować input?
              inputField = document.querySelector('#yourtask').reset();   
      
            
            // JAK DODAĆ SZABLON
              const template = `<div class="todoList__user-input userInputBox">
              <div class="todoList__buttons">
                  <a href="#" class="reset"><i class="far fa-trash-alt fa-2x"></i>
                  <a href="#" class="start "><i class="fa fa-play fa-2x"></i>
                  <a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a>
                   </div>   
                   <p class="paragraph__styling">${inputField.value}</p>
          
                   </div>`;
               todoContainer.append(template);
        }else{
     
         alert('Wyznacz sobie cel')

        }       
  
  });


//   addToDoButton.addEventListener('click',function() {
        // const userInputBox = document.querySelector('todoList__user-input');
        // const todoList__buttons = document.createElement('div');
        // todoList__buttons.classList.add('todoList__buttons');

        
        // userInputBox.style.display = "inline-block";
        // userInputBox.textContent = inputField.value;
        // todoContainer.appendChild(userInputBox);
//   } );
      //BUTTONS START STOP RESET/DELATE
    //   const playButton$ = document.createElement('i');
    //   playButton$.classList.add('playIcon');
//   });
  




  // INPUT EVENTS

// const input = document.querySelector('input');
// const label = document.querySelector('label');
// const fromInputToDo = document.querySelector('.current-to-do')


// input.addEventListener('input', currentToDo);

//     function currentToDo(e) {
//         // console.log({e});
//         fromInputToDo.textContent = e.target.value;
//         e.preventDefault();

// };
// input.addEventListener('input', currentToDo);

//     function currentToDo(e) {
//         console.log(e);
//         fromInputToDo.textContent = e.target.value;
//         e.preventDefault();

// }
