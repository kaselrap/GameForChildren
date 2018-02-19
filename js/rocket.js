function Rocket() {

    var self = this;
    this.lang = 'ru';

    this.clickImgRoket = function(event) {

        var href = this.href;

        if(href === 1) {

            var id = this.id;
                       

            self.contextMenu(event,'This item is bought',id,1);
                          

        } else {
            if(href === 0) {

                var id = this.id;
                self.textForItemRocket(id).then(function(text){

                    self.contextMenu(event,text,id,0);
                });

            }
        }

    }   
    this.buyItemRocket = function() {
		
		
		
        var id = $('#buyButton').attr('href');
			if(id!=='buyRicket') {
				if(logic.getMoney()<50) {
			return;
			
		}
		logic.setMoney(-50);
        if( level === 1) {
            var redItem = id.slice(0,12),
                mainItem =id.slice(0,11);
        }
        if(level === 2 || level == 0){
            var redItem = id.slice(0,11),
                mainItem =id.slice(0,10);  
        }
        $('#'+redItem+'r').remove();
        $('#'+id).remove();
        $('#'+mainItem).css('display','block');
        if(level === 1) {
            self.arrayElementsLevel2[mainItem] = 1;
            if(self.scanItem(self,self.arrayElementsLevel2)){
                $('#Level3').removeClass('buttonBlok');
            }
        }
        if(level === 0) {
            self.arrayElements[mainItem] = 1;
            if(self.scanItem(self,self.arrayElements)){
                $('#Level2').removeClass('buttonBlok');
            }
        }
        if(level === 2) {
            self.arrayElementsLevel3[mainItem] = 1;
        }
			}
        self.mouseLeave();
    } 

    this.toLevel2 = function() {
        if(self.scanItem(self,self.arrayElements)){
            $('#Level2').off('click',self.toLevel2);
            $('#Level1').parent(".buttonRun").removeClass('buttonLaboratoryActive');
            $('#Level2').parent(".buttonRun").addClass('buttonLaboratoryActive');
            $('#Level3').on('click',rocket.toLevel3);
            $('#Level1').addClass('buttonBlok');
            $('#Level2').removeClass('buttonBlok');

            level = 1;
            self.animateRocket(self).then(function(){
                self.getElementsConditionLevel2(); 
                return;
            }).then(function(){
                setTimeout(function(){

                    $('#S2a_part_04').remove();
                    self.outputImgRoket('/img/Stages/Stage 2b/',self.arrayElementsLevel2);
                    $(document).on('click','#laboratory img',self.clickImgRoket);
                    $('.room .about-rocket').on('mouseleave',self.mouseLeave);
                },14000);
            });
        }
    }

    this.toLevel3 = function() {
        if(self.scanItem(self,self.arrayElementsLevel2)){
            $('#Level3').off('click',self.toLevel3);
            $('#Level2').parent(".buttonRun").removeClass('buttonLaboratoryActive');
            $('#Level3').parent(".buttonRun").addClass('buttonLaboratoryActive');
            $('#Level2').addClass('buttonBlok');
            $('#Level3').removeClass('buttonBlok');
            level = 2;

            self.getElementsConditionLevel3() 
                .then(function(){



                self.outputImgRoket('/img/Stages/Stage 3/',self.arrayElementsLevel3);
                self.removeItemOfRocket(self.arrayElementsLevel2);
                $(document).on('click','#laboratory img',self.clickImgRoket);
                $('.room .about-rocket').on('mouseleave',self.mouseLeave);
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
Rocket.prototype.level2 = function() {
    var self =this;
    self.offButton();
    self.getElementsConditionLevel2().then(function() {
        self.outputImgRoket('/img/Stages/Stage 2b/',self.arrayElementsLevel2);
    });
}
Rocket.prototype.level3 = function() {
    var self =this;
    self.offButton();
    self.getElementsConditionLevel3().then(function() {
        self.outputImgRoket('/img/Stages/Stage 3/',self.arrayElementsLevel3);
    });
}
Rocket.prototype.scanItem = function(self,arr) {
    for(var key in arr){
        if(arr[key] === 0){
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
Rocket.prototype.contextMenu = function(e,text,id,flag) {

    let x = e.pageX;
    let y = e.pageY;
    let topMain = $('.main').offset().top,
        leftMain = $('.main').offset().left;
    if(x+260>=leftMain+624) {
        x=x-240;
    }
    if(y+150>=topMain+636) {
        y=y-130;
    }
    if( level === 1) {
        var redItem = id.slice(0,12);

    }
    if(level === 2 || level == 0){
        var redItem = id.slice(0,11);

    }
    if(flag ===0) {
        $('#buttonLaboratoryMenu').css('display','flex');
		 $('#buyButton').text('Buy');
        $('#buyButton').attr('href',id);
        $('#'+id).css('display','none');
        $('#'+redItem+'r').css('display','block');
        $('.room .about-rocket span').text(text);
		 $('.costRocket').text('It costs: 50 euro');
        $('.room .about-rocket').css({
            'top':y-10,
            'left':x-10,
            'display':'flex',

        });
    }
    if(flag===1) {
		
		$('#buyButton').attr('href','buyRicket');
         $('.room .about-rocket span').text(text);
		$('#buyButton').text('Close');
		 $('.costRocket').text('');
        $('.room .about-rocket').css({
            'top':y-10,
            'left':x-10,
            'display':'flex',

        });
          $('#buttonLaboratoryMenu').css('display','flex')
    }
}
Rocket.prototype.mouseLeave = function() {

    var id = $('#buyButton').attr('href');
		if(id!=='buyRicket') {
			
		
    if(level === 1) {
        var redItem = id.slice(0,12);

    }
    if(level === 2 || level == 0){
        var redItem = id.slice(0,11);

    }
    $('#'+id).css('display','block');

    $('#'+redItem+'r').css('display','none');
			}
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
            S1_part_02: 0,
            S1_part_03: 1,
            S1_part_04: 0,
            S1_part_05: 1,
            S1_part_06: 1,
            S1_part_07: 0,
            S1_part_08: 1,
            S1_part_09: 1,     
        };
        return resolve();
    });
}
Rocket.prototype.getElementsConditionLevel2 = function() {
    var self = this;
    return new Promise(function(resolve){
        self.arrayElementsLevel2 = {
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
Rocket.prototype.getElementsConditionLevel3 = function() {
    var self = this;
    return new Promise(function(resolve){
        self.level = 0;
        self.arrayElementsLevel3 = {
            S3_part_01: 0, 
            S3_part_02: 0,
            S3_part_03: 0,
            S3_part_04: 0,
            S3_part_05: 0,
            S3_part_06: 0,
            S3_part_07: 0,
            S3_part_08: 0,
            S3_part_09: 0,
            S3_part_10: 0,   
            S3_part_11: 0,   
            S3_part_12: 0,   
            S3_part_13: 0,   
            S3_part_14: 0, 
            S3_part_15: 0,  
        };
        return resolve();
    });
}
Rocket.prototype.removeItemOfRocket = function(arr) {
    for(var key in arr) {
        $('#'+key).remove();
    }
}
Rocket.prototype.outputImgRoket = function(string,arrayElements) {
    var src = string;
    var self = this;
    return new Promise(function(resolve){
        var arr = arrayElements;
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
            $('#laboratory').animate({
                backgroundPositionY:'0%'
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






var level = 0;

var rocket = new Rocket();
if(level === 0) {
    rocket.getElementsCondition()
        .then(rocket.outputImgRoket('/img/Stages/Stage 1/',rocket.arrayElements));
    $(document).on('click','#laboratory img',rocket.clickImgRoket);
    $('.room .about-rocket').on('mouseleave',rocket.mouseLeave);
    $('#buyButton').on('click',rocket.buyItemRocket);
    $('#Level2').on('click',rocket.toLevel2);
    $('#Level2').addClass('buttonBlok');
    $('#Level3').addClass('buttonBlok');

}
if(level === 1) {
    rocket.level2();
    $(document).on('click','#laboratory img',rocket.clickImgRoket);
    $('#buyButton').on('click',rocket.buyItemRocket);
    $('.room .about-rocket').on('mouseleave',rocket.mouseLeave);
    $('#Level1').parent(".buttonRun").removeClass('buttonLaboratoryActive');
    $('#Level2').parent(".buttonRun").addClass('buttonLaboratoryActive');
    $('#Level3').on('click',rocket.toLevel3);
    $('#Level3').addClass('buttonBlok');
    $('#Level1').addClass('buttonBlok');
}
if(level === 2) {
    rocket.level3();
    $(document).on('click','#laboratory img',rocket.clickImgRoket);
    $('#buyButton').on('click',rocket.buyItemRocket);
    $('.room .about-rocket').on('mouseleave',rocket.mouseLeave);
    $('#Level1').parent(".buttonRun").removeClass('buttonLaboratoryActive');
    $('#Level3').parent(".buttonRun").addClass('buttonLaboratoryActive');
    $('#Level2').addClass('buttonBlok');
    $('#Level1').addClass('buttonBlok');
}





















