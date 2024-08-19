//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

const pokemons = ["a", "b", "c", "d"];

function reverseOrder(arr) {
  return arr.reverse()
}

console.log(reverseOrder(pokemons))

//Given two integer arrays a, b, 
//both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const arr1 = [2, 2, 2];
const arr2 = [2, 2, 2];

function isSumSquaresGreaterThanSumCubes(arrA, arrB) {
  const concatanedArr = arrA.concat(arrB).flat();
  
  const squareSum = concatanedArr.reduce((acc, num) => acc + num**2, 0)
  const cubeSum = concatanedArr.reduce((acc, num) => acc + num**3, 0)

  return squareSum > cubeSum 
}

console.log(isSumSquaresGreaterThanSumCubes(arr1, arr2))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultipleOfOwnIndex(arr) {
  const multiplesOfOwnIndex = arr.filter((num, index) => num % index === 0);

  return multiplesOfOwnIndex
}

console.log(isMultipleOfOwnIndex([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumAllNums(arr) {
  return arr.reduce((acc, num) => +acc + +num, 0)
}

console.log(sumAllNums([1, "2"]) )