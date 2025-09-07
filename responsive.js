document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    if (menuHamburguer && navMenu) {
        menuHamburguer.addEventListener('click', () => {
            navMenu.classList.toggle('ativo');
            menuHamburguer.classList.toggle('ativo');
        });
    }
});