$(function(){

    var scrolltop = window.pageYOffset
        || document.body.scrollTop
        || document.documentElement.scrolltop
        || 0;

    var $daily = $('#daily');
    $('#canvas').attr({width: $daily.width(),height: $daily.height()-70});
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let imgs = [
    {
        image: new Image(),
        src:'./resource/img/1.gif',
    },
    {
        image: new Image(),
        src:'./resource/img/2.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/3.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/4.png',
    },
    {
        image: new Image(),
        src:'./resource/img/5.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/6.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/7.gif',
    },
    {
        image: new Image(),
        src:'./resource/img/8.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/9.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/10.png',
    },
    {
        image: new Image(),
        src:'./resource/img/11.png',
    },
    {
        image: new Image(),
        src:'./resource/img/12.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/13.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/14.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/15.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/16.gif',
    },
    {
        image: new Image(),
        src:'./resource/img/17.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/18.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/19.gif',
    },
    {
        image: new Image(),
        src:'./resource/img/20.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/21.jpg',
    },
    {
        image: new Image(),
        src:'./resource/img/22.gif',
    },
    {
        image: new Image(),
        src:'./resource/img/23.gif',
    }];

    imgs.map(function(img,index,arr){
        img.image.src = img.src;
        img.x = 0;
        img.y = 100 + Math.random()*(canvas.height-300);
        img.angle = Math.random();
        img.deg = 0;
        img.delay = Math.random() * 6000;
        img.show = true;
    })

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

    function once(fn){
        var result;
        return function(){
            if(fn)
            {
                result = fn.apply(this,arguments);
                fn = null;
            }
            return result;
        };
    }

    var dailyAnimation = once(function(){
        var times = 0;
        setTimeout(() => {
            $('.me').show();
            $('.me').animate({opacity: 1},'slow');
            $('.canvas').css({filter: blur(10)});
        }, 6000);
        var interval = setInterval(() => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            for(var i=0;i<imgs.length;i++)
            {
                if(imgs[i].delay <= times && imgs[i].show)
                {
                    ctx.save();
                    ctx.translate(imgs[i].x,imgs[i].y);
                    ctx.beginPath();
                    ctx.arc(0,0,50,0,4 * Math.PI);
                    ctx.clip();
                    ctx.rotate(imgs[i].deg * Math.PI / 180);
                    ctx.drawImage(imgs[i].image,-50,-50,100,100);
                    ctx.restore();
                    imgs[i].x+=10;
                    imgs[i].deg+=imgs[i].angle;
                }
                if(imgs[i].x >= canvas.width + 50)
                    imgs[i].show = false;
            }
            times += 16;
        }, 16); 

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

        if(scrolltop >= $('#daily').offset().top)
            dailyAnimation();
    })
    
    if(scrolltop >= $('#daily').offset().top)
            dailyAnimation();


    $('.folder').hover(
        function(){
            $(this).addClass('folder-hover');
        },
        function(){
            $(this).removeClass('folder-hover');
    })

})