const movies = [
    {
        title: 'The Godfather',
        genre: 'Drama',
        year: 1972,
        score: 5,
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
        title: 'Matrix',
        genre: 'Acción',
        year: 1999,
        score: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYdux2tvvmVpDGhdMwaUNNxWG8-cQ6LTeAA&s'
    },
    {
        title: 'The Dark Knight',
        genre: 'Acción',
        year: 2023,
        score: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvyijfsP4F8o9bqAZc6bxCdbAYeKc582P1A&s'
    },
];

pintarPeliculas(movies)

// Obtener el formulario de carga de películas desde el DOM
const moviesForm = document.getElementById("moviesForm");


// Necesito escuchar cuando el usuario envíe el formulario
moviesForm.addEventListener("submit", function(evento) {
    // Evitar que el formulario se envíe
    evento.preventDefault();
    
    const el = evento.target.elements;
    // En base a los datos ingresados por el usuario, crear un objeto de película

    const pelicula = {
        title: el.title.value,
        genre: el.genre.value,
        score: el.score.value,
        date: el.date.value.slice(0, 4),
        image: el.image.value
    }

    console.log(pelicula)
    // const titulo = evento.target.elements.title.value;

    // Agregar la película al array de películas
    movies.push(pelicula)

    pintarPeliculas(movies)
})

// crear una funcion que reciba un array, lo recorra y rellene una <tr></tr> por cada pelicula

function pintarPeliculas(arrayPeliculas) {

    const tbody = document.querySelector("tbody")

    //Vaciar el tbody
    tbody.innerHTML = ""

    arrayPeliculas.forEach(peli => {

        tbody.innerHTML += `<tr>
                            <td class="image-cell">
                                <img src="${peli.image}" alt="${peli.title} image">
                            </td>
                            <td class="name-cell">
                                <div class="name">
                                    ${peli.title}
                                </div>
                            </td>
                            <td class="genre-cell">
                                <div class="genre">
                                    ${peli.genre}
                                </div>
                            </td>
                            <td class="score-cell">
                                <div class="score">
                                    ${peli.score}
                                </div>
                            </td>
                            <td class="date-cell">
                                <div class="date">
                                    ${peli.date}
                                </div>
                            </td>
                            <td class="actions-cell">

                                <div class="actions">

                                    <button class="btn btn-primary">
                                        <i class="fa-solid fa-pencil"></i>
                                    </button>
                                    <button class="btn btn-danger">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                    
                                </div>
                            </td>
                        </tr>`
    })
}

function filtrarPeliculas() {
    const search = "nombre de peli"

}









// pelicula = {
//     title: 'The Godfather',
//     genre: 'Drama',
//     year: 1972,
//     score: 5,
//     url: 'https://www.imdb.com/title/tt0068646/'
// }
