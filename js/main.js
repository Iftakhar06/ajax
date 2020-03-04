(function ($) {
"use strict";


// $('.inner-active').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });

// $('.brand-active').owlCarousel({
//     loop:true,
//     margin:0,
//     // nav:true,
//     // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });


$('.brand-active').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 787,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
 });
      
$('.slider-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




        //     /*-- WoW-Animation-JS --*/
        //     new WOW().init({
        //         mobile: true,
        //     });
        // });  
        // $('.navi-trigger').on('click',function(){
        //     $(this).toggleClass('active');
        // }); 
        // var textOne = "I'm ui/ux designer.",
        // textTwo = "Let's work together.",
        // textThree = "I can create awesome stuff.";
        // $('.header-area .typer-title').typer([textOne,textTwo,textThree]);

        
// mainSlider

// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
//     });
    
// 	BasicSlider.slick({
// 		autoplay: false,
// 		autoplaySpeed: 10000,
//         dots: false,
//         prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
//         nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
// 		fade: true,
// 		arrows: true,
// 		responsive: [
// 			{ breakpoint: 767, settings: { dots: false, arrows: false,} }
// 		]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 			var $this = $(this);
// 			var $animationDelay = $this.data('delay');
// 			var $animationType = 'animated ' + $this.data('animation');
// 			$this.css({
// 				'animation-delay': $animationDelay,
// 				'-webkit-animation-delay': $animationDelay
// 			});
// 			$this.addClass($animationType).one(animationEndEvents, function () {
// 				$this.removeClass($animationType);
// 			});
// 		});
// 	}
// }
// mainSlider();


////isotope js 

$('#container').imagesLoaded( function() {



    var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: '.grid-item'
        }
      });

    $('.portfolio-menu').on( 'click', 'button', function() {
        $('.portfolio-menu button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      

  });


// // Scroll To Top
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener("click", function() {
      // window.scrollTo(0, 0);
  // method 1
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

//   // method 2
//   $('html, body').animate({ scrollTop: 0 }, "slow"); 
  
});
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });


// counter active code
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// one page nav active code 2
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});


//sticky active code 1
// var wind =$(window);
// var sticky =$('#sticky-header');
// wind.on('scroll', function (){
//     var scroll = wind.scrollTop();
//     if (scroll < 5) {
//         sticky.removeClass('sticky');
//     } else {
//         $('#sticky-header').addClass('sticky');
//     }
// }); 

        /* TOP Menu Stick code 2 */
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 5){  
                $('#sticky-header').addClass("sticky");
            }
            else{
                $('#sticky-header').removeClass("sticky");
            }
            });

})(jQuery);


