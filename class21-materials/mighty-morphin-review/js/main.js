// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let aVar;
aVar = "WINTER";
console.log(aVar);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let anotherVar = "summer";
console.log(anotherVar.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function minusFiveAndAbs(a, b, c, d, e) {
  let difference = 100 - a - b - c - d - e;

  console.log(Math.abs(difference));
}

minusFiveAndAbs(27, 83, 42, 1, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function highAndLow(a, b , c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a ,b ,c);
  console.log(`The lowest num is ${min} and the highest num is ${max}`)
}

highAndLow(100, 50, 25)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsOrTails() {
//   let result = Math.random();
//   result < .5 ? 'heads' : 'tails'
//   if(result < .5) {
//     return 'heads';
//   } else {
//     return 'tails'
//   }
// }

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'

// console.log(headsOrTails());
// console.log(headsOrTails());
// console.log(headsOrTails());
// console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flip(num) {
  for(let i = 0; i <  num; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}

flip(10);