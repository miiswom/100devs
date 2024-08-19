//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(a, b) {
  alert(a-b);
}

//create a function that divides three numbers and console logs the quotient
function quotient(a, b, c) {
  console.log(a / b / c);
}

//create a function that multiplys three numbers and returns the product
function product(a, b, c) {
 return a * b * c;
}

function turnIntoMoney() {
  let productVar = product(5, 10, 2);
  alert("£" + productVar);
}

// turnIntoMoney();

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(a, b, c) {
  return (a + b) % c;
}

console.log(remainder(3, 3, 2));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hundredChecker(a, b, c, d)  {
  let sum = a * b;

  if (sum > 100) {
    sum += (c + d);
  } else if (sum < 100) {
    sum -= (c-d);
    console.log(sum);
  } else if(sum === 100) {
    let multiply = a * b * c;
    console.log(multiply % 4); 
  }
}