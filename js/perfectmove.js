function move(obj,json,fn){

	
	clearInterval(obj.timer);
	//var myw=parseInt(getStyle(obj,'width'));

	obj.timer=setInterval(function(){
		var flag=true;//假设所有的目标值都执行完成
		for(var attr in json){//多运动轨迹同时运动时，遍历json执行
			var myw=0;
			//判断属性
			if(attr=='opacity'){
				myw=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				myw=parseInt(getStyle(obj,attr));
			}
			//算速度
			var speed=(json[attr]-myw)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//检测停止
			
			if(myw!=json[attr]){//如果不是所有的运动都到达终点，flag为假
				flag=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(myw+speed)+')';//针对IE，解决兼容性
				obj.style.opacity=(myw+speed)/100;
			}else{
				obj.style[attr]=myw+speed+'px';	
			}

		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
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