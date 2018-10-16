'use strict';

let isThereFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

const memoryCards = document.querySelectorAll('.memory-card');

function flip() {

  if (lockBoard) return;
  if (this == firstCard) return;
  this.classList.add('flip');

  if (!isThereFlipped) {
    isThereFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isItaMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isItaMatch ? disableCards() : unflip();
}

function disableCards() {
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  resetBoard();
}

function unflip() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 500);
}

function resetBoard() {
  [isThereFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  memoryCards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

memoryCards.forEach(card => card.addEventListener('click', flip));
