(function ($) {
    "use strict"
    /*-------------------------------
    menu sticky active 
    --------------------------------*/
    
    $("#main_menu ul").slicknav({
        allowParentLinks: true,
        prependTo: '.responsive-menu'
    }); 
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 70) {
         $(".sticky-menu").removeClass("sticky");
        }else{
         $(".sticky-menu").addClass("sticky");
        }
       });

       $( "#datepicker" ).datepicker({
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        
    });
    $('#datepicker').datepicker('setDate', 'today');
   
    $('.massage-wapper').bxSlider({
        minSlides: 3,
        maxSlides: 10,
        slideWidth: 200,
        slideMargin:30,
        autoDirection: 'next',
        ticker: true,
        tickerHover: true,
        controls: false,
        speed: 55000,
        pager: false,
        useCSS: true, 
        infiniteLoop: false
    });
       $(".main-slider").slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
    });

    $(".client-rewiew-wapper").slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-arrow-prev"><i class="fa fa-chevron-right"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fa fa-chevron-left" ></i></button>',
        fade: true,
        dots: false,
    });

      


       
    
    /* ===============================
    menu active
    ===================================*/

        $('#main_menu ul li a').click(function(){
            $('li a').removeClass('active');
            $(this).addClass('active');
        });

        

   
   })(jQuery); 
   
   
       