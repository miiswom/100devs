// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const str = "Am I a sentence ?";

//alert( str.trimEnd().endsWith('?') );

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let developer = "I am looking for jr. dev positions."

let software = developer.replaceAll("jr. dev", "software engineer");

console.log(software);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let num = Math.random();

  if(num <= 0.33) {
    return 'rock';
  } else if(num <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function game() {
  let bot = rockPaperScissors();
  let player = rockPaperScissors();

  if(bot == player) {
    console.log('You tied');
  } else if (
    (player == 'scissors' && bot == 'paper') 
    || (player == 'rock' && bot == 'scissors') 
    || (player == 'paper' && bot == 'rock')) {
      console.log('You win');
  } else if( 
    (bot == 'scissors' && player == 'paper') 
    || (bot == 'rock' && player == 'scissors') 
    || (bot == 'paper' && player == 'rock')) {
      console.log('You loose');
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function choices(array) {
  for(let i = 0; i < array.length; i++) {
    game();
  }
}

choices(['rock', 'paper', 'scissors'])