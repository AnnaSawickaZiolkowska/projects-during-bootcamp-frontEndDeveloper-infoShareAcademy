import {timeToString} from "./timeToString.js";
import {labelUpDownEvent, labelFocusEnter} from "./labelUpDownEvent.js";
import {toggleTodoButton} from "./toggleTodoButton.js";
// import {firebaseConfig} from "./config-firebase.js";

var firebaseConfig = {
  apiKey: "AIzaSyAuWQvzIPe1o2rf9wtfb8I0HuMfdve5qf4",
  authDomain: "time-manager-a020f.firebaseapp.com",
  databaseURL:
    "https://time-manager-a020f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "time-manager-a020f",
  storageBucket: "time-manager-a020f.appspot.com",
  messagingSenderId: "1091022402112",
  appId: "1:1091022402112:web:30322b448c92dd12fde5a5",
};
firebase.initializeApp(firebaseConfig);



let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let resetButton = document.querySelector("#resetButton");

function toggleButton(buttonKey) {
  const buttonVisible = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonHidden = buttonKey === "PAUSE" ?  playButton : pauseButton;
  buttonVisible.style.display = "block";
  buttonHidden.style.display = "none";
}

// Modify watch textContent

// const watchTextContent = document.querySelector('#display').textContent = txt
function displayTime(txt) {
  document.querySelector("#display").textContent = txt;
}

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
 
}

function pause() {
  clearInterval(timerInterval);
  toggleButton("PLAY");

}

function reset() {
  clearInterval(timerInterval);
  displayTime("00:00");
  elapsedTime = 0;
  toggleButton("PLAY");
  playButton.style.display = "block";
  pauseButton.style.display = "none";
}

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

// STWORZYĆ FUNKCJĘ KTÓRA PO 25 MINUTACH ZAPROPONUJE PAUZE I MUZYKE NP. RELAKSACYJNĄ
//ALBO MUZYKĘ NA ROZŁADOWANIE NAPIĘCIA

//////////////////////////////
// TO DO LIST
//////////////////////////////

const addToDoButton = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".todoList");
const addForm = document.querySelector(".form");
const inputField = document.querySelector("#yourtask");
const userEnteredValue = inputField.value;

labelUpDownEvent(userEnteredValue); //WYWOŁANIE FUNKCJI NA FOCUS LABEL 

labelFocusEnter(); //WYWOŁANIE FUNKCJI NA FOCUS LABEL FOR ENTER KEY

// const template = (todoItem) => `<div class="todoList__user-input userInputBox" data-task-id="${todoItem.id}">
//               <div class="todoList__buttons">
//                   <a href="#" class="delete" ><i class="far fa-trash-alt fa-2x"></i>
//                   <a href="#" class="start "><i class="fa fa-play fa-2x"></i>
//                   <a href="#" class="stop"><i class="fa fa-plus fa-2x"></i></a>
//                    </div>
//                    <p class="paragraph__styling">${todoItem.task}</p>
//                    </div>`;

// const updateTaskList = () => {
//   todoContainer.innerHTML = todoItemsArray.map(template).join('')
// };

// !!!!!!!!!!
// JAK ZROBIĆ ABY ZADANIA NIE ZNIKAŁY PO ODŚWIEZENIU STRONY

const template = (
  key
) => `<div class="todoList__user-input userInputBox" data-task-id="${key.id}">
              <div class="todoList__buttons">
                  <a href="#" class="delete" ><i class="far fa-trash-alt fa-2x"></i>
                  <a href="#" class="start"><i class="far fa-play-circle fa-2x" data-id="${key.id}"></i>
                  <a href="#" class="stop"><i class="far fa-pause-circle fa-2x" data-id="${key.id}"></i></a>
                   </div>   
                   <p class="paragraph__styling">${key.task}</p>
                   </div>`;

const updateTaskList = () => {
  todoContainer.innerHTML = todoItemsArray.map(template).join("");
  if (todoItemsArray.length == 0) {
    fromInputToDo.textContent = "Nothing to do :)";
  }
};

// CREATE TODO EVENT LISTENER FOR ADD BUTTON

addToDoButton.addEventListener("click", function (e) {
  e.preventDefault();
  const userEnteredValue = inputField.value;
  if (userEnteredValue.trim() != 0) {
    const key = firebase.database().ref().child("user_task").push().key;
    console.log(key);
    const dataTask = {
      task: userEnteredValue,
      time: "function sum time",
      id: Date.now(),
      key: key,
    };

    const updates = {};
    updates["/user_task/" + key] = dataTask;
    firebase.database().ref().update(updates);

    addTodoItems(userEnteredValue); //function push new items into array
    addForm.reset(); // albo  inputField.value = "";
    inputField.blur();
    toggleTodoButton('PLAY');
  } else {
    alert("Wyznacz sobie cel"); //confirm
  }
});

// LOCAL STORAGE - ARRAY DO PRZECHOWYWANIA NAZWY ZADANIA I FUNKCJI, KTÓRA BY POKAZYWAŁA ŁĄCZNY CZAS PRACY NAD ZADANIEM
// create function addTodoItems which create todoItems object based on the userEnteredValue, and push it into array
// wywołanie funkcji przypisane do warunku, w którym value nie jest pustym polem
let todoItemsArray = [];



function addTodoItems(userEnteredValue) {
  const todoItems = {
    task: userEnteredValue,
    id: Date.now(), //co by monzna zrobić z tą datą, a moze niepotrzebna
    time: "function sum time", //to jeszcze do wymyślenia
  };

  
  
  todoItemsArray.push(todoItems);
  updateTaskList();
  // toggleTodoButton("PLAY");

}

/////////////////////
// FUNKCJA KTÓRA WYŚWIETLA AKTUALNE ZADANIE, DO KTÓREGO BĘDZIE MIERZON CZAS
///////////////////
const input = document.querySelector("input");
const fromInputToDo = document.querySelector(".current-to-do");

function displayCurrentToDo() {
  input.addEventListener("input", currentToDo);

  function currentToDo(e) {
    // console.log(e);
    fromInputToDo.textContent = e.target.value;
    e.preventDefault();
  }
}
//WYWOŁANIE FUNKCJI DO DODANIA GDY USER WCIŚNIE PLAY
displayCurrentToDo();

//BUTTONS START STOP DELETE IN TODO ITEMS ARRAY
// PRZYCISKI W TABELI TODO ITEMS
//CZY TU MA BYĆ JAKAŚ PĘTLA ABY DZIAŁAŁO DO KAZDEGO TASK Z OSOBNA
//CZY POTRZEBNY ZNAK $ PRZY KLASIE PRZYCISKU

//!!!!!!!! dlaczego nie działa
// function removeTaksById(arrOriginal, elementToRemove){
//   return arrOriginal.filter((item)=>{
//     return item.id !== elementToRemove
//   });
// }
// todoContainer.querySelectorAll('.fa-play-circle').forEach((button)=>{

// })

todoContainer.addEventListener("click", (e) => {

  console.log(e.target);
  if (e.target.classList.contains("fa-trash-alt")) {
    console.log(e.target.closest(".userInputBox").dataset.taskId);

    const itemIdString = e.target.closest(".userInputBox").dataset.taskId;
    console.log(itemIdString);
    console.log(typeof itemIdString);

    //zamieniam typ string na int aby móc porównać id
    const itemId = parseInt(itemIdString);
    console.log(typeof itemId);

    // removeTaksById(todoItemsArray, itemId);

    //porównuję id w istniejącej tablicy i filtruję,  aby nie zawierała id usuniętego przez urzytkownika
    const removeItem = todoItemsArray.filter((item) => {
      return item.id != itemId;
    });
    console.log(todoItemsArray);
    console.log(removeItem);

    todoItemsArray = removeItem; // Czy mona to jakoś inaczej zrobić?
    updateTaskList();
  }

  if (e.target.classList.contains("fa-play-circle")) {
    startTodo();
    getElapsedTime();
  }

  if (e.target.classList.contains("fa-pause-circle")) {
    pauseTodo();
    addTimeToArray();
    console.log(timeArray);
  }
});

const getElapsedTime = (time) => {
  startTime = Date.now() - elapsedTime;
  elapsedTime = Date.now() - startTime;
  displayTime(timeToString(elapsedTime));

  return timeToString(elapsedTime);
};

const timeArray = [];

function addTimeToArray(elapsedTime) {
  const taskTime = {
    elapsedTime: getElapsedTime(elapsedTime),
  };
  timeArray.push(taskTime);
}

//-----------------

// Add buttons and create function for Toggle button

// toggleTodoButton("PLAY");





function startTodo() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(timeToString(elapsedTime));
  }, 1000);
  toggleTodoButton("PAUSE");
}

function pauseTodo() {
  clearInterval(timerInterval);
  toggleTodoButton("PLAY");
}
