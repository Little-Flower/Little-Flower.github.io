$(function(){
	var myheight=$('#newtitle .newtitleR ul li:eq(0)').height();
	var mynum=1;
	function autoplay(){
		if(mynum==3){
			mynum=0;
		}
		$('#newtitle .newtitleR ul li').eq(mynum).hide().stop().fadeIn(700).siblings().hide();
		//$('#newtitle .newtitleR ul').animate({top:-(mynum*myheight)});
		mynum++;
	}
	var timer=setInterval(autoplay,2000);
	$('#newtitle .newtitleR').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(autoplay,2000);
	});
})