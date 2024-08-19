
const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", getFetch);

// display at all time, globally
document.querySelector('h2').textContent = localStorage.getItem("books")

function getFetch() {
  
  const choice = document.querySelector("#user-input").value;


  fetch(`https://openlibrary.org/isbn/${choice}.json`)
  .then( res => res.json())
  .then( data => {
    console.log(data.title);
    // if localStorage is null:
    if(!localStorage.getItem('books')) {
      // initialize the books var inside local storage
      localStorage.setItem("books", data.title)
    } else {
      // store all the books inside a variable, the variable contains the currents books + what the user inputs
      let books = localStorage.getItem("books") + " ; " + data.title;
      // update the local storage setting up items to equal the new variable content
      localStorage.setItem("books", books);
    }
      // display the variable on the DOM
      document.querySelector('h2').textContent = localStorage.getItem("books")
  })
}

// 9780140328721
// 9781501110368