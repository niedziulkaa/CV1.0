// const cards = document.querySelectorAll('.memory-card');
// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add('flip');

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   secondCard = this;
//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);

//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove('flip');
//     secondCard.classList.remove('flip');

//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//   cards.forEach(card => {
//     let randomPos = Math.floor(Math.random() * 10);
//     console.log(randomPos);
//     card.style.order = randomPos;
//   });
// })();
// //robić random ale z tablicy od [1 do 10]
// // arr.random["1","2","3","4","5","6","7","8","9","10"];
// //   // int value = arr.random;
// //   //   card.style.order = value;
// //   //   arr.remove(value);



// cards.forEach(card => card.addEventListener('click', flipCard));



const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function generateUniqueRandomNumbers(length) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    uniqueNumbers.add(Math.floor(Math.random() * length) + 1);
  }
  return Array.from(uniqueNumbers);
}

const arr = generateUniqueRandomNumbers(12);

(function shuffle() {
  cards.forEach((card, index) => {
    card.style.order = arr[index];
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
