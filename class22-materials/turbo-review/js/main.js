// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "tea";
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "I love tea.";
console.log(multipleWords.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let num = Math.random();

  if(num < 0.3) {
    return 'rock';
  } else if(num > 0.3 && num < 0.6) {
    return 'paper';
  } else {
    return 'scissors'
  }
};

// console.log(rockPaperScissors())
// console.log(rockPaperScissors())
// console.log(rockPaperScissors())
// console.log(rockPaperScissors())
// console.log(rockPaperScissors())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock[4] paper[5] scissors[8] against a bot using the above function
function game(you) {
  let laptop = rockPaperScissors();
  you = rockPaperScissors();
  console.log(`${you} : ${you.length}`);
  console.log(`${laptop} : ${laptop.length}`)
  if(you === laptop) {
    console.log('tie\n ---')
  }
  // rock[4] beats scissors[8]  | length == 4 && length == 8 
  else if ( you === 'rock' && laptop === 'scissors'  ){
    console.log('rock beats scissors\n ---');
  // paper[5] beats rock[4] | length == 5 && length == 4 { length == 5 wins 4 }
  } else if(you === 'paper' && laptop === 'rock') {
    console.log('paper beats rock\n ---');
  // scissors[8] beats paper[5] | length == 8 && length == 5 { length == 8 wins 5} 
  } else if(you === 'scissors' && laptop === 'paper') {
    console.log('scissors beats paper\n ---')
  }
}


// pb between rock[4] and paper[5]
game('rock');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const choices = ["rock", "paper", "scissors"];

function anotherGame(arr) {
  arr.forEach( (e) => game())
}

anotherGame(choices);
