    var roomElements = $('.room-svg');
    roomElements.each(function () {
        $(this).on('click', function () {
            var name = $(this).data('name');
            let x = event.pageX;
            let y = event.pageY;
            let topMain = $('.main').offset().top,
                leftMain = $('.main').offset().left;
            if(x+260>=leftMain+624) {
                x=x-240;
            }
            if(y+325>=topMain+636) {
                y=y-305;
            }
            
            $('.room .about-room-things h3.name').text(name);
            $('.room .about-room-things span').text('You\'re can buy this thing');
            $('.room .about-room-things').css({
                'top':y-10,
                'left':x-10,
                'display':'flex',

            });
        });
    });
    $(document).on('click', '#buyButton', function () {
        var name = $(this).parent().parent().find('h3.name').text();
        $('[data-name="' + name + '"]').removeClass('closed');
         $('.room .about-room-things').css({
                'display':'none',

            });
    });