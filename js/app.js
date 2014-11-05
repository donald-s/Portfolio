/**
 * Created by Sterling on 10/30/14.
 */


var app = angular.module('portfolio', ['ngRoute']);



// Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/pattaya', {
            templateUrl: 'views/pattaya.html',
            controller: 'PortfolioCtrl'
        })
        .when('/random-quote', {
            templateUrl: 'views/random-quote.html',
            controller: 'PortfolioCtrl'
        })
        .when('/product-button', {
            templateUrl: 'views/product-button.html',
            controller: 'PortfolioCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});



function inits () {

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


    // Slick Slider
    $(document).ready(function(){
        $('.slides').slick({
            autoplay: true
        });
    });


    // Scroll
    $('a').click(function(){
        var context = this;
        $('html, body').animate({
            scrollTop: $(context).offset().top
        }, 500);
        return true;
    });
}




app.controller('MainCtrl', function ($scope) {

    console.log("YO");

    inits();

});


app.controller('PortfolioCtrl', function ($scope) {

    console.log("YO YO YO");

    inits();

});
