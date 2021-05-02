const cards = [
  { name: "Intuicja", pic: "./img/intuicja.jpeg"},
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


const cardContainer = document.querySelector('.cardContainer');
const cardBack = document.querySelector('#card__back');
const cardBackSelected = document.querySelector('#modal-selectedCard')
const cardFront = document.querySelector('.card__front');
const displayCardName = document.querySelector('.displayCardName');
const displaySelectedCardName = document.querySelector('.displayCardName-selected')
const pickCardButton = document.querySelector('.card__pick');


// MODAL
const modal = document.querySelector('#modal');

const showModal = modal => {
  modal.classList.remove("modal--hidden");

  const modalCloseButton = modal.querySelector('[data-button-close]');
  modalCloseButton.addEventListener('click', () => {
  closeModal(modal)
  });
}

const closeModal = modal => {
  modal.classList.add("modal--hidden");
};


// Get random Photo from Array
let selectedCard;

const pickCard = () => {
  selectedCard = cards[Math.floor(Math.random() * cards.length)];
  cardBackSelected.src = selectedCard.pic;
  displaySelectedCardName.textContent = selectedCard.name;
  cardBack.removeEventListener('click', pickCard);
  showModal(modal);
  cardBack.src = selectedCard.pic;
  displayCardName.textContent = selectedCard.name;
  pickCardButton.classList.add('hidden');
};


// document.querySelectorAll('.card__pick').forEach(cardBack => {
//   cardBack.addEventListener('click', pickCard);
// });

document.querySelectorAll('.card__pick').forEach(cardBack => {
  cardBack.addEventListener('click', (e) =>{
    e.preventDefault();
    const nextCard = cardBack.dataset.reverse;
    const card = document.getElementById(nextCard);
    pickCard(card);

  });  
});

// document.querySelectorAll('.card__back').forEach(cardBack => {
//   cardBack.addEventListener('click', () =>{
//     const nextCard = cardBack.dataset.reverse;
//     console.log(nextCard);
//     const card = document.getElementById(nextCard);
//     pickCard(card);

//   });  
// });


// test.addEventListener("mouseover", function( event ) {