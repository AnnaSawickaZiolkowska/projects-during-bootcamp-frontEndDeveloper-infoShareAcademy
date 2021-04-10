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
  
  // STWORZYĆ FUNKCJĘ KTÓRA PO 25 MINUTACH ZAPROPONUJE PAUZE I MUZYKE NP. RELAKSACYJNĄ
  //ALBO MUZYKĘ NA ROZŁADOWANIE NAPIĘCIA


//////////////////////////////
  // TO DO LIST
//////////////////////////////

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


//CREATE LABEL FOCUS EVENT 

const label = document.querySelector('label');
const userEnteredValue = inputField.value;


const labelUpDownEvent = (value)=>{
        const labelUpEvent = document.querySelector('input[type="text"]');

        labelUpEvent.addEventListener('focus', (e)=>{
            label.style.fontSize = '20px'; 
            label.style.transform = 'translateY(0px)';
            label.style.lineHeight = '26px';  
        });
        const labelDownEvent = document.querySelector('input[type="text"]');

        labelDownEvent.addEventListener('blur', (e)=>{
            if(e.target.value !=0){
                label.style.fontSize = '20px'; 
            label.style.transform = 'translateY(0px)';
            label.style.lineHeight = '26px';
            }else{
                label.style.fontSize = '26px'; 
            label.style.transform = 'translateY(33px)';
            label.style.lineHeight = '26px'; 
            }
        });
};

//WYWOŁANIE FUNKCJI NA FOCUS LABEL DO WRZUCENIA DO MAIN.JS
labelUpDownEvent(userEnteredValue);
//--------


// CREATE TODO EVENT LISTENER FOR INPUT 
inputField.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        e.preventDefault();
        document.querySelector('.add-todo').click();
    }
});

// CREATE TODO EVENT LISTENER FOR ADD BUTTON

  addToDoButton.addEventListener('click', function (e){
        e.preventDefault();
        const userEnteredValue = inputField.value;
        if(userEnteredValue.trim() !=0){
          addTodoItems(userEnteredValue) //function push new items into array


            // const paragraph = document.createElement('p');
            // paragraph.classList.add('paragraph__styling')
            // paragraph.textContent = userEnteredValue;
            // todoContainer.appendChild(paragraph);
               // powyszy kod działa
      // jak zresetować input?
            //   document.querySelector('#yourtask').reset(); 

                
            // JAK DODAĆ SZABLON
            todoContainer.insertAdjacentHTML('afterbegin', `<div class="todoList__user-input userInputBox"><div class="todoList__buttons"><a href="#" class="reset"><i class="far fa-trash-alt fa-2x"></i><a href="#" class="start "><i class="fa fa-play fa-2x"></i><a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a></div><p class="paragraph__styling">${userEnteredValue}</p></div>`);

            //POD ELEMENTEM WYŚWIETLA SIĘ NULL NIE WIEM GDZIE TO PORAWIĆ


            //   const template = `<div class="todoList__user-input userInputBox">
            //   <div class="todoList__buttons">
            //       <a href="#" class="reset"><i class="far fa-trash-alt fa-2x"></i>
            //       <a href="#" class="start "><i class="fa fa-play fa-2x"></i>
            //       <a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a>
            //        </div>   
            //        <p class="paragraph__styling">${inputField.value}</p>
          
            //        </div>`;
            //    todoContainer.append(template);

            inputField.value = '';  
            inputField.blur();
          

        }else{
     
         alert('Wyznacz sobie cel')

        }       
  
  });


// LOCAL STORAGE - ARRAY DO PRZECHOWYWANIA NAZWY ZADANIA I FUNKCJI, KTÓRA BY POKAZYWAŁA ŁĄCZNY CZAS PRACY NAD ZADANIEM

const todoItemsArray = [];

function addTodoItems(userEnteredValue){
  const todoItems ={
  task: userEnteredValue,  
  id: Date.now(), //co by monzna zrobić z tą datą, a moze niepotrzebna
  time: 'function sum time', //to jeszcze do wymyślenia 
};
  todoItemsArray.push(todoItems);
  console.log(todoItemsArray);
};

      //BUTTONS START STOP RESET/DELATE
    //   const playButton$ = document.createElement('i');
    //   playButton$.classList.add('playIcon');
//   });
  

  // INPUT EVENTS

const input = document.querySelector('input');
// const label = document.querySelector('label');
const fromInputToDo = document.querySelector('.current-to-do')



/////////////////////
// FUNKCJA KTÓRA WYŚWIETLA AKTUALNE ZADANIE, DO KTÓREGO BĘDZIE MIERZON CZAS
///////////////////

function displayCurrentToDo(){
  input.addEventListener('input', currentToDo);

  function currentToDo(e) {
      // console.log(e);
      fromInputToDo.textContent = e.target.value;
      e.preventDefault();
}
};
//WYWOŁANIE FUNKCJI DO DODANIA GDY USER WCIŚNIE PLAY
displayCurrentToDo()