(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


/*-------------------------------------------
  js wow
--------------------------------------------- */
 new WOW().init();

/*-------------------------------------------
jQuery MeanMenu
--------------------------------------------- */
jQuery(".main-menu").meanmenu();

/*-------------------------------------------
  js scrollup
--------------------------------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 

/*-------------------------------------------
  product slide
--------------------------------------------- */
$(".slide-product.owl-carousel").owlCarousel({
	loop:true,
	autoplay:true,
    autoplaySpeed:2000,
	dots:true,
	nav:false,	  
	items : 2,
	margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1190:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
/*-------------------------------------------
 slide-testimonial
--------------------------------------------- */
$(".slide-testimonial.owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    dots:true,
    nav:false,    
    items : 1,
    margin:15,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});
/*-------------------------------------------
 slide-testimonial
--------------------------------------------- */
$(".slide-parners.owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    dots:false,
    nav:false,    
    items : 5,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
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
});

/*-------------------------------------------
Counter up activation  
--------------------------------------------- */
$('.counter').counterUp({
    delay: 50,
    time: 3000
});


})(jQuery);