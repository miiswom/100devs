//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")

.then(res => res.json())
.then(data => {
  document.getElementById('image').src = data.message;

  console.log(data.message);
})