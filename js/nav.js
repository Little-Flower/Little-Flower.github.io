$(function(){
	$('#nav .navconL ul li').mouseover(function(){
		var myindexli=$(this).index();
		for(var i=0;i<$('.navconL ul li').length;i++){
			if(myindexli==i){
				$(".nav_con"+(i+1)).slideDown(700);
			}else{
				$(".nav_con"+(i+1)).stop().slideUp(500);
			}
		}
	});
	$('#nav').mouseleave(function(){
		for(var i=0;i<$('.navconL ul li').length;i++){
			$('.nav_con'+(i+1)).stop().slideUp(500);
		}
	});
})