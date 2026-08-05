const menuButton = document.querySelector(".menu__btn")
const navbar = document.querySelector('.navbar')
const boton = document.getElementById('menu')

console.log(boton)


menuButton.addEventListener('click', () => {
    navbar.classList.toggle('is-active')
})
