
//cimport { CallingCard } from './CallingCard.js';
const CallingCard = require('./CallingCard.js');

let card1 = new CallingCard(10); // card1 costs 10 cents / minute to use

let card2 = new CallingCard(15); // card2 costs 15 cents / minute to use

let card = new CallingCard(20); // this card costs 20 cents / minute to use

card.addDollars(100);           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added

console.log(card.getRemainingMinutes());   // returns 5  (5 minutes left)

card.useMinutes(3);
card.getRemainingMinutes();   // return 2

card.useMinutes(1);
card.getRemainingMinutes();   // returns 1