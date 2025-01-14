const movies = [
    {
        id:1000,
        title: 'The Godfather',
        genre: 'Drama',
        year: 1972,
        score: 5,
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id:1001,
        title: 'Matrix',
        genre: 'Acción',
        year: 1999,
        score: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYdux2tvvmVpDGhdMwaUNNxWG8-cQ6LTeAA&s'
    },
    {
        id:1002,
        title: 'The Dark Knight',
        genre: 'Acción',
        year: 2023,
        score: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvyijfsP4F8o9bqAZc6bxCdbAYeKc582P1A&s'
    },
    {
        id: 1003,
        title: 'The Gladiator',
        genre: 'Action',
        date: 2000,
        score: 4,
        image: 'https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg'
    },
    {
        id: 1004,
        title: 'Inception',
        genre: 'Action',
        date: 2010,
        score: 5,
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    {
        id: 1005,
        title: 'Django Unchained',
        genre: 'Western',
        date: 2012,
        score: 3,
        image: 'https://pics.filmaffinity.com/Django_desencadenado-956246347-large.jpg'
    },
    {
        id: 1006,
        title: 'World War Z',
        genre: 'Horror',
        date: 2013,
        score: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbdyQYt18ILy67f55TBL9KiPk_42jViTY-3ZE9_RwhVA3vQ8hE0lCzHxNKTP3NWLm1l0&usqp=CAU'
    }
];

const inputDateNumber = document.getElementById("date")

inputDateNumber.setAttribute("max", new Date().getFullYear())

const ascTableSort = document.querySelector(".fa-sort-up")
const descTableSort = document.querySelector(".fa-sort-down")

console.log(ascTableSort, descTableSort)

ascTableSort.addEventListener("click", function() {
    ordenarPeliculas("asc")
})

descTableSort.addEventListener("click", function() {
    ordenarPeliculas("desc")
})

function ordenarPeliculas(ordenamiento, propiedad) {
        const sortedMovies = movies.toSorted((a, b) => {
            
            if(ordenamiento === "asc") {
                return a[propiedad].title.localeCompare(b[propiedad])
            }

            if(ordenamiento === "desc") {
                return b[propiedad].localeCompare(a[propiedad])
            }
        })

    

    pintarPeliculas(sortedMovies)
}

//? Editar pelicula
function editarPelicula(id) {
    // Buscar la pelicula en el array de peliculas por su id
    const pelicula = movies.find(peli => {
        return peli.id === id
    })
    // vamos a rellenar el formulario con los datos de la pelicula
    const el = moviesForm.elements

    el.title.value = pelicula.title
    el.genre.value = pelicula.genre
    el.image.value = pelicula.image
    el.date.value = pelicula.date
    el.score.value = pelicula.score
    // vamos a cambiar el texto del boton de submit
    // vamos a cambiar los estilos del formulario
    // vamos a cambiar el evento del formulario 
}

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
        date: el.date.value,
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

                                    <button class="btn btn-primary" onclick="editarPelicula(${peli.id})">
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
