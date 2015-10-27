
    $(function(){

        $('.header-bottom ul li').mouseover(function(e){
            $(this).addClass('shoushi');
            var myindex=$('.header-bottom ul li').index(this);
            for(var i=0; i<$('.header-bottom ul li').length; i++){
                if(myindex==i){
                    $(".shoushi"+(i+1)).show();
                }else{
                    $(".shoushi"+(i+1)).hide();
                }
            }
        });
        $('.shl').mouseleave(function(){
            for(var i=0; i<$('.header-bottom ul li').length; i++){
               $(".shoushi"+(i+1)).hide(); 
            }
        })
    })
