// *Variables*
// Declare a variable, assign it a value, and alert the value
let age = "20";
alert(age);

// Create a variable, divide it by 10, and console log the value
let num = 100;
num /= 10;
console.log(num);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multipliesThreeNumAndAlert(a,b,c) {
  alert(a*b*c)
}

multipliesThreeNumAndAlert(4,5,6);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoAndSubstractTwo(a,b,c,d) {
  console.log(a+b, c-d);
}

addTwoAndSubstractTwo(4,5,6,5);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winnerOrNot(a,b,c) {
  if(((100+a-b) / c) > 25) {
    console.log("WE HAVE A WINNER");
  } else {
    console.log("LOOSER")
  }
};

winnerOrNot(100, 45, 1);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function whichDayIsIt(day) {
  day = day.toLowerCase();
  if(day === "saturday" || day === "sunday") {
    alert("weekend")
  } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    alert("week day")
  } else {
    alert("Try again!")
  }
}

whichDayIsIt("Tuesay");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function anotherLoop(a) {
  for(let i=1; i <= a; i++) {
    if(i % 3 === 0) {
      console.log(i);
    }
  }
}

anotherLoop(30);