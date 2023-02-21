$(document).ready(function(){

    $(".home_banner_slider").owlCarousel({
        items:1,
        nav:true,
        loop: true,
        autoplay: true,
        autoplayTime: 2000,
        lazyLoad: true,
        mouseDrag: false,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:true
        }
    }
        
    });


    // vegetables_products_carousel
    $('.vegetables_products_carousel').owlCarousel({
        // loop:true,
        items: 5,
        dots:false,
        nav:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }  
    })
    

    
});

