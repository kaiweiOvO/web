$(function(){

    var scrolltop = window.pageYOffset
        || document.body.scrollTop
        || document.documentElement.scrolltop
        || 0;

    if(scrolltop >= $('#subjects').offset().top)
        $('#nav-container').addClass('nav-slide-down');

    if(window.innerWidth <= 855)
        $('#nav-right').addClass('nav-right-hide');
    
    $('#menu i').on('click',function(){
        $('#nav-right').slideToggle(400);
    })
    
    $('#nav-right li a').on('click',function(){
        if($('#nav-right').hasClass('nav-right-hide'))
        $('#nav-right').css('display','none');
    })

    $(window).on('resize',function(){
        if(window.innerWidth <= 855)
        {
            if(!$('#nav-right').hasClass('nav-right-hide'))
                $('#nav-right').addClass('nav-right-hide');  
            $('#nav-right').css('display','none');

        }
        else{
            if($('#nav-right').hasClass('nav-right-hide'))
                $('#nav-right').removeClass('nav-right-hide');
            $('#nav-right').css('display','block');
        }
    })

    $('.nav-right ul li a,#tap').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': $($(this).attr('href')).offset().top
        }, 400);
    });

    $(window).on('scroll',function(){

        scrolltop = window.pageYOffset
        || document.body.scrollTop
        || document.documentElement.scrolltop
        || 0;

        if(scrolltop >= $('#subjects').offset().top)
            $('#nav-container').addClass('nav-slide-down');
        else
            if($('#nav-container').hasClass('nav-slide-down'))
                $('#nav-container').removeClass('nav-slide-down');
           
        $('#subjects ul li').each(function(){
            if(scrolltop + window.innerHeight >= $(this).offset().top)
                $(this).addClass('liSlide');
        })
    })
    
    var $daily = $('#daily');
    $('#canvas').attr({width: $daily.width(),height: $daily.height()});

        let ctx;
        let haski;
        haski = new Image();
        haski.src = './resource/img/haski.gif';
        let canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        ctx.drawImage(haski,0,0,300,300);
        ctx.save();
        ctx.translate(150,150);

    
})