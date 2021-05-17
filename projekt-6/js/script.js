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

const insightfulFeedback = [
  {
    id: "card1",
    question: "What is working for me?",
    card: `./img/card-back.jpg`,
    cardName: "",
    title: 'Insightful Feedback - Process Layout',
    description: 'Play this 3-card process layout chart to create clarity about your next step',
  },
  {
    id: "card2",
    question: "What is not working for me?",
    card: `./img/card-back.jpg`,
    cardName: "",
    title: 'Insightful Feedback - Process Layout',
    description: 'Play this 3-card process layout chart to create clarity about your next step',
  },
  {
    id: "card3",
    question: "What is my next step?",
    card: `./img/card-back.jpg`,
    cardName: "",
    title: 'Insightful Feedback - Process Layout',
    description: 'Play this 3-card process layout chart to create clarity about your next step',
  },
];

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

const cardsList = document.querySelector(".cardsList");


const cardTemplate = insightfulFeedback.map((content) => {
  return `<li class="cardContent__wrapper" id="${content.id}">
  <div class="cardContainer" >
    <div class="card__layout">
    <div class="card__lock" id="lock"><i class="fas fa-lock fa-2x"></i></div>
      <img class="card__back card-one" id="card__back" data-reverse src="${content.card}" alt=""/>
      <button class="card__pick card__pick-one" >zagrajmy ♥</button>
      <span class="displayCardName">${content.cardName}</span>
    </div>
    <div class="card__caption">
      <span class="cardContent__outside" data-question1>${content.question}</span>
    </div>
  </div>
  </li>`
}).join("");
cardsList.insertAdjacentHTML("afterbegin", cardTemplate)

// Hide lock element from first card
document.querySelector('.card__lock').classList.add('hidden');

  const removeLockElement = (e) =>{

    if (e.target.classList.contains('card__pick')) {
      // onCardClicked(e);
      console.log(e.target.closest("div div"));
      e.target.closest("div div").removeChild(document.querySelector(".card__lock"));
      document.querySelector('.card__lock').classList.add('hidden');
    }
  };

let modifiedInsightfulFeedback = [];
  const updateTemplate = (e) => {
    const randomCard = pickCard();
    let modifiedInsightfulFeedback = insightfulFeedback.map((item) => {
      if (item.id.toString() === e.currentTarget.id.toString()) {
        const closestCard = e.target.previousElementSibling; 
        const closestCardName = e.target.nextElementSibling;
        const id = item.id
        item.card = randomCard.pic; 
        item.cardName = randomCard.name;
        closestCard.src = item.card;
        closestCardName.textContent = item.cardName;
        cardBackSelected.src = randomCard.pic;
        displaySelectedCardName.textContent = randomCard.name;
        displayModalQuestions(item);
      }

      return item
    })
    return modifiedInsightfulFeedback;
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
const displayModalQuestions = (item) => {
  const modalQuestion = document.querySelector("#question");
  modalQuestion.textContent = item.question;
}

const onCardClicked = (e) => {

  // const randomCard = pickCard();
  let modifiedInsightfulFeedback = insightfulFeedback.map((item) => {
    if (item.id.toString() === e.currentTarget.id.toString()) {
      // const closestCard = e.target.previousElementSibling; 
      // const closestCardName = e.target.nextElementSibling;
      // const id = item.id
      // item.card = randomCard.pic; 
      // item.cardName = randomCard.name;
      // closestCard.src = item.card;
      // closestCardName.textContent = item.cardName;


      e.target.classList.add('hidden'); // hide pick card button

      // document.querySelectorAll('.card__pick').textContent = "wybierz kartę";

      // document.querySelector('.card__back').src = item.card
      //tymczasowo wyświetla w modalu
      // cardBackSelected.src = randomCard.pic;
      // displaySelectedCardName.textContent = randomCard.name;

      document.querySelector('.card__pick-one').classList.add('hidden');
      // const question = document.querySelector("[data-question1]").textContent;
      // modalQuestion.textContent = item.question;
    }
    showModal(modal);
    //
    updateTemplate(e);
    return item;
  });
  // cardsList.innerHTML = modifiedInsightfulFeedback.map(cardTemplate).join('');
  console.log(insightfulFeedback);
  console.log(modifiedInsightfulFeedback);
  return modifiedInsightfulFeedback;
};


// MODAL
const modal = document.querySelector("#modal");

const showModal = (modal) => {
  modal.classList.remove("modal--hidden");

  const modalCloseButton = modal.querySelector("[data-button-close]");
  modalCloseButton.addEventListener("click", () => {
///// UPDATE TEMPLATE
    closeModal(modal);
  });
};

const closeModal = (modal) => {
  modal.classList.add("modal--hidden");
};

// Get random Photo from Array
let selectedCard;
const pickCard = () => {
  selectedCard = cards[Math.floor(Math.random() * cards.length)];
  return selectedCard;
};


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

// document.querySelectorAll(".card__pick").forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();

//     // const card = pickCard();
//     const modalQuestion = document.querySelector("#question");

//     if (button.classList.contains("card__pick-one")) {
//       document.querySelector(".card__pick-one").classList.add("hidden");
//       // document.querySelector(".card-one").src = card.pic;
//       // document.querySelector(".name-one").textContent = card.name;
//       document.querySelector(".card__lock").classList.add("hidden");
//       document.querySelector(".card__pick-two").classList.remove("hidden");
//       const question = document.querySelector("[data-question1]").textContent;
//       modalQuestion.textContent = question;
//       // cardOneArray.push(selectedCard)
//       // console.log(cardOneArray);
//       // document.querySelector(".card-one").src = card.pic;
//       console.log(modifiedInsightfulFeedback);
//       onCardClicked(e);
//     } else if (button.classList.contains("card__pick-two")) {
//       document.querySelector(".card__pick-two").classList.add("hidden");
//       document.querySelector(".card-two").src = card.pic;
//       document.querySelector(".name-two").textContent = card.name;
//       document.querySelector(".card__lock-three").classList.add("hidden");
//       document.querySelector(".card__pick-three").classList.remove("hidden");
//       document.querySelector(".card__pick-two").classList.add("active");
//       const question = document.querySelector("[data-question2]").textContent;
//       modalQuestion.textContent = question;
//     } else if (button.classList.contains("card__pick-three")) {
//       document.querySelector(".card__pick-three").classList.add("hidden");
//       document.querySelector(".card-three").src = card.pic;
//       document.querySelector(".name-three").textContent = card.name;
//       const question = document.querySelector("[data-question3]").textContent;
//       modalQuestion.textContent = question;
//     }
//   });
// });



/////////////
//  EVENT LISTENER FOR ALL BUTTONS
//
document.querySelectorAll('.cardContent__wrapper').forEach(container => {
  container.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('card__pick')) {
      onCardClicked(e);
      removeLockElement(e);
      console.log(insightfulFeedback);
      document.querySelectorAll('.card__pick').forEach(button => {
        button.textContent = "wybierz kartę";
      })
    }
  })
});


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
