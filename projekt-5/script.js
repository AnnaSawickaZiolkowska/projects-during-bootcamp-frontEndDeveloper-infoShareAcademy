// Add buttons and create function for Toggle button 

let playButton = document.querySelector('#playButton');
let pauseButton = document.querySelector('#pauseButton');
let resetButton = document.querySelector('#resetButton');

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

function displayTime(txt) {
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
const inputField = document.querySelector('#yourtask');
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


const labelUpDownEvent = (value) => {
  const labelUpEvent = document.querySelector('input[type="text"]');

  labelUpEvent.addEventListener('focus', (e) => {
    label.style.fontSize = '20px';
    label.style.transform = 'translateY(0px)';
    label.style.lineHeight = '26px';
  });
  const labelDownEvent = document.querySelector('input[type="text"]');

  labelDownEvent.addEventListener('blur', (e) => {
    if (e.target.value != 0) {
      label.style.fontSize = '20px';
      label.style.transform = 'translateY(0px)';
      label.style.lineHeight = '26px';
    } else {
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
inputField.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.querySelector('.add-todo').click();
  }
});

// CREATE TODO EVENT LISTENER FOR ADD BUTTON

const template = (todoItem) => `<div class="todoList__user-input userInputBox" data-task-id="${todoItem.id}">
              <div class="todoList__buttons">
                  <a href="#" class="reset" ><i class="far fa-trash-alt fa-2x"></i>
                  <a href="#" class="start "><i class="fa fa-play fa-2x"></i>
                  <a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a>
                   </div>   
                   <p class="paragraph__styling">${todoItem.task}</p>
          
                   </div>`;

const updateTaskList = () => {
  todoContainer.innerHTML = todoItemsArray.map(template).join('')

}


addToDoButton.addEventListener('click', function (e) {
  e.preventDefault();
  const userEnteredValue = inputField.value;
  if (userEnteredValue.trim() != 0) {
    addTodoItems(userEnteredValue) //function push new items into array


    inputField.value = '';  // jak jeszcze zresetować input?
    inputField.blur();

  } else {
    alert('Wyznacz sobie cel')
  }
});


// LOCAL STORAGE - ARRAY DO PRZECHOWYWANIA NAZWY ZADANIA I FUNKCJI, KTÓRA BY POKAZYWAŁA ŁĄCZNY CZAS PRACY NAD ZADANIEM
// create function addTodoItems which create todoItems object based on the userEnteredValue, and push it into array
// wywołanie funkcji przypisane do warunku, w którym value nie jest pustym polem
const todoItemsArray = [];

function addTodoItems(userEnteredValue) {
  const todoItems = {
    task: userEnteredValue,
    id: Date.now(), //co by monzna zrobić z tą datą, a moze niepotrzebna
    time: 'function sum time', //to jeszcze do wymyślenia 
  };
  todoItemsArray.push(todoItems);
  updateTaskList()
};

// INPUT EVENTS

const input = document.querySelector('input');
// const label = document.querySelector('label');
const fromInputToDo = document.querySelector('.current-to-do')



/////////////////////
// FUNKCJA KTÓRA WYŚWIETLA AKTUALNE ZADANIE, DO KTÓREGO BĘDZIE MIERZON CZAS
///////////////////

function displayCurrentToDo() {
  input.addEventListener('input', currentToDo);

  function currentToDo(e) {
    // console.log(e);
    fromInputToDo.textContent = e.target.value;
    e.preventDefault();
  }
};
//WYWOŁANIE FUNKCJI DO DODANIA GDY USER WCIŚNIE PLAY
displayCurrentToDo();

//BUTTONS START STOP DELETE IN TODO ITEMS ARRAY
// PRZYCISKI W TABELI TODO ITEMS
//CZY TU MA BYĆ JAKAŚ PĘTLA ABY DZIAŁAŁO DO KAZDEGO TASK Z OSOBNA
//CZY POTRZEBNY ZNAK $ PRZY KLASIE PRZYCISKU

const playTodoItems = document.querySelector('.start');
const deleteTodoItems = document.querySelector('.delete')

////-----działa od Bartosza
// todoContainer.addEventListener('click', (e) => {
//   console.log(e.target);
//   if (e.target.classList.contains('fa-trash-alt')) {
//     console.log(e.target.closest('.userInputBox').dataset.taskId)
//   }
// })
///--------

todoContainer.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('fa-trash-alt')) {
    console.log(e.target.closest('.userInputBox').dataset.taskId)
    const itemIdString = e.target.closest('.userInputBox').dataset.taskId;
    console.log(itemIdString);
   console.log(typeof itemIdString);
   const itemId = parseInt(itemIdString);
   console.log(typeof itemId);

  const removeItem = todoItemsArray.filter((item)=>{
    return item.id != itemId;
  })
 

    // const removeItemFromArray = removeItem(todoItemsArray, itemId)
    console.log(removeItem);
    // console.log(removeItemFromArray);
    // console.log(removeItem(todoItemsArray, itemId));

  }
  const updateTaskList = () => {
    todoContainer.innerHTML = removeItem
  
  }}
  )

// const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key] }));




/// PRZYKŁAD
// function arrayRemove(arr, value) { 
    
//   return arr.filter(function(ele){ 
//       return ele != value; 
//   });
// }

// var result = arrayRemove(array, 6);
// // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]