// Seleccionar elementos del DOM

const boton = document.querySelector('.color__btn')
const colorText = document.querySelector('.text__color')
const contenedor = document.querySelector('.container')

//Definir funcioón que genera Hexadecimal aleaorio 

function generaHex(){
  let digitos = "0123456789abcdef"
  let varTem = "#"

  for (let i = 0; i < 6; i++  ){
    let indice = Math.floor(Math.random() * 16)
    varTem += digitos[indice]
  }
  return varTem
}

//Función para invertir color 

const inverColor = (hex) =>{
  let color = hex.replace("#", "")
  let invertir = (0xFFFFFF ^ parseInt(color, 16)).toString(16).padStart(6, '0')
  return `#${invertir}`
}

// Función para alterar el DOM
function AlterarDOM(){
  let colorAleatorio = generaHex()
  let colorOpuesto = inverColor(colorAleatorio)

  colorText.textContent = colorAleatorio
  colorText.style.color = colorAleatorio
  document.body.style.backgroundColor = colorAleatorio
  contenedor.style.backgroundColor = colorOpuesto
  boton.style.backgroundColor = colorAleatorio
  boton.style.borderColor = colorAleatorio
  boton.style.color = colorOpuesto
}
//Detalles personales a tener en cuenta, la función  inverColor cumple la misma función que encadenar la propiedad filter: invert(1) varias veces en diferentes contenedores. basicamente invierte matematicamente el número que equivale a su valor hexadecimal. 

// esto es de ser cuidadoso puesto que basicamente, es muy bueno para inverciones completas, por ejemplo el contraste de un punto que esta en un extremo como el negro, forsara que su inverso sea blanco, eso se ve genial, pero en los tonos del centro lo que hace es que los lleba a un color que casi no contrasta entre si
boton.addEventListener('click', AlterarDOM)