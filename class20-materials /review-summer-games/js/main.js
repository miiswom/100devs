//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const anArr = [10, 2, 3]

function multiplyNums(arr) {
  let prod = 1;

  // for(let i=0; i < arr.length; i++) {
  //   prod += arr[i];
  // }
  arr.forEach( (num) => {
  prod *= num;
  })
  return prod; 
}

console.log(multiplyNums(anArr))