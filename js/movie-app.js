const movies = [];

// Obtener el formulario de carga de películas desde el DOM
const moviesForm = document.getElementById("moviesForm");


// Necesito escuchar cuando el usuario envíe el formulario
moviesForm.addEventListener("submit", function(evento) {
    
    evento.preventDefault();
    
    const el = evento.target.elements;
    // En base a los datos ingresados por el usuario, crear un objeto de película

    const pelicula = {
        title: el.title.value,
        genre: el.genre.value,
        score: el.score.value,
        date: el.date.value,
        image: el.image.value,
    }

    console.log(pelicula)
    // const titulo = evento.target.elements.title.value;

})

// Agregar la película al array de películas











// pelicula = {
//     title: 'The Godfather',
//     genre: 'Drama',
//     year: 1972,
//     score: 5,
//     url: 'https://www.imdb.com/title/tt0068646/'
// }
