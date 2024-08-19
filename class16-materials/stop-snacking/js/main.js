//Create a function that grabs the number of snacks from the input and tells you to stop that many times

let input = document.querySelector("input");

const getHelp = document.querySelector("#help");

getHelp.addEventListener("click", stopSnacking)

let stopWarning = document.querySelector("#stops")


function stopSnacking() {
  let snacksNum = Number(input.value);
  stopWarning.textContent = "";

  for(let i =1; i <= snacksNum; i++)
  stopWarning.textContent += " You need to stop snaking !"
}