/*
 *  Deck of Cards Example
 *  @author: Justin Dunham
 *  Create a new deck of cards 
 */

const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suits = ['S','H','D','C'];

const shuffle = () => Math.random() >= 0.5;

const cards = suits.reduce((accumulator, suit) => {
  return [
      ...accumulator,
        ...values.map(cardValue => `${cardValue}${suit}`)
  ];
}, []);

exports.cards = cards;
exports.shuffle = shuffle;
exports.shuffledCards = () => [...cards].sort(shuffle);
