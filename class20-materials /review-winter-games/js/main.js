//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function onlyEvenNums(arr) {
  let newArr = [];

  // for(let i=0; i < arr.length; i++) {

  //   if(arr[i] % 2 == 0) {
  //     newArr.push(arr[i]);
  //   }
  //}
  arr.forEach( (num) => {
   if (num % 2 === 0) {
   newArr.push(num);
  }
  })
 
  return newArr;
}
const anArr = [2, 4, 5, 7, 8, 25, 1];


console.log(onlyEvenNums(anArr))