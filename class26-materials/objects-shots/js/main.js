//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')

// .then(res => res.json())
// .then(data => {
//   console.log(data);})

const name = document.querySelector("h2");
const image = document.querySelector("img");
const instructions = document.querySelector("h3");
const drink = document.querySelector('input').value;

  // const randomCocktail = document.querySelector("#getRandomCocktail");

const button = document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  
  

  .then(res => res.json())
  .then(data => {
    console.log(data.drinks[0].strDrink)
    console.log(data.drinks)

    image.src = data.drinks[0].strDrinkThumb;
    name.textContent = data.drinks[0].strDrink;
    instructions.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque, quidem consectetur ratione nesciunt molestiae dolorem totam dolor animi facilis nobis sint consequuntur eos? Amet doloremque quis libero at sint."
  })
}

  // randomCocktail.addEventListener('click', () => {
  //   let random = Math.floor( Math.random( ) * 58 )

  //   image.src = data.drinks[random].strDrinkThumb;
  //   name.textContent = data.drinks[random].strDrink;
  //   instructions.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque, quidem consectetur ratione nesciunt molestiae dolorem totam dolor animi facilis nobis sint consequuntur eos? Amet doloremque quis libero at sint."

  //   console.log(random)
  // })