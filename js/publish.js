$(function(){
	$('#myread .bt').click(function(){
		var zhi1=$('#myread #title').val();
		var zhi2=$('#myread #life').val();

		var node1=$('<li>'+zhi1+'</li>');
		var node2=$('<li>'+zhi2+'</li>');
		var newnode1=document.createElement("li");
		var newtext1=document.createTextNode(zhi1);
		
		
		var newnode2=document.createElement("li");
		var newtext2=document.createTextNode(zhi2);
		//newnode2.appendChild(zhi2);
		if($('#myread #title').val()==''|| $('#myread #life').val()==''){
			alert("请输入书名和摘记内容！");
			$('#myread #title').val('');
			$('#myread #life').val('');
		}else{

			newnode1.appendChild(newtext1);
			newnode2.appendChild(newtext2);
			$('#myread .li1 ul').prepend(newnode1);
			$('#myread .li2 ul').prepend(newnode2);
			$('#myread .li1 ul li:eq(0)').hide().slideDown(700);
			$('#myread .li2 ul li:eq(0)').hide().slideDown(700);
			$('#myread #title').val('');
			$('#myread #life').val('');
		}
		
	})
})