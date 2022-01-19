// alert("hello")

// create a initGame functions
const initGame = () => {
  console.log('game started');

  cardDeck = shuffleCards(makeDeck());
  console.log(cardDeck);

  // initial player credits
  // playerPoints = calcHandScore(playerHand);
  // console.log(`player points: ${playerPoints}`);
  // calculate total scores for playerHands
};

// initiate the gamePlay
initGame();
