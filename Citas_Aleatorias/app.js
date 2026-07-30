let botonElem = document.querySelector("#cambiar__cita-biblica")
let citaElem = document.querySelector("#versiculo")
let pasaje = document.querySelector("#pasaje")

function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

const cambiarCita = () =>{
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = ` "${citas[indiceAleatorio].texto}" `
    pasaje.innerText = citas[indiceAleatorio].pasaje
}

cambiarCita()

botonElem.addEventListener('click', cambiarCita)