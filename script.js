document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

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

    const sliderDepoimentosWrapper = document.querySelector('.slider-depoimentos-wrapper');
    const prevDepoimentosArrow = document.querySelector('.slider-depoimentos-arrow.prev-arrow');
    const nextDepoimentosArrow = document.querySelector('.slider-depoimentos-arrow.next-arrow');

    if (sliderDepoimentosWrapper && prevDepoimentosArrow && nextDepoimentosArrow) {
        const depoimentoWidth = sliderDepoimentosWrapper.querySelector('.depoimento-item').offsetWidth + 32;

        prevDepoimentosArrow.addEventListener('click', () => {
            sliderDepoimentosWrapper.scrollBy({
                left: -depoimentoWidth,
                behavior: 'smooth'
            });
        });

        nextDepoimentosArrow.addEventListener('click', () => {
            sliderDepoimentosWrapper.scrollBy({
                left: depoimentoWidth,
                behavior: 'smooth'
            });
        });
    }
});