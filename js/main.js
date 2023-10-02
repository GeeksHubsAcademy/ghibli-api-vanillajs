
const films = document.getElementById('films')

fetch('https://ghibliapi.vercel.app/films')
.then(result => result.json())
.then(result => {
  result.forEach(element => {
    const title = document.createElement('h1')
    const filmImage = document.createElement('img')
    
    filmImage.src = element.image

    filmImage.classList.add('image-film')

    title.innerText = element.title
    films.appendChild(title)
    films.appendChild(filmImage)
  });
})
.catch(error => console.log(error))
