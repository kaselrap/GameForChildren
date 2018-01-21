var aboutStudyWindow = function () {
	// $(document).mousemove(function(e){
	//     var X = e.pageX; // положения по оси X
	//     var Y = e.pageY; // положения по оси Y
	//     var height = $(window).height();
	    // X-=290;
	//     $(document).on('click', '#person-closed', function () {
	//     	if ( (height - Y) < 325 ) {
	//     		console.log('truw');
	//     		$('.about-persons').css({"bottom":height - Y,"left":X,"display":"block"});
	//     		$('.about-persons').attr('data-before','none');
	//     		$('.about-persons').attr('data-after','block');
	//     	} else {		
	//     		$('.about-persons').css({"top":Y,"left":X,"display":"block"});
	//     		$('.about-persons').attr('data-before','block');
	//     		$('.about-persons').attr('data-after','none');
	//     	}
	//     	$('.overlay').css({'display':'block'});
	//     });
	    // $(document).on('click', '.overlay', function () {
    	// 	$('.about-persons').css({"display":"none", 'top' : 'inherit', 'bottom' : 'inherit', 'left': 'inherit'});
	    // 	$('.overlay').css({'display':'none'});
	    // 	$('.about-persons').attr('data-after','none');
	    // 	$('.about-persons').attr('data-before','none');
	    // });

	// });
//	$(document).on('click', '#person-closed', function (e) {
//	    var X = e.pageX; // положения по оси X
//    	var Y = e.pageY; // положения по оси Y
//	    var height = $(window).height();
//	    X-=290;
//    	if ( (height - Y) < 325 ) {
//    		console.log('truw');
//    		$('.about-persons').css({"bottom":height - Y,"left":X,"display":"block"});
//    		$('.about-persons').addClass('block-after');
//    	} else {		
//    		$('.about-persons').css({"top":Y,"left":X,"display":"block"});
//    		$('.about-persons').addClass('block-before');
//    	}
//    	$('.overlay').css({'display':'block'});
//    });
$(document).on('click', '.overlay, .buttonStudy', function () {
		$('.about-persons').css({"display":"none", 'top' : 'inherit', 'bottom' : 'inherit', 'left': 'inherit'});
    	$('.overlay').css({'display':'none'});
    	$('.about-persons').removeClass('block-after');
		$('.about-persons').removeClass('block-before');
    });
}
var activeRadioButton = function () {
	$(document).on('click', '.choose-radio-button', function () {
		var activeBtn = $('.about-persons').find('div[data-active=1]');
		activeBtn.children().remove();
		activeBtn.attr('data-active', '0');
		$(this).prepend('<div class="active-rbtn"></div>');
		$(this).attr('data-active', 1);
	});
}
activeRadioButton();
aboutStudyWindow();