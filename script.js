var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,      // Mostra 1 card e um pedaço do próximo como no print
    centeredSlides: true,    // Centraliza o card atual
    spaceBetween: 20,       // Espaço entre os cards
    grabCursor: true,       // Muda o cursor para a "mãozinha" de arrastar
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    breakpoints: {
        // Ajuste se quiser mostrar mais cards em telas maiores
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});