// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let aStr = "winter";

console.log(aStr.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let anotherVar = "a string";

//alert(anotherVar.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function takeFive(a, b, c, d, e) {
  let abso = 100 - a - b - c - d - e;
  return Math.abs(abso)
}

console.log(takeFive(10 , 20, 30, 40, 50));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function minAndMax(a, b, c) {
  let arr = [a, b, c]
  let mini = Math.min(...arr);
  let maxi = Math.max(...arr);

  console.log(mini, maxi)
}

minAndMax(1,100, 7)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails() {
  let result = Math.random();

  if(result > .5) {
    return 'heads';
  } else {
    return 'tails';
  }
}

// headsOrTails();
// headsOrTails();
// headsOrTails();
// headsOrTails();
// headsOrTails();
// headsOrTails();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flip( num ) {
  for(let i=1; i <= num; i++) {
    let result = headsOrTails();
    console.log(result)
  }
}


flip(1);