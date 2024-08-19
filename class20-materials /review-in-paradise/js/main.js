// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let myFavouriteFood = 'something';
myFavouriteFood = "litchi";
// alert(myFavouriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "twitch";
alert(str[1]);
//alert(charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideThenMultiply (x, y , z) {
  let result;
  result = (x / y) * z ;
  alert(result)
};

divideThenMultiply(12, 3, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRootIt(x) {
  console.log(Math.cbrt(x).toFixed(4))
};

cubeRootIt(9);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonths(month) {
  let monthLowCase = month.toLowerCase()
  if(
    monthLowCase === "june" || 
    monthLowCase === "july" || 
    monthLowCase === "august" || 
    monthLowCase === "september") {
      alert("YAY")
  } else if (
    monthLowCase === "october" || 
    monthLowCase === "november" || 
    monthLowCase === "december" || 
    monthLowCase === "january" || 
    monthLowCase === "february" || 
    monthLowCase === "march" || 
    monthLowCase === "april" || 
    monthLowCase === "may") {
      alert("Booo")
  } else {
    alert('Write a month')
  }
};

summerMonths('June');


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipMultipleByFive(num) {
  for(let i=1; i < num ; i++) {
    if (i % 5 !== 0) {
      console.log(i)
    }
  }
}

skipMultipleByFive(10);