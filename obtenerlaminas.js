const urlPeliculas = "https://swapi.dev/api/films/";//6 peliculas todas especiales
const urlPersonajes = "https://swapi.dev/api/people/";//82 personajes 20 primeras especiales
const urlNaves = "https://swapi.dev/api/starships/";//36 naves 10 primeras especiales


//Funcion para generar numeros aleatoreos
function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

//Crea un nuevo album en LocalStorage
const album = {
    peliculas: [],
    personajes: [],
    naves: []
}

//Funcion para crear un sobre al azar de las 2 posibilidades y lo devuelve como array;
function generarSobre() {
    let sobre = "";
    let tipoSobre = generarNumeroAleatorio(1, 2);
    if (tipoSobre == 1) {
        [
            urlPeliculas, generarNumeroAleatorio(1, 6),
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlNaves, generarNumeroAleatorio(1, 36),
        ];
    } else {
        sobre = [
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlPersonajes, generarNumeroAleatorio(1, 82),
            urlNaves, generarNumeroAleatorio(1, 36),
            urlNaves, generarNumeroAleatorio(1, 36),
        ]
    }
    return sobre;
}

//Consultar Sobre
function prueba1() {
    let sobre = generarSobre();

    for (let index = 0; index < 10; index += 2) {
        console.log(sobre[index] + sobre[index + 1] + "/")
        consultarYGenerarTarjeta(sobre[index], sobre[index + 1])

    }
}

function traerRecurso(url, id,) {
    fetch(url + id + "/")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            // for (let index = 1; index < 6; index++) {
            //     let idelement = "carta" + index;
            //     console.log(idelement);
            //     let element = document.getElementById(idelement);
            //     element.innerHTML = renderizarTarjetas(url, id, data);

            // }

            let element = document.getElementById("carta1");
            element.innerHTML = renderizarTarjetas(url, id, data);
        })
        .catch(err => console.log(err));
}

function renderizarTarjetas(url, id, data) {
    let render = "";
    if (url == urlPeliculas) {
        render = `
        <p>Especial</p>
        <p>Pelicula</p>
        <p>${id}</p>
        <p>${data.title}</p>
        `;
    } else if (url == urlNaves) {
        if (id < 10) {
            render += `
        <p>Especial</p>
        <p>Naves</p>
        <p>${id}</p>
        <p>${data.name}</p>
        `;
        } else {
            render = `
        <p>Regular</p>
        <p>Naves</p>
        <p>${id}</p>
        <p>${data.name}</p>
        `;
        }
    } else if (url == urlPersonajes) {
        if (id < 20) {
            render = `
        <p>Especial</p>
        <p>Personajes</p>
        <p>${id}</p>
        <p>${data.name}</p>
        `;
        } else {
            render = `
        <p>Regular</p>
        <p>Personajes</p>
        <p>${id}</p>
        <p>${data.name}</p>
        `;
        }
    }
    return render;
}

