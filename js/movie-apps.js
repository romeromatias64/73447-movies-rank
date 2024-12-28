const movies = []

// Obtener el formulario de carga de peliculas desde el DOM
const moviesForm = document.getElementById("moviesForm")

// Necesito escuchar cuando el usuario envie el formulario
moviesForm.addEventListener("submit", function(evento) {
    
    evento.preventDefault()
    
    const el = evento.target.elements

    // En base a lo ingresado por el usuario, crear un objeto de pelicula
    const pelicula = {
        title: el.title.value,
        genre: el.genre.value,
        year: el.date.value,
        score: el.score.value,
        image: el.image.value
    }

    console.log(pelicula)
})

// Agregar la pelicula al array de peliculas






// pelicula = {
//     title: "The Godfather",
//     genre: "Drama",
//     year: "1972",
//     score: 5,
//     url: 'https://www.imdb.com/title/tt0068646/'
// }