$('window').ready(function(){
	$('#menu li').each(function(){
		//alert(this.lastChild.href);
		if(this.lastChild.href == "javascript:(0)")
		{
			this.lastChild.style.color = 'limegreen';
			this.lastChild.lastChild.style.opacity = 1;
			this.lastChild.lastChild.style.color = 'limegreen';
//			this.lastChild.css({
//				'color':'limegreen',
//				'opacity':1
//			})
		}
	})
})
