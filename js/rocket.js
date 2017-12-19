function Rocket() {

    var self = this;
    this.src = '/img/Stages/Stage 1/';
    this.lang = 'ru';

    this.clickImgRoket = function(event) {
        var href = this.href;
        if(href === 1) {
            return;
        } else {
            if(href === 0) {

                var id = this.id;
                self.textForItemRocket(id).then(function(text){

                    self.contextMenu(event,text,id);
                });

            }
        }

    }   
    this.buyItemRocket = function() {
        var id = $('#buyButton').attr('href');
        var redItem = id.slice(0,11),
            mainItem =id.slice(0,10) ;
        $('#'+redItem+'r').remove();
        $('#'+id).remove();
        $('#'+mainItem).css('display','block');

        self.arrayElements[mainItem] = 1;
        self.mouseLeave();
    } 

    this.toLevel2 = function() {
        if(self.scanItem(self)){
            $('#Level2').off('click',self.toLevel2);
            self.level = 1;
            self.animateRocket(self).then(function(){
               self.getElementsConditionLevel2(); 
            });
        }
    }
}
Rocket.prototype.removeItemAddbigItem = function(self) {

    return new Promise(function(resolve){
        var arr = self.arrayElements;
        var counter = 0
        for(var key in arr) {

            if(counter>2) {
                $('#'+key).remove();

            }
            counter++;
        }
        var string = 'S2a_part_0';
        var src = '/img/Stages/Stage 2a/';
        for(var i = 1;i <5;i++) { 
            var element =  document.createElement('img');
            element.id = string+i;
            element.src  = src+string+i+'.png' 
            $('#laboratory').append(element);
        }
        return resolve();
    });
}
Rocket.prototype.scanItem = function(self) {
    for(var key in self.arrayElements){
        if(self.arrayElements[key] === 0){
            return 0; 
        }
    }
    return 1;
}
Rocket.prototype.offButton = function() {
    if(this.level){
        $('#Level2').off('click',toLevel2);
    }
}
Rocket.prototype.contextMenu = function(e,text,id) {

    let x = e.pageX;
    let y = e.pageY;
    let topMain = $('.main').offset().top,
        leftMain = $('.main').offset().left;
    if(x+260>=leftMain+624) {
        x=x-240;
    }
    if(y+325>=topMain+636) {
        y=y-305;
    }
    var redItem = id.slice(0,11);
    $('#buyButton').attr('href',id);
    $('#'+id).css('display','none');
    $('#'+redItem+'r').css('display','block');
    $('.room .about-rocket span').text(text);
    $('.room .about-rocket').css({
        'top':y-10,
        'left':x-10,
        'display':'flex',

    });
}
Rocket.prototype.mouseLeave = function() {
    var id = $('#buyButton').attr('href');
    var redItem = id.slice(0,11);
    $('#'+id).css('display','block');

    $('#'+redItem+'r').css('display','none');
    $('.room .about-rocket').css('display','none');
}
Rocket.prototype.textForItemRocket = function(id) {
    var lang = this.lang;
    return new Promise(function(resolve){

        $.getJSON('lang/'+lang+'.json', function(data) {
            $.each(data, function(key, val) {
                if(key == id) {
                    return resolve(val);
                } 

            });
        });
    });
}
Rocket.prototype.getElementsCondition = function() {
    var self = this;
    return new Promise(function(resolve){

        self.level = 0;
        self.arrayElements = {
            S1_part_01: 1, 
            S1_part_02: 1,
            S1_part_03: 1,
            S1_part_04: 1,
            S1_part_05: 1,
            S1_part_06: 1,
            S1_part_07: 1,
            S1_part_08: 1,
            S1_part_09: 1,     
        };
        return resolve();
    });
}
Rocket.prototype.getElementsConditionLevel2 = function() {
    var self = this;
    return new Promise(function(resolve){

        self.level = 0;
        self.arrayElements = {
            S2b_part_01: 0, 
            S2b_part_02: 0,
            S2b_part_03: 0,
            S2b_part_04: 0,
            S2b_part_05: 0,
            S2b_part_06: 0,
            S2b_part_07: 0,
            S2b_part_08: 0,
            S2b_part_09: 0,
            S2b_part_10: 0,     
        };
        return resolve();
    });
}
Rocket.prototype.outputImgRoket = function() {
    var src = this.src;
    var self = this;
    return new Promise(function(resolve){
        var arr = self.arrayElements;
        for(var key in arr) {
            if(arr[key] === 1) {
                var element =  document.createElement('img');
                element.id = key;
                element.className = key + 'img';
                element.href = 1; 
                element.src  = src+key+'.png' 
                $('#laboratory').append(element);
            } else {
                var element =  document.createElement('img');
                element.id = key;
                element.className = key + 'img';
                element.href = 1; 
                element.style.display='none';
                element.src  =  src+key+'.png' 
                $('#laboratory').append(element);
                var element =  document.createElement('img');
                element.id = key+'_r';
                element.className = key + 'img';
                element.href = 3; 
                element.style.display='none';
                element.src  = src+key+'_r'+'.png' 
                $('#laboratory').append(element);
                var element =  document.createElement('img');
                element.id = key+'_w';
                element.className = key + 'img';
                element.href = 0; 
                element.src  = src+key+'_w'+'.png' 
                $('#laboratory').append(element);
            }

        }
        return resolve();
    });
}
Rocket.prototype.animateRocket = function(self) {
    return new Promise(function(resolve){
        self.removeItemAddbigItem(self).then(function(){

            $('#S1_part_01').animate({
                bottom:'-600px'
            },10000);
            $('#S1_part_02').animate({
                bottom:'-520px'
            },10000);
            $('#S1_part_03').animate({
                top:'+600px'
            },10000);

            return resolve();

        })
            .then(function(){
            setTimeout(function(){
                $('#S2a_part_01').animate({
                    top:'+800px'
                },2000);
                $('#S2a_part_02').animate({
                    right:'-300px'
                },2000);
                $('#S2a_part_03').animate({
                    right:'+610px'
                },2000);
            },10000);
            return resolve();
        })
            .then(function() {
            setTimeout(function(){
                $('#S2a_part_04').animate({
                    width:'148px',
                    right:'229px'
                },2000); 
            },12000);
        });
        return resolve();
    }); 
}







var rocket = new Rocket();
rocket.getElementsCondition()
    .then(rocket.outputImgRoket());
$(document).on('click','#laboratory img',rocket.clickImgRoket);

$('.room .about-rocket').on('mouseleave',rocket.mouseLeave);
$('#buyButton').on('click',rocket.buyItemRocket);
$('#Level2').on('click',rocket.toLevel2);






















