let input = document.querySelector("input").value;

let para = document.querySelector("p");
const checking = document.querySelector("h1");

checking.addEventListener("click", ageChecker)
//Create a conditonal that checks their age
input = 25;

function ageChecker() {

//If under 16, tell them they can not drive
  if(Number(input) < 16) {
    para.textContent = "You cannot drive."
  } 
//If under 18, tell them they can't hate from outside the club, because they can't even get in
  else if (Number(input) < 18) {
  para.textContent = "You can't hate from outside the club, because you can't even get in"
}
//If under 21, tell them they can not drink
  else if (Number(input) < 21) {
    para.textContent = "You cannot drink."
  }
//If under 25, tell them they can not rent cars affordably
  else if (Number(input) < 25) {
    para.textContent = "You cannot rent cars affordably."
  }
//If under 30, tell them they can not rent fancy cars affordably
  else if (Number(input) < 30) {
    para.textContent = "You cannot rent fancy cars affordably."
  }
//If under over 30, tell them there is nothing left to look forward too
  else if (Number(input) > 30) {
    para.textContent = "You cannot drink."
  }
};
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
