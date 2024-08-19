//Write your pseduo code first! 

// get celcius value
const celcius = document.getElementById("celcius");
const fareinheit = document.getElementById("fareinheit");
const convert = document.getElementById("convert");

// calculate to get conversion

function celciusToFareinheit() {
  return fareinheit.textContent = celcius.value * 9/5 + 32;
}

// input value on screen

convert.addEventListener("click", celciusToFareinheit)