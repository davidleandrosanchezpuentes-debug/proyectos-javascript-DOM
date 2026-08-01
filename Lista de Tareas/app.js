const input = document.getElementById('ingresar__tarea')
const boton = document.querySelector('.btn')
const listaDeTareas = document.getElementById('lista__Tareas')

// Función para determinar qué pasa al agregar una tarea 

const agregarTarea = () =>{
    if (input.value){
        let tareaNueva = document.createElement('div')
        tareaNueva.classList.add('tarea')

        let textTarea = document.createElement('p')
        textTarea.innerText = input.value

        let contenedorIcon = document.createElement('div')
        contenedorIcon.classList.add('iconos')

        let completada = document.createElement('i')
        completada.classList.add('bi', 'bi-check-circle-fill', 'icono__completada')
        completada.addEventListener('click', tareaCompletada)

        let borrar =  document.createElement('i')
        borrar.classList.add('bi', 'bi-trash3-fill', 'icono__eliminar')
        borrar.addEventListener('click', tareaEliminada)

        contenedorIcon.append(completada, borrar)
        tareaNueva.append(textTarea, contenedorIcon)

        listaDeTareas.append(tareaNueva)
    } else {
        alert('Por favor verifique que se haya ingresado una tarea')
    }

    input.value = ''
}


//Función tarea completada

function tareaCompletada(e){
    let tarea = e.target.parentNode.parentNode
    tarea.classList.toggle('completada')
}


// Función Eliminar tarea

function tareaEliminada(e){
    let eliminada = e.target.parentNode.parentNode
    eliminada.remove()
}


/*
Usando la propiedad "key" podemos generar un evento al momento que el usuario
interactúa con el teclado, ejemplo:

input.addEventListener('keydown', (e) => {
    if (e.key === ' ' | e.key === 'Spacebar' ){
        funcionDeEvento()
    }
}) 
    
*/

boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' ){
        agregarTarea()
    }
})
