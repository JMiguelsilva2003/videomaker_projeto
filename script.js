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
});