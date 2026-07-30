//Tomamos los inputs

const inputRojo = document.querySelector('#rojo')
const inputVerde = document.querySelector('#verde')
const inputAzul = document.querySelector('#azul')

//Referenciamos a el texto que modificaremos 

const textRojo = document.querySelector('.texto__rojo')
const textVerde = document.querySelector('.texto__verde')
const textAzul = document.querySelector('.texto__azul')

//Toma los valores iniciales del rango RGB
let rojo = inputRojo.value 
console.log(rojo)

let verde = inputVerde.value
console.log(verde)

let azul = inputAzul.value
console.log(azul)

//Agregamos esto al parrafo

textRojo.innerText = rojo
textVerde.innerText = verde
textAzul.innerText = azul

//Como actualizar el color 

/*
function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB
}

dev  actualizarColor(rojo, verde, azul):
    colorRGB = f"rgb({rojo}, {verde}, {azul})"

*/

const actualizarColor = (rojo, verde, azul) => {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB
}

//Para actualizar el input Rojo

inputRojo.addEventListener('change', (e)  =>{
    rojo = e.target.value;
    textRojo.innerText = rojo
    actualizarColor(rojo, verde, azul)
} )

inputVerde.addEventListener('change', (e)  =>{
    verde = e.target.value;
    textVerde.innerText = verde
    actualizarColor(rojo, verde, azul)
} )
//Aparentemente al ser variables glovales mi codigo no necesita del paraetro de evento
inputAzul.addEventListener('change', ()  =>{ //Tampoco depende del target
    azul = inputAzul.value;
    textAzul.innerText = azul
    actualizarColor(rojo, verde, azul)
} )