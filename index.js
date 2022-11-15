let contador = 10;
let contadorActivo = 0;


//Funcion para mostrar el contador
function prueba() {
        contadorActivo = 1;
        let timer = setInterval(() => {
            document.getElementById("contador").innerHTML = contador + " Segundos"
            contador--;
            if (contador === -1) {
                clearInterval(timer);
                contador = 10;
                contadorActivo = 0;
                localStorage.setItem("contador1", "10");
                localStorage.setItem("contador2", "0");
                document.getElementById("contador").innerHTML = " Completo"
                //console.log(localStorage)                
            }
        }, 1000);        
    
}

//Funcion para cuando recarga la pagina retoma el contador de tiempo
function timerPrueba() {
    console.log(localStorage)
    contadorActivo = Number(localStorage.getItem("contador2"));
    console.log(contadorActivo);
    if (Boolean(contadorActivo)) {
        contador = Number(localStorage.getItem("contador1"));
        prueba();
    }
}
//Guarda los datos necesarios para ejecutar el contador de tiempo
function cambioPagina() {
    localStorage.setItem("contador1", contador.toString());
    localStorage.setItem("contador2", contadorActivo.toString());
}

//Funcion para redirigir a la apertura de sobres, si existe un albun este se eliminara
function salirIndex() {
    setTimeout(() => {
        localStorage.removeItem("contador1");
        localStorage.removeItem("contador2");
        window.location.href = "/sobres.html"

    }, 1000)
}

