$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    //  slide up scroll
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/ navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script 
    var typed = new Typed (".typing",{
        strings: ["Designer","Youtuber","Blogger","Freelancer","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed (".typing-2",{
        strings: ["Designer","Youtuber","Blogger","Freelancer","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // owl-carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayTimeHoverPause:true,
        responsive:{
            0:{
                item:1 ,
                nav:false
            },
            600:{
                item:2 ,
                nav:false
            },
            1000:{
                item:3 ,
                nav:false
            }
        }
    });
});