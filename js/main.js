
// Stellar.js
$(function(){
    $.stellar({
        horizontalScrolling: false
    });
});


// Wow.js
wow = new WOW({
    animateClass: 'animated',
    offset:       100,
    mobile:       true
});
wow.init();


// Portfolio Slider
$(window).load(function() {
    $('.portfolio-slide').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav:true
    });
});


// Scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

