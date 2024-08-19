//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const numArr = [10, 20, 30, 50];

const sum = numArr.reduce((acc, e) => acc + e, 0);

console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareNum(arr) {
  return arr.map((e) => e * e);
}

console.log(squareNum(numArr));

//Create a function that takes string
//Print the reverse of that string to the console
const strEx = "loving you"

function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr(strEx))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrom(str) {
  let reversedStr = reverseStr(str);

  if(reversedStr == str) {
    return 'Palindrom alert!'
  } else {
    return 'No palindrome here.'
  }
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('love'));