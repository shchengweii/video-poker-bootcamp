// ===================================================
// ============ Helper Functions =====================
// ===================================================

// ##############################################
// callback functions for eventListeners ########
// ##############################################

/**
 * A function that allows player to deal the card
 * @param  {Array} deck array of cards
 * @return {Array} create 5 cards and store inside playerHand array
 */
// function to deal the cards
const dealCards = (deck) => {
  gameInfo.innerText = `Choose the cards you want to hold! Credits:${playerPoints} `;
  // document.getElementById('bet-one').remove();

  if (canDeal === true) {
    // test if the dealButton works
    cardContainer.innerText = '';
    // draw 5 cards from the shuffled deck and store in playerHand array
    for (let i = 0; i < 5; i += 1) {
      playerHand.push(cardDeck.pop());
    }
    console.log(playerHand);

    // loop through playerHand array to display the cards
    for (let j = 0; j < playerHand.length; j += 1) {
      cardElement = createCard(playerHand[j]);
      console.log(cardElement);
      // console.log('test-test');
      cardContainer.appendChild(cardElement);
    }
    // player not allow to deal
    canDeal = false;
  }
};

// ###########################
// container DOM elements ####
// ###########################

// gameContainer element
const gameContainer = document.getElementById('main-container');
// gameInfo element
const gameInfo = document.getElementById('game-info');
gameInfo.innerHTML = 'Welcome! Click to deal your cards.';
// cardContainer element
const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = 'cards-to-be-displayed-here';
// buttons element
const btnContainer = document.getElementById('buttonAndBet-container');
btnContainer.innerHTML = 'btns-here';

// ###########################
// buttons DOM elements #####
// ###########################

// create bet button for player to place bet
const betOneButton = document.createElement('button');
betOneButton.classList.add('bet-one');
betOneButton.innerText = 'BET ONE';
btnContainer.appendChild(betOneButton);
// betOneButton.addEventListener('click', placeBets);

// create player place bet button
const betMaxButton = document.createElement('button');
betMaxButton.classList.add('bet-max');
betMaxButton.innerText = 'BET MAX';
btnContainer.appendChild(betMaxButton);
// betMaxButton.addEventListener('click', placeBets);

// create a holdButton for player to keep some of the cards
const holdButton = document.createElement('button');
holdButton.classList.add('hold-button');
holdButton.innerText = 'Hold';
btnContainer.appendChild(holdButton);
// holdButton.addEventListener('click', holdCards);

// create a resetButton for player to reset the game
const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.innerText = 'Reset';
btnContainer.appendChild(resetButton);
// resetButton.addEventListener('click', resetGame);

// create a dealButton for player to deal the cards
const dealBtn = document.createElement('button');
dealBtn.classList.add('deal-button');
dealBtn.innerText = 'Deal';
btnContainer.appendChild(dealBtn);
dealBtn.addEventListener('click', dealCards);

// ###########################
// helper functions ##########
// ###########################

// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);



// create makeDeck and shuffleDeck functions
/**
 * A function that shuffles a deck of cards
 * @param {Objects} cards
 * @return {Objects} shuffled deck of cards
 */
// Shuffle an array of cards
const shuffleCards = (cards) => {
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    const randomIndex = getRandomIndex(cards.length);
    const randomCard = cards[randomIndex];
    const currentCard = cards[currentIndex];
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  return cards;
};

const displayFrontCard = (name, suit) => `./images/cards/PNG-cards/${name}_of_${suit}.png`;


/**
 * A function that makes the deck of cards
 * @return {Objects}  deck of cards
 */
// makeDeck function
const makeDeck = () => {
  const newDeck = [];
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const suitSymbols = ['♥', '♦️', '♣', '♠'];
  const suitColours = ['red', 'red', 'black', 'black'];

  // Loop over the suits
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    const currentSuitSymbol = suitSymbols[suitIndex];
    const currentColour = suitColours[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = `${rankCounter}`;
      let displayName = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === '1') {
        cardName = 'ace';
        displayName = 'A';
      } else if (cardName === '11') {
        cardName = 'jack';
        displayName = 'J';
      } else if (cardName === '12') {
        cardName = 'queen';
        displayName = 'Q';
      } else if (cardName === '13') {
        cardName = 'king';
        displayName = 'K';
      }

      // Create a new card with the current name
      // suit, and rank, colour, displayName, and suitSymbol
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        colour: currentColour,
        displayName,
        suitSymbol: currentSuitSymbol,
        // cardPath:displayFrontCard(cardName, currentSuit),
      };

      // Add the new card to the deck
      newDeck.push(card);
    }
  }
  // Return the completed card deck
  // console.log(newDeck);
  return newDeck;
};

/**
 * A function that creates the card elements
 * @param {Object}
 * @returns {Object} card
 */
// function to create cards
const createCard = (cardInfo) => {
  const suit = document.createElement('div');
  suit.classList.add(cardInfo.suit, cardInfo.colour);
  suit.innerText = cardInfo.suitSymbol;
 
  const name = document.createElement('div');
  name.classList.add(cardInfo.displayName, cardInfo.colour);
  name.innerText = cardInfo.displayName;
  console.log(name.innerText);

  const card = document.createElement('div');
  card.classList.add('card', 'whiteBackground');
  // card.innerHTML = `<img src="${card.cardPath}"/>`;

  card.appendChild(name);
  card.appendChild(suit);

  return card;
};


