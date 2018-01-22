var host = "http://"+window.location.hostname;
function addImg(id,src) {
$.ajax({
	type: "POST",
	url: host+"/getCoordinats.php",
	data:({
		id :id,
	}),
	success: function(data){
		var cord = JSON.parse(data);
		
		var img1 = document.createElement('img');
		img1.setAttribute('id',id);
		img1.setAttribute('src',src);
		
		$('.content').append(img1);
		$('#'+id).css({
			"top":cord.y+'px',
			"left":cord.x+'px'
		});
	}
});

}
addImg('test1','../img/ava.png');
addImg('test2','../img/ava.png'); 
$(".content").on('mouseup','img', function(){
	var yContent = $('.content').offset().top,
		xContent = $('.content').offset().left,
		y = $(this).offset().top-yContent,
		x = $(this).offset().left-xContent,
		id = $(this).attr('id');

	$.ajax({
		type: "POST",
		url: host+"/setCoordinats.php",
		data:({
			id :id,
			x:x,
			y:y
		})
	});
});
setTimeout(function(){
	$(".content img").draggable({
	containment:".content",
	scroll:false
});
},1000);




