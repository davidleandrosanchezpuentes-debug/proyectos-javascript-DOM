const cronometro = document.getElementById('cronometro')
//botones
const botonIP = document.getElementById('boton__inicio-pausa')
const reinicio = document.getElementById('reiniciar')



let [horas, minutos, segundos] = [0, 0, 0]

let intervaloDeTiempo;

let estadoDelCronometro = 'pausado'

function actualizarCronometro(){
  segundos++

  if (segundos / 60 == 1){
    segundos = 0
    minutos ++
  }

  
  if (minutos / 60 == 1){
    minutos = 0
    horas ++
  }

  const segundosFormato = formatoText(segundos)
  const minutosFormato = formatoText(minutos)
  const horasFormato = formatoText(horas)

  cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`
}


//función del formato del texto 
function formatoText(unidadDeTiempo) {
  return unidadDeTiempo > 9 ? unidadDeTiempo : "0" + unidadDeTiempo
}


//Función de el intervalo de tiempo

botonIP.addEventListener("click", () =>{
  if (estadoDelCronometro === 'pausado'){
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000)
    botonIP.innerHTML = '<i class="bi bi-pause-fill"></i>'
    botonIP.classList.remove('iniciar')
    botonIP.classList.add('pausar')
    estadoDelCronometro = 'andando'
  } else {
    window.clearInterval(intervaloDeTiempo)
    botonIP.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonIP.classList.remove('pausar')
    botonIP.classList.add('iniciar')
    estadoDelCronometro = 'pausado'
  }
} )

//funcion para reiniciar el contador 

const reiniarCronometro = () =>{
  window.clearInterval(intervaloDeTiempo)

  horas = 0
  minutos = 0 
  segundo = 0

  botonIP.innerHTML = '<i class="bi bi-play-fill"></i>'
  botonIP.classList.remove('pausar')
  botonIP.classList.add('iniciar')
  estadoDelCronometro = 'pausado'
  cronometro.innerText = "00:00:00"
}

reinicio.addEventListener('click', reiniarCronometro)