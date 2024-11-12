$('.musician-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '.musician-slider-prev',
    nextArrow: '.musician-slider-next',
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});


$('.Musical-genre-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '.Musical-genre-slider-prev',
    nextArrow: '.Musical-genre-slider-next',
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});


$('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.testimonial-slider-prev',
    nextArrow: '.testimonial-slider-next',
    autoplay: true,
});

$(document).ready(function () {
    $(".accordian-btn").click(function () {
        $(".accordian-content").not($(this).closest('div').find('.accordian-content')).slideUp();
        $(".accordian-btn .accordian-icon").not($(this).find('.accordian-icon')).removeClass("active");

        $(this).closest('div').find('.accordian-content').slideToggle();

        $(this).find('.accordian-icon').toggleClass('active');
    });
});