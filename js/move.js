function move(obj,attr,mytar,fn){
	clearInterval(obj.timer);
	//var myw=parseInt(getStyle(obj,'width'));

	obj.timer=setInterval(function(){
		var myw=0;
		//判断属性
		if(attr=='opacity'){
			myw=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			myw=parseInt(getStyle(obj,attr));
		}
		//算速度
		var speed=(mytar-myw)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//检测停止
		if(myw==mytar){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(myw+speed)+')';//针对IE，解决兼容性
				obj.style.opacity=(myw+speed)/100;
			}else{
				obj.style[attr]=myw+speed+'px';	
			}
		}
	},30)	
}
function getStyle(obj,attr){ //获得任意属性值
	if(obj.currentStyle){//currentStyle针对IE
		return obj.currentStyle[attr];
	}else{//针对火狐Firefoxf用 getComputedStyle
		return getComputedStyle(obj,false)[attr];
	}
}