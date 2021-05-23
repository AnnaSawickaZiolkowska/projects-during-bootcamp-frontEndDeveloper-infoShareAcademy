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
    title: "Insightful Feedback - Process Layout",
    description:
      "Play this 3-card process layout chart to create clarity about your next step",
  },
  {
    id: "card2",
    question: "What is not working for me?",
    card: `./img/card-back.jpg`,
    cardName: "",
    title: "Insightful Feedback - Process Layout",
    description:
      "Play this 3-card process layout chart to create clarity about your next step",
  },
  {
    id: "card3",
    question: "What is my next step?",
    card: `./img/card-back.jpg`,
    cardName: "",
    title: "Insightful Feedback - Process Layout",
    description:
      "Play this 3-card process layout chart to create clarity about your next step",
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

const cardTemplate = insightfulFeedback
  .map((content) => {
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
  </li>`;
  })
  .join("");
cardsList.insertAdjacentHTML("afterbegin", cardTemplate);

// Hide lock element from first card
document.querySelector(".card__lock").classList.add("hidden");

const removeLockElement = (target, currentTarget) => {
  if (target.classList.contains("card__pick")) {
    currentTarget
      .querySelector(".card__layout")
      .removeChild(document.querySelector(".card__lock"));
    // target.closest("div div").removeChild(document.querySelector(".card__lock"));
    if (document.querySelector(".card__lock")) {
      document.querySelector(".card__lock").classList.add("hidden");
    }
  }
};

let currentTarget;
let modifiedInsightfulFeedback;

const onCardClicked = (e) => {
  const target = e.target;
  currentTarget = e.currentTarget;
  modifiedInsightfulFeedback = insightfulFeedback.map((item) => {
    if (item.id.toString() === e.currentTarget.id.toString()) {
      createSmallCircles(target);
      updateTemplate(e, item);
      showModal(modal);
      removeLockElement(target, currentTarget);
      displayModalQuestions(item);
      modalDisplayCard(item);
    }
    currentTarget.querySelector(".card__pick").classList.add("hidden"); // hide pick card button
    return item;
  });

  return modifiedInsightfulFeedback;
};

const updateTemplate = (e, item) => {
  const randomCard = pickCard();
  const closestCard = e.currentTarget.querySelector("#card__back");
  const closestCardName = e.currentTarget.querySelector(".displayCardName");
  item.card = randomCard.pic;
  item.cardName = randomCard.name;
  closestCard.src = item.card;
  closestCardName.textContent = item.cardName;
  return item;
};

const onModalCardChange = () => {
  modifiedInsightfulFeedback = insightfulFeedback.map((item) => {
    const randomCard = pickCard();
          item.card = randomCard.pic;
          item.cardName = randomCard.name;
          currentTarget.querySelector("#card__back").src = item.card;
          currentTarget.querySelector(".displayCardName").textContent = item.cardName;
        modalDisplayCard(item);
        })
}

 
document.querySelector(".btn__changeCard").addEventListener("click", () => {
  onModalCardChange();
});

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

const displayModalQuestions = (item) => {
  const modalQuestion = document.querySelector("#question");
  modalQuestion.textContent = item.question;
};

const modalDisplayCard = (item) => {
  cardBackSelected.src = item.card;
  displaySelectedCardName.textContent = item.cardName;
};

// Get random Photo from Array
let selectedCard;
let selectedCardArray = [];

const pickCard = () => {
  selectedCard = cards[Math.floor(Math.random() * cards.length)];
  // selectedCardArray.forEach(card => {
  // if (selectedCard === card){
  //   return pickCard();
  // }else {
  //   selectedCardArray.push(selectedCard)
  // }
  // })
  // insightfulFeedback.forEach(card => {
  //   if (selectedCard.pic === card.card){
  //     return pickCard();
  //   }else {
  //       selectedCardArray.push(selectedCard)
  //     }
  // })
  // console.log(selectedCardArray);
  return selectedCard;
};



/////////////
//  EVENT LISTENER FOR ALL BUTTONS
//
document.querySelectorAll(".cardContent__wrapper").forEach((container) => {
  container.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("card__pick")) {
      onCardClicked(e);
      document.querySelectorAll(".card__pick").forEach((button) => {
        button.textContent = "wybierz kartę";
      });
    }
  });
});

// CHANGE CARD
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

// ANIMACJA DO PRZYCISKU WYBIERZ KARTĘ

function createSmallCircles(target) {
  let circlesCount = 20;

  do {
    smallCircle(target);
    circlesCount--;
  } while (Boolean(circlesCount));
}

function smallCircle(target) {
  const buttonX = target.style.left;
  const buttonY = target.style.top;
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  particle.classList.add("small");

  const size = Math.floor(Math.random() * 15 + 5);
  const destinationX = Number(buttonX) + (Math.random() - 0.5) * 2 * 250;
  const destinationY = Number(buttonY) + (Math.random() - 0.5) * 2 * 250;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.background = `hsl(${Math.random() * 280 + 340}, 70%, 60%)`;

  const animation = particle.animate(
    [
      {
        transform: `translate(${buttonX - size / 2}px, ${
          buttonY - size / 2
        }px)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.random() * 1000,
      easing: "cubic-bezier(0, 0.9, 0.57, 1)",
      delay: 200 + Math.random() * 300,
    }
  );

  animation.onfinish = function () {
    particle.remove();
  };
}
