// blackjack.js

let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo;

if (sum === 21) {
  console.log('Blackjack! You win!');
} else {
  let cardThree = 7; 
  sum += cardThree;
  
  if (sum > 21) {
    console.log('Bust! You lost.');
  } else {
    console.log(`You have ${sum} points`);
  }
}
//

let dealerCards = [];
let dealerSum = 0;


while (dealerSum < 17) {
  let nextCard = dealerCards.length === 0 ? 7 :
                 dealerCards.length === 1 ? 5 :
                 dealerCards.length === 2 ? 6 : 4;
  dealerCards.push(nextCard);
  dealerSum += nextCard;
}

if (dealerSum > 21) {
  console.log('Dealer busts! You win.');
} else {
  console.log(`Dealer has ${dealerSum} points`);
  
  if (sum > 21) {
    console.log('You lost.');
  } else if (sum > dealerSum) {
    console.log('You win!');
  } else if (sum < dealerSum) {
    console.log('Dealer wins.');
  } else {
    console.log('Draw.');
  }
}