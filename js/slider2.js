 // Initialize the slider with Slick Carousel
 $(document).ready(function() {
    $('.slider').slick({
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in milliseconds (3 seconds)
        arrows: false, // Hide default navigation arrows
    });

    // Handle navigation button clicks
    $('.prev-button').click(function() {
        $('.slider').slick('slickPrev');
    });

    $('.next-button').click(function() {
        $('.slider').slick('slickNext');
    });
});