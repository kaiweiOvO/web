	/************************彩蛋*************************/
	

//alert(r+'---'+g+'---'+b);
$(window).ready(function(){
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
})
	