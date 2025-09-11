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

    const navLinks = document.querySelectorAll('.header nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    const timelineContainer = document.querySelector('.timeline-container');
    const progressLine = document.querySelector('.linha-de-progresso');
    const checkpoints = document.querySelectorAll('.checkpoint');

    if (timelineContainer && progressLine && checkpoints.length > 0) {
        window.addEventListener('scroll', () => {
            const rect = timelineContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const percentVisible = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
            progressLine.style.height = `${percentVisible * 100}%`;

            const progressLineHeight = progressLine.getBoundingClientRect().height;

            checkpoints.forEach(checkpoint => {
                const checkpointTop = checkpoint.offsetTop;
                if (progressLineHeight > checkpointTop) {
                    checkpoint.classList.add('checkpoint-ativo');
                } else {
                    checkpoint.classList.remove('checkpoint-ativo');
                }
            });
        });
    }

    const portfolioGaleria = document.getElementById('portfolio-galeria');
    const sliderItems = document.querySelectorAll('.slider-item');

// Mapeamento das mídias por ID de projeto
const midiasProjetos = {
    'casamentos': [
        { tipo: 'video', src: 'videos/casamento01.mov' },
        { tipo: 'video', src: 'videos/casamento02.MOV' },
        { tipo: 'video', src: 'videos/casamento03.mp4' },
    ],
    'futevolei': [
        { tipo: 'imagem', src: 'imagens/Projetos/futvolei01.JPG' },
        { tipo: 'imagem', src: 'imagens/Projetos/futvolei02.JPG' },
        { tipo: 'imagem', src: 'imagens/Projetos/futvolei03.JPG' },
    ],
    'aniversario': [
        { tipo: 'imagem', src: 'imagens/Projetos/aniversário01.jpg' },
        { tipo: 'imagem', src: 'imagens/Projetos/aniversário02.jpg' },
    ],
    'corporativos': [
        { tipo: 'imagem', src: 'imagens/corpo1.jpg' },
        { tipo: 'imagem', src: 'imagens/corpo2.jpg' },
    ],
    'fashion-films': [
        { tipo: 'imagem', src: 'imagens/fashion1.jpg' },
        { tipo: 'imagem', src: 'imagens/fashion2.jpg' },
    ],
    'making-of': [
        { tipo: 'imagem', src: 'imagens/makingof1.jpg' },
        { tipo: 'imagem', src: 'imagens/makingof2.jpg' },
    ],
    'publicidade': [
        { tipo: 'imagem', src: 'imagens/publi1.jpg' },
        { tipo: 'imagem', src: 'imagens/publi2.jpg' },
    ],
};

        sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            sliderItems.forEach(i => i.classList.remove('ativo'));
            item.classList.add('ativo');

            const projetoId = item.getAttribute('data-id');
            const midias = midiasProjetos[projetoId];

            if (midias) {
                portfolioGaleria.innerHTML = '';
                
                midias.forEach(midia => {
                    let elemento;
                    if (midia.tipo === 'video') {
                        elemento = document.createElement('video');
                        elemento.src = midia.src;
                        elemento.autoplay = false;
                        elemento.loop = true;
                        elemento.muted = true;
                        elemento.controls = true;
                    } else {
                        elemento = document.createElement('img');
                        elemento.src = midia.src;
                        elemento.alt = `Imagem do projeto ${projetoId}`;
                    }
                    portfolioGaleria.appendChild(elemento);
                });

                portfolioGaleria.classList.add('mostra-galeria');
            }
        });
    });
});