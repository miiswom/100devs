//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const shows = ["PLL", "Gossip Girls", "You"];

shows.forEach( (e) => console.log(e))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const nums = [2, 3, 1, 5, 4];

const evens = nums.filter( (e) => e % 2 === 0)

console.log(evens)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowestAndHighest( arr ) {
  let sorted = arr.sort( (a,b) => a - b);

  // let secondLowest = sorted.slice(1,2);
  // let secondHighest = sorted.slice(-2, -1);

  return sorted[1] + sorted[sorted.length - 2]
}

console.log(secondLowestAndHighest(nums));