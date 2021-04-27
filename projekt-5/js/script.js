import {timeToString} from "./timeToString.js";
import {labelUpDownEvent, labelFocusEnter} from "./labelUpDownEvent.js";
import {getElapsedTime} from "./getElapsedTime.js"
import {timeArray, addTimeToArray} from "./addTimeToArray.js"

import {displayTime} from "./displayTimeOnWatch.js";
import {toggleTodoButton} from "./toggleTodoButton.js";
import {startTodoTimer, pauseTodoTimer} from "./startStopTodoTimer.js";

import {displayCurrentToDo, fromInputToDo} from "./displayCurrentTodo.js";
import {start, pause, reset} from "./startStopResetMainTimer.js";

import {firebaseConfig} from "./config-firebase.js";


//FIRESTORE
const todoContainer = document.querySelector(".todoList");


const db = firebase.firestore();

db.collection('todos').onSnapshot(todos =>{
  // updateTaskList();
// getTodoData(todos);  
getData(todos);
template(todos);
});



const getData = (todo) => {
db.collection('todos').get(todo)
}

// function renderTodos(todos) {
//   let template = "";

//   todos.forEach(todo => {
//     const data = todo.data();
//     const id = todo.id;

//    template =+ `<div class="todoList__user-input userInputBox" data-task-id="${data.id}">
//               <div class="todoList__buttons">
//               <a href="#" class="delete" ><i class="far fa-trash-alt fa-2x"></i>
//               <a href="#" class="start"><i class="far fa-play-circle fa-2x" data-id="${data.id}"></i>
//               <a href="#" class="stop"><i class="far fa-pause-circle fa-2x" data-id="${data.id}"></i></a>
//                </div>   
//                <p class="paragraph__styling">${data.task}</p>
//                </div>`;
//   });

//   todoContainer.innerHTML = template;

//   const updateTaskList = () => {
//     todoContainer.innerHTML = todoItemsArray.map(template).join("");
//     if (todoItemsArray.length == 0) {
//       fromInputToDo.textContent = "Nothing to do :)";
//     }
//   };
//   return updateTaskList();
// }



//??????????
// DZIE DODAWAĆ EVENTLISTENER W MODUŁACH
//??????????


playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

// STWORZYĆ FUNKCJĘ KTÓRA PO 25 MINUTACH ZAPROPONUJE PAUZE I MUZYKE NP. RELAKSACYJNĄ
//ALBO MUZYKĘ NA ROZŁADOWANIE NAPIĘCIA

//////////////////////////////
// TO DO LIST
//////////////////////////////

const addToDoButton = document.querySelector(".add-todo");
const addForm = document.querySelector(".form");
const inputField = document.querySelector("#yourtask");
const userEnteredValue = inputField.value;


displayCurrentToDo(); //WYWOŁANIE FUNKCJI, KTÓRA WYŚWIETLA H1, GDY USER WPISZE COŚ W INPUT

labelUpDownEvent(userEnteredValue); //WYWOŁANIE FUNKCJI NA FOCUS LABEL 

labelFocusEnter(); //WYWOŁANIE FUNKCJI NA FOCUS LABEL FOR ENTER KEY

// const template = (todoItem) => `<div class="todoList__user-input userInputBox" data-task-id="${todoItem.id}">
//               <div class="todoList__buttons">
//               <a href="#" class="delete" ><i class="far fa-trash-alt fa-2x"></i>
//               <a href="#" class="start"><i class="far fa-play-circle fa-2x" data-id="${todoItem.id}"></i>
//               <a href="#" class="stop"><i class="far fa-pause-circle fa-2x" data-id="${todoItem.id}"></i></a>
//                </div>   
//                <p class="paragraph__styling">${todoItem.task}</p>
//                </div>`;

              // const updateTaskList = () => {
              //   todoContainer.innerHTML = todoItemsArray.map(template).join("");
              //   if (todoItemsArray.length == 0) {
              //     fromInputToDo.textContent = "Nothing to do :)";
              //   }
              // };

// !!!!!!!!!!
// JAK ZROBIĆ ABY ZADANIA NIE ZNIKAŁY PO ODŚWIEZENIU STRONY

const template = (
  todoItem
) => `<div class="todoList__user-input userInputBox" data-task-id="${todoItem.id}">
              <div class="todoList__buttons">
                  <a href="#" class="delete" ><i class="far fa-trash-alt fa-2x"></i>
                  <a href="#" class="start"><i class="far fa-play-circle fa-2x" data-id="${todoItem.id}"></i>
                  <a href="#" class="stop"><i class="far fa-pause-circle fa-2x" data-id="${todoItem.id}"></i></a>
                   </div>   
                   <p class="paragraph__styling">${todoItem.task}</p>
                   </div>`;

const updateTaskList = () => {
  todoContainer.innerHTML = todoItemsArray.map(template).join("");
  if (todoItemsArray.length == 0) {
    fromInputToDo.textContent = "Nothing to do :)";
  }
};



const addTodoToDb = todo => {
  firebase
    .firestore()
    .collection("todos")
    .add(todo)
    .then(() => {
console.log('todo dodane do Firestore');
    });
};


const getTodoData = e => {
  // e.preventDefault();
  const todo = {
    task: inputField.value,
    time: "some function",
    id: Date.now(),
  }
  addTodoToDb(todo);
  // addForm.reset();
};
// CREATE TODO EVENT LISTENER FOR ADD BUTTON

addToDoButton.addEventListener("click", function (e) {
  e.preventDefault();
  const userEnteredValue = inputField.value;
  if (userEnteredValue.trim() != 0) {
    
    getTodoData();
    // const key = firebase.database().ref().child("user_task").push().key;
    // console.log(key);
    // const dataTask = {
    //   task: userEnteredValue,
    //   time: "function sum time",
    //   id: Date.now(),
    //   // key: key,
    // };

    // const updates = {};
    // updates["/user_task/" + key] = dataTask;
    // firebase.database().ref().update(updates);

    addTodoItems(userEnteredValue); //function push new items into array
    addForm.reset(); // albo  inputField.value = "";
    inputField.blur();

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
        // renderTodos(userEnteredValue); 
  updateTaskList();

  // toggleTodoButton("PLAY");
}


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
          // renderTodos(todos);  
     updateTaskList();
  }

  if (e.target.classList.contains("fa-play-circle")) {
  //   let playBtn = document.querySelector(".fa-play-circle");
  // let pauseBtn = document.querySelector(".fa-pause-circle");

  //   playBtn.style.display = "none"
  //   pauseBtn.style.display = "block"

    startTodoTimer();
    getElapsedTime();
  }

  if (e.target.classList.contains("fa-pause-circle")) {
    // let playBtn = document.querySelector(".fa-play-circle");
    // let pauseBtn = document.querySelector(".fa-pause-circle");
    // pauseBtn.style.display = "none"
    // playBtn.style.display = "block"

    pauseTodoTimer();
    addTimeToArray();
    console.log(timeArray);
  }
});


//-----------------

// toggleTodoButton("PLAY");


