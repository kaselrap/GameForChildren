$(window).on('load', function() {
    $("#preload").animate({
        opacity:'0',   
    },1000); 

    setTimeout(function(){
        $("#preload").css("display","none");
    },1000);
});
//$('.bgImgProfileHov').on('click',function(){
//    $('#avatarBlock').slideDown();
//});
//$('.closeAvatarBlock').on('click',function(){
//    $('#avatarBlock').slideUp();
//});
//$('.avatarImg img').on('click',function(){
//    var avatarImg = $(this).attr('id');
//
//    $('#imgProfile').attr('src','images/'+avatarImg);
//    $.ajax({
//        url:'http://avatar.php',
//        type:'POST',
//        data:({
//            avatar: avatarImg
//
//        }),
//        dataType:'HTML',
//
//    });
//    $('#avatarBlock').slideUp();
//});
//var clickFlag = 0;
$('.num').on("click",function(){
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
    var q = [4],sizeNow=24;
    for(let i =0;i<=4;i++)
    {
        q[i]=parseInt($("#"+i).text());
        sizeNow-=q[i];
    }
//    $('#sizeNow').text(sizeNow);
});
//$('.researchImages img').on('click',function(){
//if($(this).attr('id')=='researchSelected')
//    {
//  $('.researchImages img').removeAttr('id','researchSelected');
//    }else{
//    $('.researchImages img').removeAttr('id','researchSelected');
//    $(this).attr('id','researchSelected');
//    }
//});
$('.person').on('contextmenu',function(e){
    let x = e.pageX;
    let y = e.pageY;
	let topMain = $('.main').offset().top,
		leftMain = $('.main').offset().left;
	console.log(x,y);
	if(x+260>=leftMain+624) {
		x=x-240;
	}
	if(y+325>=topMain+636) {
		y=y-305;
	}

    $('.room .about-persons').css({
        'top':y-10,
        'left':x-10,
        'display':'block'
    })
});
$('.room .about-persons ').on('mouseleave',function(){
    $('.room .about-persons').css('display','none');
});
$(document).on('contextmenu',function(e){
    e.preventDefault();
});
//$('.education').on('contextmenu',function(e){
//    let x = e.pageX;
//    let y = e.pageY;
//    $('.educationBlock').css({
//        'top':y-10,
//        'left':x-10,
//        'display':'flex'
//    })
//});
//$('.educationBlock').on('mouseleave',function(){
//    $('.educationBlock').css('display','none');
//});
//$('.work').on('contextmenu',function(e){
//    let x = e.pageX;
//    let y = e.pageY;
//    $('.educationBlock2').css({
//        'top':y-10,
//        'left':x-10,
//        'display':'flex'
//    })
//});
//$('.educationBlock2').on('mouseleave',function(){
//    $('.educationBlock2').css('display','none');
//});
//
//
//
//$('.education').on('click',function(){
//if( $(this).children('.educationChange').attr('id')=='educationChange')
//    {
//  $('.educationChange').removeAttr('id','educationChange');
//         $('#thisElement').text('не выбран');
//    }else{
//    $('.educationChange').removeAttr('id','educationChange');
//    $(this).children('.educationChange').attr('id','educationChange');
//         
//             $.getJSON('work/'+$(this).attr('href')+'.json', function(data) {
//        $.each(data, function(key, val) {
//           alert('q');
//            if(key == 'master'){
//                
//            
//              
//                $('#thisElement').text(val);
//           }
//        });
//    });        
//    }
//});
//$('.work').on('click',function(){
//if( $(this).children('.educationChange').attr('id')=='educationChange')
//    {
//  $('.educationChange').removeAttr('id','educationChange');
//    }else{
//    $('.educationChange').removeAttr('id','educationChange');
//    $(this).children('.educationChange').attr('id','educationChange');
//    }
//});
//$('.buttonBuy').on('click',function(){
//    let href = $(this).attr('href');
//    $('#'+href).css('display','none');  
//});
//
//$('.buttonEducation').on('click',function(){
//    let href = $(this).attr('href');
//    $('#'+href).css('display','flex');
//});
//
















