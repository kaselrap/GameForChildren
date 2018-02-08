$(window).on('load', function() {
       $("#preload").animate({
        opacity:'0',   
    },1000); 
  
	setTimeout(function(){
      $("#preload").css('display','none');
    },1000);
    

   
});

$('.num').on("click",function(){
     $('main').off('click');
    var w =$(this).attr('id');

    var q = [4], size =0, sizeNow=0;
    for(let i =0;i<=4;i++)
    {
        q[i]=parseInt($("#"+i).text());
    }
    for(let i =0;i<=4;i++)
    {
        sizeNow+=q[i];
        $('#div'+i).empty();
        $('#div'+i).css('display','none');
    }
    $('<p>0</p>').appendTo('#div'+w);  
    $('#div'+w).css('display','flex');
    setTimeout(()=>{
       $('main').on('click',()=>{
        $('#div'+w).css('display','none');
             $('main').off('click');
    }); 
    },4);
    
    var maxN = 24 - sizeNow+q[w];
    for(let a =1;a<=maxN;a++){
        $('<p>'+a+'</p>').appendTo('#div'+w);  
    }


});
$(document).on("click",'.select p',function(){
    
    var select = 0;
    select = parseInt($(this).text());
    $('#'+$(this).parent().siblings().attr('id')).text(select); 
    $('#div'+$(this).parent().siblings().attr('id')).css('display','none');
    $('#div'+$(this).parent().siblings().attr('id')).empty();
    $('main').off('click');
    var q = [4],sizeNow=24;
    for(let i =0;i<=4;i++)
    {
        q[i]=parseInt($("#"+i).text());
        sizeNow-=q[i];
    }

});
