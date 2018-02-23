function Rockets () {
    var canvas, stage;
    var update = true;
    var globalActiveExplore = {explored:0};
    var allBuyed = true;
    function init() {
        // create stage and point it to the canvas:
        canvas = document.getElementById("rocketCanvas");
        stage = new createjs.Stage(canvas);
        // enable touch interactions if supported on the current device:
        createjs.Touch.enable(stage);
        // enabled mouse over / out events
        stage.enableMouseOver(10);
        stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
        // load the source image:
        // var subjectIsBy = logic.request('get_params_room',{id:1});
        // console.log(logic.getRoomParams());
        imager("/img/Stages/Stage 1/S1_part_03.png", 381, 206, .47, "Car - bed", "This is a bed.", 50, 0, 1, 0);
        imager("/img/Stages/Stage 1/S1_part_01.png", 302, 476, .47, "S1_part_01", "This is a vibro plate.", 250, 0, 1, 0);
        imager("/img/Stages/Stage 1/S1_part_02.png", 172, 257, .47, "Table PC", "This is a table PC.", 250, 0, 10, 0);
        imager("/img/Stages/Stage 1/S1_part_04.png", 315, 218, .47, "Books", "This is a books.", 250, 0, 200, 0);
        imager("/img/Stages/Stage 1/S1_part_05.png", 315, 196, .47, "Curtain", "This is a curtain.", 250, 0, 300, 0);
        imager("/img/Stages/Stage 1/S1_part_06.png", 318, 356, .47, "Lamp Table", "This is a lamp table.", 250, 0, 300, 0);
        imager("/img/Stages/Stage 1/S1_part_07.png", 274, 120, .47, "Lamp Top", "This is a lamp top.", 250, 0, 300, 0);
        imager("/img/Stages/Stage 1/S1_part_08.png", 316, 103, .47, "Scientific poster or  Einstein's photo ", "This is a poster.", 250, 0, 300, 0);
        imager("/img/Stages/Stage 1/S1_part_09.png", 315, 6, .47, "TV set", "This is a TV.", 250, 0, 300, 0);
        
    }
    function imager (src, x, y, scale, name, desc, time, explored, zi, activeExplore) {
        var image = new Image();
        image.src = src;
        image.setAttribute('x', x);
        image.setAttribute('y', y);
        image.setAttribute('scale', scale);
        image.setAttribute('name', name);
        image.setAttribute('description', desc);
        image.setAttribute('time', time);
        image.setAttribute('explored', explored);
        image.setAttribute('zi', zi);
        image.setAttribute('activeExplore', activeExplore);
        image.onload = handleImageLoad;
    }
    function stop() {
        createjs.Ticker.removeEventListener("tick", tick);
    }
    function handleImageLoad(event) {
        var image = event.target;
        var bitmap;
        var container = new createjs.Container();
        var explored = event.target.getAttribute('explored');
        var active = 0;
        var selfArray = {};
        var WhiteMask = new createjs.ColorMatrixFilter([
                0.70,0.70,0.70,0,0, // red component
                0.70,0.70,0.70,0,0, // green component
                0.70,0.70,0.70,0,0, // blue component
                0,0,0,1,0  // alpha
        ]);
        var Original = new createjs.ColorFilter();
        var RedMask = new createjs.ColorFilter(0,0,0,1,255,0,0,0);
        stage.addChild(container);
        bitmap = new createjs.Bitmap(image);
        container.addChild(bitmap);
        bitmap.x = event.target.getAttribute('x');
        bitmap.y = event.target.getAttribute('y');
        bitmap.regX = bitmap.image.width / 2 | 0;
        bitmap.regY = bitmap.image.height / 2 | 0;
        bitmap.scale = bitmap.originalScale = event.target.getAttribute('scale');
        bitmap.name = event.target.getAttribute('name');
        bitmap.description=event.target.getAttribute('description');
        bitmap.time = event.target.getAttribute('time');
        bitmap.explored = event.target.getAttribute('explored');
        bitmap.activeExplore = event.target.getAttribute('activeExplore');
        if ( bitmap.explored == 0 ) {
            bitmap.cursor = "pointer";
        }
        if ( bitmap.activeExplore == 1 ) {
            globalActiveExplore.explored = 1;
            globalActiveExplore.name = bitmap.name;
            globalActiveExplore.time = bitmap.time;
        }
        if ( bitmap.explored == 0 && bitmap.activeExplore == 0 ) {
            bitmap.filters = [WhiteMask];
        } else if ( bitmap.explored == 0 && bitmap.activeExplore == 1 ) {
            bitmap.filters = [RedMask];
        } else {
            bitmap.filters = [Original];
        }
        bitmap.cache(0, 0, bitmap.image.width, bitmap.image.height);
        stage.setChildIndex(bitmap, event.target.getAttribute('zi'));
        stage.update();
        // bitmap.on("mousedown", function (evt) {
        //     this.parent.addChild(this);
        //     this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
        // });

        // // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        // bitmap.on("pressmove", function (evt) {
        //     this.x = evt.stageX + this.offset.x;
        //     this.y = evt.stageY + this.offset.y;
        //     console.log(this.x + ', ' +this.y);
        //     // indicate that the stage should be updated on the next tick:
        //     update = true;
        // });
         bitmap.on("click", function (evt) {
            let self = this;
            if ( this.explored == 0 && globalActiveExplore.explored == 0 ) {
                if ( self.activeExplore == 1 ) {
                    $('.room .about-rocket-things .buttonRun').remove();
                    $('.room .about-rocket-things h4.alert b').text(this.time + ' hours left to explore');
                } else {
                    $(document).on('click', '#buyButton', function () {
                        let thisName = $('.room .about-rocket-things .name').text();
                        if ( thisName == self.name ) {
                            $('.room .about-rocket-things h4.alert b').text('');
                            $(this).parent().parent().css('display','none');

                            self.explored = 1;
                            self.activeExplore = 1;
                            globalActiveExplore.explored = 1;
                            globalActiveExplore.name = self.name;
                            globalActiveExplore.time = self.time;
                            update = true;
                            if ( self.explored == 0 && active == 0) {
                                self.filters = [WhiteMask];
                            } else if ( explored == 1 || self.activeExplore == 1 ) { 
                                self.filters = [RedMask];
                            }else  {
                                self.filters = [Original];
                            }
                            self.cache(0, 0, self.image.width, self.image.height);
                        }
                    });
                }
                active = 1;
                this.filters = [RedMask];
                this.cache(0, 0, bitmap.image.width, bitmap.image.height);
				let topMain = $('.main').offset().top,
					leftMain = $('.main').offset().left;
				let x = parseInt(evt.rawX)+leftMain;
				let y = parseInt(evt.rawY)+topMain+175;
				
				let width  = $('.room .about-rocket-things').width(),
					height = $('.room .about-rocket-things').height();
				
				if(x+260>=leftMain+624) {
				  x=x-220;
				}
				if(y+250>=topMain+636) {
					y=y-220;
				}
				
                $('.room .about-rocket-things h3.name').text(this.name);
                $('.room .about-rocket-things span').text(this.description + ' Time to explore the thing is ' + this.time + ' hours');
                $('.room .about-rocket-things').css({
					'left':x,
					'top':y,
                    'display':'flex',
                });
                $(document).on('mouseleave', '.room .about-rocket-things', function () {
                    $(this).css('display','none');
                    $('.room .about-rocket-things .buttonRun p').removeClass('blocked');
                    $('.room .about-rocket-things h4.alert b').text('');
                    $('.room .about-rocket-things span').text('');
                    active = 0;
                    self.explored = 0;
                    if ( self.explored == 0 && active == 0 && self.activeExplore == 0 ) {
                        self.filters = [WhiteMask];
                    } else if ( active == 1 || self.activeExplore == 1 ) { 
                        self.filters = [RedMask];
                    }else {
                        self.filters = [Original];
                    }
                    self.cache(0, 0, self.image.width, self.image.height);
                    update = true;
                    return;
                });
            } else if ( this.explored == 0 && globalActiveExplore.explored == 1 ) {
                if ( self.activeExplore == 1 ) {
                    $('.room .about-rocket-things .buttonRun').remove();
                    $('.room .about-rocket-things h4.alert b').text(this.time + ' hours left to explore');
                } else {
                    $('.room .about-rocket-things h3.name').text(this.name);
                    $('.room .about-rocket-things .buttonRun').remove();
                    $('.room .about-rocket-things h4.alert b').text('The ' + globalActiveExplore.name + ' is currently being explored. ' + globalActiveExplore.time + ' hours left to explore. Wait please.');
                }
                active = 1;
                this.filters = [RedMask];
                this.cache(0, 0, bitmap.image.width, bitmap.image.height);
                let topMain = $('.main').offset().top,
                    leftMain = $('.main').offset().left;
                let x = parseInt(evt.rawX)+leftMain;
                let y = parseInt(evt.rawY)+topMain+175;
                
                let width  = $('.room .about-rocket-things').width(),
                    height = $('.room .about-rocket-things').height();
                
                if(x+260>=leftMain+624) {
                  x=x-220;
                }
                if(y+250>=topMain+636) {
                    y=y-220;
                }
                
                $('.room .about-rocket-things h3.name').text(this.name);
                $('.room .about-rocket-things span').text(this.description + ' Time to explore the thing is ' + this.time + ' hours');
                $('.room .about-rocket-things').css({
                    'left':x,
                    'top':y,
                    'display':'flex',
                });
                $(document).on('mouseleave', '.room .about-rocket-things', function () {
                    $(this).css('display','none');
                    $('.room .about-rocket-things .buttonRun p').removeClass('blocked');
                    $('.room .about-rocket-things h4.alert b').text('');
                    $('.room .about-rocket-things span').text('');
                    active = 0;
                    if ( self.explored == 0 && active == 0 && self.activeExplore == 0 ) {
                        self.filters = [WhiteMask];
                    } else if ( active == 1 || self.activeExplore == 1 ) { 
                        self.filters = [RedMask];
                    }else {
                        self.filters = [Original];
                    }
                    self.cache(0, 0, self.image.width, self.image.height);
                    update = true;
                    return;
                });
            } else {
                let topMain = $('.main').offset().top,
                    leftMain = $('.main').offset().left;
                let x = parseInt(evt.rawX)+leftMain;
                let y = parseInt(evt.rawY)+topMain+175;
                
                let width  = $('.room .about-rocket-things').width(),
                    height = $('.room .about-rocket-things').height();
                
                if(x+260>=leftMain+624) {
                  x=x-220;
                }
                if(y+250>=topMain+636) {
                    y=y-220;
                }
                
                $('.room .about-rocket-things h3.name').text('This thing is bought');
                $('.room .about-rocket-things span').text('');
                $('.room .about-rocket-things').css({
                    'left':x,
                    'top':y,
                    'display':'flex',
                });
                $(document).on('mouseleave', '.room .about-rocket-things', function () {
                    $(this).css('display','none');
                    $('.room .about-rocket-things .buttonRun p').removeClass('blocked');
                    $('.room .about-rocket-things h4.alert b').text('');
                    $('.room .about-rocket-things span').text('');
                    active = 0;
                    if ( self.explored == 0 && active == 0 && self.activeExplore == 0 ) {
                        self.filters = [WhiteMask];
                    } else if ( active == 1 || self.activeExplore == 1 ) { 
                        self.filters = [RedMask];
                    }else {
                        self.filters = [Original];
                    }
                    self.cache(0, 0, self.image.width, self.image.height);
                    update = true;
                    return;
                });
                this.filters = [Original];
                update = true;
            }
            update = true;
        });
        bitmap.on("mouseover", function (evt) {
            if ( this.explored == 0 || this.activeExplore == 1 ) {
                this.filters = [RedMask];
            } else {
                this.filters = [Original];
            }
            this.cache(0, 0, bitmap.image.width, bitmap.image.height);
            update = true;
        });
        bitmap.on("mouseout", function (evt) {
            if ( this.explored == 0 && active == 0 && this.activeExplore == 0 ) {
                this.filters = [WhiteMask];
            } else if ( active == 1 || this.activeExplore == 1 ) { 
                this.filters = [RedMask];
            }else {
                this.filters = [Original];
            }
            this.cache(0, 0, bitmap.image.width, bitmap.image.height);
            update = true;
        });     
        createjs.Ticker.addEventListener("tick", tick);
    }
    function tick(event) {
        // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
        if (update) {
            self = null;
            update = false; // only update once
            stage.update(event);
        }
    }
    window.addEventListener('DOMContentLoaded', function () {
        init();
    });

}

var rockets = new Rockets();