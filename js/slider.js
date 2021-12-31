$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1
    autoplay: false,
    autoplaySpeed: 7000,
    prevArrow:`<button type='button' 
    class='slick-prev pull-left'>
    <i class="fas fa-chevron-left"></i>
    </button>`,
    nextArrow:`<button type='button' 
    class='slick-next pull-right'>
    <i class="fas fa-chevron-right"></i>
    </button>`,
    fade: true,
    speed: 900,
    draggable: true,
    // infinite: true,
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    cssEase: 'ease-in-out',
    touchThreshold: 100
    // centerMode: true,
    // variableWidth: true,
});

