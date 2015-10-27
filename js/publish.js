$(function(){
	$('#myread .bt').click(function(){
		var zhi1=$('#myread #title').val();
		var zhi2=$('#myread #life').val();

		var node1=$('<li>'+zhi1+'</li>');
		var node2=$('<li>'+zhi2+'</li>');
		if($('#myread #title').val()==''|| $('#myread #life').val()==''){
			alert("请输入书名和摘记内容！");
			$('#myread #title').val('');
			$('#myread #life').val('');
		}else{
			$('#myread .li1 ul').prepend(node1);
			$('#myread .li2 ul').prepend(node2);
			$('#myread .li1 ul li:eq(0)').hide().slideDown(700);
			$('#myread .li2 ul li:eq(0)').hide().slideDown(700);
			$('#myread #title').val('');
			$('#myread #life').val('');
		}
		
	})
})