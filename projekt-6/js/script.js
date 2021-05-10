const cards = [
  { name: "Intuicja", pic: "./img/intuicja.jpeg" },
  { name: "Zaufanie", pic: "./img/zaufanie.jpeg" },
  { name: "Możliwości", pic: "./img/możliwości.jpeg" },
  { name: "Ból", pic: "./img/ból.jpeg" },
  { name: "Przeciętność", pic: "./img/przeciętność.jpeg" },
  { name: "Punkt Widzenia", pic: "./img/punktWidzenia.jpeg" },
  { name: "Autentyczność", pic: "./img/autentyczność.jpeg" },
  { name: "Wytrwałość", pic: "./img/wytrwałość.jpeg" },
  { name: "Kreatywność", pic: "./img/kreatywność.jpeg" },
  { name: "Razem", pic: "./img/razem.jpeg" },
  { name: "Miłość", pic: "./img/miłość.jpeg" },
  { name: "Nawyki", pic: "./img/nawyki.jpeg" },
  { name: "Uwiązanie", pic: "./img/uwiązanie.jpeg" },
  { name: "Wymówki", pic: "./img/wymówki.jpeg" },
  { name: "Oddanie", pic: "./img/oddanie.jpeg" },
  { name: "Osąd", pic: "./img/osąd.jpeg" },
  { name: "Inicjatywa", pic: "./img/inicjatywa.jpeg" },
  { name: "Podróż", pic: "./img/podróż.jpeg" },
  { name: "Sukces", pic: "./img/sukces.jpeg" },
  { name: "Uczenie się", pic: "./img/uczenieSię.jpeg" },
  { name: "Lęk", pic: "./img/lęk.jpeg" },
  { name: "Wszystko jest możliwe", pic: "./img/wszystkoJestMożliwe.jpeg" },
  { name: "Trudności", pic: "./img/trudności.jpeg" },
  { name: "Powinno Być", pic: "./img/powinnoByć.jpeg" },
  { name: "Przywództwo", pic: "./img/przywództwo.jpeg" },
  { name: "Poprostu Być", pic: "./img/poprostuByć.jpeg" },
  { name: "Pauza", pic: "./img/pauza.jpeg" },
  { name: "Działanie", pic: "./img/działanie.jpeg" },
  { name: "Właściwy Moment", pic: "./img/właściwyMoment.jpeg" },
  { name: "Porażka", pic: "./img/porażka.jpeg" },
];

const insightfulFeedback = {title: 'Insightful Feedback - Process Layout',
  description: 'Play this 3-card process layout chart to create clarity about your next step',
  question1: 'What is working for me?',
  question2: 'What is not working for me?',
  question3: 'What is my next step?',
  card1: `./img/card-back.jpg`,
  card2: `./img/card-back.jpg`,
  card3: `./img/card-back.jpg`,
  cardName1: '',
  cardName2: '',
  cardName3: '',
  };

const threeCardsLayouts = [insightfulFeedback];

const cardsList = document.querySelector('.cardsList');
const basicThreeCardTemplate = `<li class="cardContent__wrapper id="card1">
<div class="cardContainer">
  <div class="card__layout card1">
    <img class="card__back card-one" id="card__back" data-reverse
      src="${insightfulFeedback.card1}" alt=""/>
    <span class="displayCardName name-one">${insightfulFeedback.cardName1}</span>
    <button class="card__pick card__pick-one">zagrajmy ♥</button>
  </div>
  <div class="card__caption">
    <span class="cardContent__outside" data-question1>${insightfulFeedback.question1}</span>
  </div>
</div>
</li>
<li class="cardContent__wrapper" id="card2">
  <div class="cardContainer">
    <div class="card__layout">
      <div class="card__lock" id="lock">
        <i class="fas fa-lock fa-2x"></i>
      </div>
      <img class="card__back card-two" id="card__back" data-reverse src="${insightfulFeedback.card2}" alt=""/>
      <span class="displayCardName name-two">${insightfulFeedback.cardName1}</span>
      <button class="card__pick card__pick-two card__pick-two hidden"> Wybierz kartę</button>
    </div>
   <div class="card__caption">
    <span class="cardContent__outside" data-question2>${insightfulFeedback.question3}</span>
   </div>
   </div>
  </li>
  <li class="cardContent__wrapper" id="card3">
   <div class="cardContainer">
    <div class="card__layout">
      <div class="card__lock card__lock-three" id="lock">
        <i class="fas fa-lock fa-2x"></i>
      </div>
      <img class="card__back card-three" id="card__back" data-reverse src="./img/card-back.jpg" alt=""/>
      <span class="displayCardName name-three" data-name-three></span>
      <button class="card__pick card__pick-three hidden">Wybierz kartę</button>
    </div>
  <div class="card__caption">
  <span class="cardContent__outside" data-question3>What is my next step?</span>
    </div>
    </div>
  </li>`;

cardsList.append(basicThreeCardTemplate);
cardsList.innerHTML = basicThreeCardTemplate

const cardContainer = document.querySelector(".cardContainer");
const cardBack = document.querySelector("#card__back");
const cardBackSelected = document.querySelector("#modal-selectedCard");
const cardFront = document.querySelector(".card__front");
const displayCardName = document.querySelector(".displayCardName");
const displaySelectedCardName = document.querySelector(
  ".displayCardName-selected"
);
const pickCardButton = document.querySelector(".card__pick");
const cardLock = document.querySelector(".card__lock");
const cardLayout = document.querySelector(".card__layout");

// MODAL
const modal = document.querySelector("#modal");

const showModal = (modal) => {
  modal.classList.remove("modal--hidden");

  const modalCloseButton = modal.querySelector("[data-button-close]");
  modalCloseButton.addEventListener("click", () => {
    closeModal(modal);
  });
};

const closeModal = (modal) => {
  modal.classList.add("modal--hidden");
};


// Get random Photo from Array
let selectedCard;
const test = document.querySelector(".card__pick-one");
const pickCard = () => {
  selectedCard = cards[Math.floor(Math.random() * cards.length)];
  cardBackSelected.src = selectedCard.pic;
  displaySelectedCardName.textContent = selectedCard.name;
  cardBack.removeEventListener("click", pickCard);
  pickCardButton.classList.add("hidden");
  showModal(modal);
  console.log(test.parentElement.classList);

  // layoutArray.push(selectedCard);
  // cardOneArray.push(selectedCard);
  // if (test.parentElement.classList.contains("card1")) {
  //   console.log("lubię frytki");
  // }

  // cardBack.src = selectedCard.pic;
  // displayCardName.textContent = selectedCard.name;
  return selectedCard;
};

// const displayModalQuestions = (e) => {
//   const modalQuestion = document.querySelector('#question');
//   if (e.target.classList.contains("card__pick-one")){
//     const question = document.querySelector('[data-question1]').textContent;
//     modalQuestion.textContent = question
//   }
//   if (e.target.classList.contains("card__pick-two")){
//     modalQuestion.innerHTML = document.querySelector('[data-question2]')
//       }
// };
// const pickCard = () => {
//   selectedCard = cards[Math.floor(Math.random() * cards.length)];

//   document.querySelectorAll('.card__back').forEach(card =>{
//     card.src = selectedCard.pic;
//   });

//   displaySelectedCardName.textContent = selectedCard.name;
//   // cardBack.removeEventListener('click', pickCard);
//   showModal(modal);
//   displayCardName.textContent = selectedCard.name;
//   pickCardButton.classList.add('hidden');
// };

// document.querySelectorAll('.card__pick').forEach(cardBack => {
//   cardBack.addEventListener('click', pickCard);
// });

document.querySelectorAll(".card__pick").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // pickCard();

    const card = pickCard();
    const modalQuestion = document.querySelector("#question");

    if (button.classList.contains("card__pick-one")) {
      document.querySelector(".card__pick-one").classList.add("hidden");
      // document.querySelector(".card-one").src = card.pic;
      document.querySelector(".name-one").textContent = card.name;
      document.querySelector(".card__lock").classList.add("hidden");
      document.querySelector(".card__pick-two").classList.remove("hidden");
      const question = document.querySelector("[data-question1]").textContent;
      modalQuestion.textContent = question;
      cardOneArray.push(selectedCard)
      console.log(cardOneArray);
      document.querySelector(".card-one").src = card.pic;


    } else if (button.classList.contains("card__pick-two")) {
      document.querySelector(".card__pick-two").classList.add("hidden");
      document.querySelector(".card-two").src = card.pic;
      document.querySelector(".name-two").textContent = card.name;
      document.querySelector(".card__lock-three").classList.add("hidden");
      document.querySelector(".card__pick-three").classList.remove("hidden");
      document.querySelector(".card__pick-two").classList.add("active");
      const question = document.querySelector("[data-question2]").textContent;
      modalQuestion.textContent = question;
    } else if (button.classList.contains("card__pick-three")) {
      document.querySelector(".card__pick-three").classList.add("hidden");
      document.querySelector(".card-three").src = card.pic;
      document.querySelector(".name-three").textContent = card.name;
      const question = document.querySelector("[data-question3]").textContent;
      modalQuestion.textContent = question;
    }
  });
});


let cardOneArray = [
  {question: "What is working for me?"},
];

let cardTwoArray = [
{question: "What is not working for me?"},
]

let cardThreeArray = [
  {question: "What is my next step?"},
  ]
// let layoutArray = [
//   {question: "What is working for me?", name: selectedCard.name, pic: selectedCard.pic},
//   {question: "What is not working for me?", name: selectedCard.name, pic: selectedCard.pic},
//   {question: "What is my next step?", name: selectedCard.name, pic: selectedCard.pic},
// ];

// document.querySelectorAll('.card__back').forEach(card =>{
// card.addEventListener('mouseover', () =>{
//   if (card.hasAttribute('.active')){
//     console.log('działa');
//   }
// })
// })

// Modal - hover buttons - mouseover/mouseout event
document
  .querySelector(".card__layout-selected")
  .addEventListener("mouseover", () => {
    document.querySelector(".button__hover").classList.remove("hidden");
  });
document
  .querySelector(".card__layout-selected")
  .addEventListener("mouseout", () => {
    document.querySelector(".button__hover").classList.add("hidden");
  });

document.querySelector(".btn__backMap").addEventListener("click", () => {
  closeModal(modal);
});

// CHANGE CARD
// dodanie klasy .card__pick do przycisku zmień kartę,
// zmienia kartę w modalu, ale nie podmienia zdjęcia na planszy

// const changeCardButton = document.querySelector(".btn__changeCard");

// const changeCard = () => {};
// changeCardButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   closeModal(modal);
//   // document.querySelector(".card__pick-one").classList.add('hidden');
//   document.querySelector(".card-one").src = "./img/card-back.jpg";
//   document.querySelector(".name-one").textContent = "";
//   pickCardButton.classList.remove("hidden");
// });

// const showCard = (cardName) => {
//   let i;

//   for (i = 0; i < cardContainer.length; i++){
//     cardContainer[i].innerHtml = 
//   }
// };

