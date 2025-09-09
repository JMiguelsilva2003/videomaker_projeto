document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    if (menuHamburguer && navMenu) {
        menuHamburguer.addEventListener('click', () => {
            navMenu.classList.toggle('ativo');
            menuHamburguer.classList.toggle('ativo');
        });
    }

    const ctaLinks = document.querySelectorAll('.cta-link');
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    function handleMediaQuery(e) {
        ctaLinks.forEach(ctaLink => {
            if (e.matches) {
                // A tela é menor ou igual a 1000px
                ctaLink.textContent = 'Quero impactar meu público';
            } else {
                // A tela é maior que 1000px
                ctaLink.textContent = 'Garanta agora o seu projeto exclusivo e dê o próximo passo para se destacar.';
            }
        });
    }

    handleMediaQuery(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQuery);

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevArrow = document.querySelector('.slider-arrow.prev-arrow');
    const nextArrow = document.querySelector('.slider-arrow.next-arrow');

    if (sliderWrapper && prevArrow && nextArrow) {
        const itemWidth = sliderWrapper.querySelector('.slider-item').offsetWidth + 32;

        prevArrow.addEventListener('click', () => {
            sliderWrapper.scrollBy({
                left: -itemWidth,
                behavior: 'smooth'
            });
        });

        nextArrow.addEventListener('click', () => {
            sliderWrapper.scrollBy({
                left: itemWidth,
                behavior: 'smooth'
            });
        });
    }
});