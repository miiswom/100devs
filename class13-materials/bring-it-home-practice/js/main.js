// *Variables*
// Create a variable and console log the value
let age = 40;
console.log(age);

// Create a variable, add 10 to it, and alert the value
let num = 60;

num += 10;
alert(num);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substactsFourNumbers(a,b,c,d) {
  alert(a-b-c-d);
}

substactsFourNumbers(99,8,7,5);

// Create a function that divides one number by another and returns the remainder
function dividesTwoNumReturnsRemainder(a,b) {
  return a % b;
}

dividesTwoNumReturnsRemainder(10, 5);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoNumAndCheck(a,b) {
  if(a+b > 50) {
    alert("Jumanji");
  }
}

addsTwoNumAndCheck(50, 70);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multipliesThreeNumAndCheck(a,b,c) {
  let product = a*b*c
  if(product % 3 === 0) {
    alert("ZEBRA");
  }
}

multipliesThreeNumAndCheck(3,3,3);