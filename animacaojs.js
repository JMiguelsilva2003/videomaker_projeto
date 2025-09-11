document.addEventListener('DOMContentLoaded', () => {
    $('.tlt').textillate({
        loop: true,
        in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50
        },
        out: {
            effect: 'fadeOutRightBig',
            delayScale: 1.5,
            delay: 50,
            shuffle: true
        }
    });
});