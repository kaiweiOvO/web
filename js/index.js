$(document).ready(function(){

	
	/*****************给开始页面高度赋值*******************/
	var h = document.documentElement.clientHeight;
	var w = document.documentElement.clientWidth;	
	$('#object').css('min-height',h);
	$('#csl').css('min-height',h);
	//$("#nav").css({"position":"fixed"})
	$(".b_box").css({"height":document.documentElement.clientHeight})
	$(".b_b_box").css({"height":document.documentElement.clientHeight})
	$(".bg").css({"height":document.documentElement.clientHeight})
	//alert(document.documentElement.clientHeight)
	$(".title").css({"margin-top":(document.documentElement.clientHeight)/2.5+"px"})
	$(".start").css({"margin-top":(document.documentElement.clientHeight)/5+"px"})
	//object 项目栏大小
 	if(w<=500 || h/w >= 16/9)
	{
		$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'92%','height':h*0.7});
		$('.obj_tit,.csl_tit').css('padding',"20% 0 2%");
	}
	else if(h/w >= 4/5)
	{
		//alert("5/4")
		$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'44%','height':h/3});
		$('.obj_tit,.csl_tit').css('padding',"15% 0 2%");
	}
	else
	{
		$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'20%','height':h/2});
		$('.obj_tit,.csl_tit').css('padding',"10% 0 2%");
	}

	//object图片大小
	//alert($('.obj_s').height())
	$('.obj_s img').css('width',$('.obj_s').height()*0.4)
	
	/*****************************************************/
	
	
	
	
	/*****************下滑动画*****************************/
	$("#tap").click(
		function(){
 		$("html,body").animate({ scrollTop: document.documentElement.clientHeight}, 500);
		}
	)
	/******************************************************/
	
	
	
	
	
	/*********************导航栏动画显示、改变导航栏内字体颜色********************/
	window.onscroll = function(){
		if(window.scrollY >= document.documentElement.clientHeight)
		{
			if($('.obj_s').hasClass('obj_s'))
			{
				$('.obj_s').toggleClass('obj_s_show');
				$('.obj_s').removeClass('obj_s');
			}
			if($("#nav").hasClass("nav"))
			{
				$("#nav").removeClass("nav");
				$("#nav").toggleClass("nav_slideDown");
				$("#nav a").css("color","lightpink")
				$('#menu1,#menu2,#menu3').css("background-color","lightpink");
				$("#nav a").hover(function(){
					$(this).css("color","orangered")
				},
				function(){
					$(this).css("color","lightpink")
				})
			}
		}
		else{
			if($("#nav").hasClass("nav_slideDown"))
			{
				$("#nav").removeClass("nav_slideDown");
				$("#nav").toggleClass("nav");
				$("#nav a").css("color","white")
				$('#menu1,#menu2,#menu3').css("background-color","white");
				$("#nav a").hover(function(){
					$(this).css("color","lightpink")
				},
				function(){
					$(this).css("color","white")
				})
			}
			
		}
	}
	/******************************************************/
	
	
	

	/**********************判断counselor是否显示*************************/
	
	
	$(window).scroll(function(){
		//alert('1')
		if($(window).scrollTop()>=($('#object').offset().top+$('#object').outerHeight()))
		{
			if($('.csl_s').hasClass('csl_s'))
			{
				//alert("1")
				$('.csl_s').toggleClass('csl_s_show');
				$('.csl_s').removeClass('csl_s');
			}
		}
	})
	
	/*****************************************************************/	
	
	
	
	
	/****************窗口大小判断导航栏和菜单按钮显示*****************/
	
	 var h = document.documentElement.clientHeight;
	 var w = document.documentElement.clientWidth;
	 if(w <= 840 || h/w >= 5/4)
	 {
	 	//alert("start")
	 	$('#menu').removeClass('menu');
		$('#menu').addClass('menu_show');
	 	if($('#nav_right').hasClass('nav_right'))
	 	{
			$('#nav_right').removeClass('nav_right')	 		
	 		$('#nav_right').toggleClass('nav_right_hide');
	 	}
	 		
	 }
	 else{
	 	$('#menu').removeClass('menu_show');
		$('#menu').addClass('menu');
	 	if($('#nav_right').hasClass('nav_right_hide'))
	 	{
	 		$('#nav_right').removeClass('nav_right_hide')	 		
	 		$('#nav_right').toggleClass('nav_right');
	 	}
	 }
	 

	 $(window).resize(function(){
	 	var h = document.documentElement.clientHeight;
		var w = document.documentElement.clientWidth;
		//alert($('.obj_s_show img').height());
		$('.obj_s_show img,.csl_s_show img').css('width',$('.obj_s_show img').height());
		if(w <= 840 || h/w >= 5/4)
		{
			//alert("start")
			$('#menu').removeClass('menu');
			$('#menu').addClass('menu_show');
			if($('#nav_right').hasClass('nav_right'))
			{
				$('#nav_right').removeClass('nav_right')	 		
				$('#nav_right').toggleClass('nav_right_hide');
			}
		}
		else{
			$('#menu').removeClass('menu_show');
			$('#menu').addClass('menu');
			if($('#nav_right').hasClass('nav_right_hide'))
			{
				$('#nav_right').removeClass('nav_right_hide')	 		
				$('#nav_right').toggleClass('nav_right');
			}
		}
		
		//object 项目栏大小
		if(w<=500 || h/w >= 16/9)
		{
			$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'92%','height':h*0.7});
			$('.obj_tit,.csl_tit').css('padding',"20% 0 2%");
		}
		else if(h/w >= 4/5)
		{
			//alert("5/4")
			$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'44%','height':h/3});
			$('.obj_tit,.csl_tit').css('padding',"15% 0 2%");
		}
		else
		{
			$('.obj_s,.csl_s,.obj_s_show,.csl_s_show').css({'width':'20%','height':h/2});
			$('.obj_tit,.csl_tit').css('padding',"10% 0 2%");
		}

	 })
	
	/******************************************************/
	
	
	
	
	/**********************menu按钮事件***********************/
	
	$('#menu_top').click(function(){
		$('#nav_right').slideToggle();
	})
	$('body').click(function(e) {
		if($('#menu').hasClass('menu_show'))
		{
		 	var target = $(e.target);
			if(!target.is('#menu_top'))
			{
				if ( $('#nav_right').is(':visible') ) 
				{
		 		    $('#nav_right').hide();                          
		    	}
			}
		}
	});
	
	/******************************************************/
	
	
	
	/*********************hover事件***********************/
	
	$('.obj_s').hover(function(){
		//alert('in');
		$(this).find('.go').css('background-color','pink')
		$(this).find('i').css('color','whitesmoke')
	},function(){
		//alert('out');
		$(this).find('.go').css('background-color','whitesmoke')
		$(this).find('i').css('color','pink')
	})
	
	/*****************************************************/
	
	
	
	
	/************************彩蛋*************************/
	

	//alert(r+'---'+g+'---'+b);
		var r = 0;
		var g = 0;
		var b = 0;
		var pageTimer = {} ;
		function RGB()
		{
			$('#kaiweiOvO').css('color','rgb('+r+','+g+','+b+')');
			if(g == 0 || r <= 255 && g > 0 && b == 255)
			{
				if(g >= 1)
				{
					g--;
				}
				else
				{
					g = 0;
				}
				if(r >= 255)
				{
					r = 255;
				}
				else
				{
					r++;
				}
			}
			if(r == 255 && b == 255 || r == 255 && g == 0)
			{
				if(b > 1)
				{
					b--;
				}
				else
				{
					b = 0;
				}
			}
			if(r == 255 && b == 0)
			{
				g++;
			}
			if(r == 255 && g == 255 || g == 255 && b > 0)
			{
				if(r >= 1)
				{
					r--;
				}
				else
				{
					r = 0;
				}
				b++;
			}
		}
		$('#kaiweiOvO').hover(function(){
			/*var r = Number(Math.random()*255);
			var g = Number(Math.random()*255);
			var b = Number(Math.random()*255);			
			$(this).css('color','rgb('+r+','+g+','+b+')')*/
			//var s = setInterval(RGB,0.5);
			pageTimer["timer1"] = setInterval(RGB,0.5);
		},function(){
			/*for(var i = 1; i < 100; i++) {
				clearInterval(i);
			}*/
			/*for(var each in pageTimer){
			    clearInterval(pageTimer[each]);
			    //清除多个定时器的方法
			}*/
			clearInterval(pageTimer['timer1']);
			$('#kaiweiOvO').css('color','#353535');
		})
	//document.getElementById("kaiweiOvO").style.color='rgb('+r+','+g+','+b+')';
	
	/******************************************************/
	

})
