$(function(){
	var timer=setInterval(autoplay,2000)
	var num=1;
	function autoplay(){
		if(num==3){
			num=0;
		}
		$('#know div ol li').eq(num).addClass('current').siblings().removeClass();
		$('#know div ul li').eq(num).hide().stop().fadeIn(700).siblings().hide();	
		num++;	
	}
	$('#know div ol li').mouseover(function(e) {
		var myindex=$(this).index();
		$(this).addClass('current').siblings().removeClass();
		$('#know div ul li').eq(myindex).hide().stop().fadeIn(700).siblings().hide();
		num=myindex+1;	
    });
	$('#know div').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer=setInterval(autoplay,2000);
	})
})