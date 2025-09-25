document.addEventListener('DOMContentLoaded', () => {
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

    // Lógica do carrossel
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

    // Lógica da linha do tempo
    const timelineContainer = document.querySelector('.timeline-container');
    const progressLine = document.querySelector('.linha-de-progresso');
    const checkpoints = document.querySelectorAll('.checkpoint');

    if (timelineContainer && progressLine && checkpoints.length > 0) {
        window.addEventListener('scroll', () => {
            const rect = timelineContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
            progressLine.style.height = `${progress * 100}%`;

            checkpoints.forEach(checkpoint => {
                const checkpointTop = checkpoint.offsetTop;
                if (progressLine.getBoundingClientRect().height > checkpointTop) {
                    checkpoint.classList.add('checkpoint-ativo');
                } else {
                    checkpoint.classList.remove('checkpoint-ativo');
                }
            });
        });
    }

    // Lógica para expandir o portfólio ao clicar em um álbum
    const portfolioGaleria = document.getElementById('portfolio-galeria');
    const sliderItems = document.querySelectorAll('.slider-item');

    const midiasProjetos = {
        'casamentos': [
            { tipo: 'video', src: 'videos/casamento01.mov' },
            { tipo: 'video', src: 'videos/casamento02.MOV' },
            { tipo: 'video', src: 'videos/casamento03.mp4' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento001.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento002.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento003.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento004.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento005.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento006.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento007.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento008.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento009.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/casamento010.JPG' },
        ],
        'futevolei': [
            { tipo: 'imagem', src: 'imagens/Projetos/futvolei01.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futvolei02.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futvolei03.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei001.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei002.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei003.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei004.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei005.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei006.JPG' },
            { tipo: 'imagem', src: 'imagens/Projetos/futevolei007.JPG' },
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

    // Lógica do Modal
    const modal = document.getElementById('modal');
    const modalImagem = document.getElementById('modal-imagem');
    const modalVideo = document.getElementById('modal-video');
    const fecharModal = document.querySelector('.fechar-modal');

    if (portfolioGaleria) {
        portfolioGaleria.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                modal.style.display = 'flex';
                modalImagem.src = e.target.src;
                modalImagem.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (e.target.tagName === 'VIDEO') {
                modal.style.display = 'flex';
                modalVideo.src = e.target.src;
                modalVideo.style.display = 'block';
                modalVideo.play();
                modalImagem.style.display = 'none';
            }
        });
    }

    if (fecharModal) {
        fecharModal.addEventListener('click', () => {
            modal.style.display = 'none';
            if (modalVideo.style.display === 'block') {
                modalVideo.pause();
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            if (modalVideo.style.display === 'block') {
                modalVideo.pause();
            }
        }
    });
});