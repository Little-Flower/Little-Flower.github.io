window.onload=function(){
	var box=document.getElementById('box');
	var go=document.getElementById('go');
	function fun(){
		alert("我是整个父盒子");
	}
	function fun1(e){
		e=eventUtil.getEvent(e);
		alert(eventUtil.getElement(e));
		eventUtil.preventDefault(e);
		eventUtil.stopPropagation(e);
	}
	eventUtil.addHandler(box,'click',fun);
	eventUtil.addHandler(go,'click',fun1);
	

}