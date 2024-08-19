//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
const subclassesUl = document.querySelector("#subclasses-ul")

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data.subclasses)
        data.subclasses.forEach((e) => 
            {
                const subclass = document.createElement('li');
                subclass.textContent = e.name
                subclassesUl.appendChild(subclass)
            }) 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// extra: how to remove elements from the dom


