$(".slider").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6500,
	prevArrow: `<button type='button' 
    class='slick-prev pull-left'>
    <i class="fas fa-chevron-left"></i>
    </button>`,
	nextArrow: `<button type='button' 
    class='slick-next pull-right'>
    <i class="fas fa-chevron-right"></i>
    </button>`,
	fade: true,
	speed: 900,
	draggable: true,
	infinite: true,
	cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
	touchThreshold: 100,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				arrows: false,
			},
		},
		{
			breakpoint: 1225,
			settings: {
				arrows: true,
			},
		},
	],
	// cssEase: 'ease-in-out',
	// centerMode: true,
	// variableWidth: true,
});

$(".plan__list").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	cssEase: "ease-in-out",
	autoplay: true,
	autoplaySpeed: 2500,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 897,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 601,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".topreview__list").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	cssEase: "linear",
	autoplay: false,
	autoplaySpeed: 2000,
  	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});
