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
const cardLayout = document.querySelector('.card__layout');

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

const pickCard = () => {
  selectedCard = cards[Math.floor(Math.random() * cards.length)];
  cardBackSelected.src = selectedCard.pic;
  displaySelectedCardName.textContent = selectedCard.name;
  cardBack.removeEventListener("click", pickCard);
  pickCardButton.classList.add("hidden");
  showModal(modal);
  // cardBack.src = selectedCard.pic;
  // displayCardName.textContent = selectedCard.name;
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

document.querySelectorAll(".card__pick").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    pickCard();
    console.log(button);
    console.log(e.target);
    const card = pickCard();
      if (e.target.classList.contains("card__pick-one")){
        document.querySelector(".card__pick-one").classList.add('hidden');
        document.querySelector('.card-one').src = card.pic;
        document.querySelector('.name-one').textContent = card.name;
        document.querySelector('.card__lock').classList.add('hidden')
        document.querySelector('.card__pick-two').classList.remove('hidden')
      }

      else if (button.classList.contains("card__pick-two")){
        document.querySelector(".card__pick-two").classList.add('hidden');
        document.querySelector('.card-two').src = card.pic;
        document.querySelector('.name-two').textContent = card.name;
        document.querySelector('.card__lock-three').classList.add('hidden');
        document.querySelector('.card__pick-three').classList.remove('hidden');
        document.querySelector(".card__pick-two").classList.add('active');
      }
      else if (button.classList.contains("card__pick-three")){
        document.querySelector(".card__pick-three").classList.add('hidden');
        document.querySelector('.card-three').src = card.pic;
        document.querySelector('.name-three').textContent = card.name;
      }
  });
});

// document.querySelector(".card__pick-one").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   // if (e.target.classList == "card__pick-one"){
//   // const card = e.target.closest('.card__back') ;
//   // const cardName = e.target.closest('.displayCardName');
//   // pickCard(card, cardName);
//   let card1 = pickCard();
//   cardBack.src = card1.pic;

//   // }
// });
// document.querySelector(".card__pick-two").addEventListener("click", (e) => {
//   e.preventDefault();
//   let card2 = pickCard();
//   cardBack.src = card2.pic;
// });
// document.querySelector(".card__pick-three").addEventListener("click", (e) => {
//   e.preventDefault();
//   pickCard();
// });

// document.querySelector('.card__pick-one').forEach(cardBack => {
//   cardBack.addEventListener('click', (e) =>{
//     e.preventDefault();
//     pickCard();
//     })
// });

// document.querySelectorAll('.card__back').forEach(cardBack => {
//   cardBack.addEventListener('click', () =>{
//     const nextCard = cardBack.dataset.reverse;
//     console.log(nextCard);
//     const card = document.getElementById(nextCard);
//     pickCard(card);

//   });
// });

// test.addEventListener("mouseover", function( event ) {

document.querySelectorAll('.card__back').forEach(card =>{
card.addEventListener('mouseover', () =>{
  if (card.hasAttribute('.active')){
    console.log('działa');
  }
})
})