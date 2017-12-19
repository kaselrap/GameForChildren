function changeHealth(Health,sex,eye,mouth) {
	switch(sex) {
		case 1: 
			$('.girl').css('display','none');
			$('.man').css('display','block');
			break;
		case 2: 
			$('.girl').css('display','block');
			$('.man').css('display','none');
			break;

	}
	switch(eye) {
		case 1: 
			$('.eyes_nor').css('display','none');
			$('.eyes_mid').css('display','block');
			$('.eyes_up').css('display','block');
			break;
		case 2: 
			$('.eyes_nor').css('display','block');
			$('.eyes_mid').css('display','none');
			$('.eyes_up').css('display','block');
			break;
		case 3: 
			$('.eyes_nor').css('display','block');
			$('.eyes_mid').css('display','block');
			$('.eyes_up').css('display','none');
			break;

	}
	switch(mouth) {
		case 1: 
			$('.mouth_smile').css('display','none');
			$('.mouth_sad').css('display','block');

			break;
		case 2: 
			$('.mouth_smile').css('display','block');
			$('.mouth_sad').css('display','none');
			break;



	}
	switch(Health) {
		case 1: 
			off();
			break;
		case 2: 
			off();
			$('.scarf').css('display','block');
			$('#tempM').css('display','block');
			break;
		case 3:
			off();
			$('.scarf').css('display','block');
			$('#tempH').css('display','block');
			break;
	}
}
function off() {
	$('.scarf').css('display','none');
	$('#tempH').css('display','none');
	$('#tempM').css('display','none');
}
changeHealth(2,1,3,2);