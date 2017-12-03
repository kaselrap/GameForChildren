function changeHealth(Health) {
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
changeHealth(2);