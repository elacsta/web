$(document).ready(function(){
    /************************navigation************* */
    /*********closes responsuve menu*************** */
    $('.nav-link').click(function(){
        $('navbar-collapse').collapse('hide');
    });
    /***************activate scroll spy************/
    $('body').scrollspy({
        target:'#navbar',
        offset:75
    });

    $(window).scroll(function(){
        if($('#navbar').offset().top > 50){
            $('#navbar').addClass('navbar-shrink');
        }else{
            $('#navbar').removeClass('navbar-shrink');
        }

    });
    /**************members******************* */
    $('#members-slider').owlCarousel({
        margin: 25,
        smartSpeed: 1000,
        nav: false,
        dots:true,
        dotsEach: true,
        loop:true,
        autoplay:true,
        mouseDrag:true,
        touchDrag:true,
        responsive:{
            0:{
                items:1

            },
            600:{
                items:3

            },
            1000:{
                items:5
            }
        }
    });
    $('#event-slider').owlCarousel({
        margin: 50,
        nav: false,
        dots:true,
        dotsEach: true,
        loop:false,
        mouseDrag:true,
        touchDrag:true,
        responsive:{
            0:{
                items:1

            },
            600:{
                items:2

            },
            1000:{
                items:3

            }
        }
        
    });
});