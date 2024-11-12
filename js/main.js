$(".musician-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".musician-slider-prev",
    nextArrow: ".musician-slider-next",
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".Musical-genre-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".Musical-genre-slider-prev",
    nextArrow: ".Musical-genre-slider-next",
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".testimonial-slider-prev",
    nextArrow: ".testimonial-slider-next",
    autoplay: true,
});

$(document).ready(function () {
    $(".accordian-btn").click(function () {
        $(".accordian-content")
            .not($(this).closest("div").find(".accordian-content"))
            .slideUp();
        $(".accordian-btn .accordian-icon")
            .not($(this).find(".accordian-icon"))
            .removeClass("active");

        $(this).closest("div").find(".accordian-content").slideToggle();

        $(this).find(".accordian-icon").toggleClass("active");
    });
});

function displayToggle() {
    var x = document.getElementById("side-bar");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const ctx2 = document.getElementById("db-revenue-graph").getContext("2d");
const mainorange = 'rgba(255, 151, 0, 1)'
const mainblue = 'rgba(0, 58, 94, 1)';

const gradient = ctx2.createLinearGradient(0, 0, 0, 800);
gradient.addColorStop(0, "rgba(237, 197, 138, .6)");
gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                borderColor:mainorange,
                fill: true,
                tension: 0.1,
                backgroundColor: gradient,
                pointRadius:2,
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                display: false  // Disable the legend
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        elements:{
            point:{
                backgroundColor: mainblue,
            }
        },
    },
});

