//Create an array of movie titles. Loop through the array and each element to the h2.

const arrayTitles = ['Cinderella', 'Opera', 'Reason', 'Something'];

const mainTitle = document.getElementById('mainTitle');

for(let i = 0; i < arrayTitles.length; i++) {
  mainTitle.textContent += arrayTitles[i] ;
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

const nums = [10, 20, 30];

nums.forEach( (e, i, a) => {
  nums[i] = e + 3;
} )

console.log(nums)
//Find the average of all the numbers from question three

let sumOfNums = 0;



// nums.forEach( (el, i, a) => {
//   sumOfNums += el;
// } )

let average = sumOfNums / nums.length

console.log(`The average is ${average}`)