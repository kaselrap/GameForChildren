function Rockets () {
    var canvas, stage;
    var update = true, fly = false;
    var globalActiveExplore = {explored:0};
    var level = 0;
    var explored = 0;
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
        // explored = 10;
        if (level == 3) {
            imager("/img/Stages/Stage 3/S3_part_01.png", 297, 427, .8, "S3_part_01S1_part_01", "This is a vibro plate.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_02.png", 298, 391, .8, "S3_part_02Table PC", "This is a table PC.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 3/S3_part_03.png", 298, 378, .8, "S3_part_03Car - bed", "This is a bed.", 50, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_04.png", 273, 345, .8, "S3_part_04Books", "This is a books.", 250, 0, 10, 0);
            imager("/img/Stages/Stage 3/S3_part_05.png", 314, 346, .8, "S3_part_05Curtain", "This is a curtain.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 3/S3_part_06.png", 297, 341, .8, "S3_part_06Lamp Table", "This is a lamp table.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 3/S3_part_07.png", 255, 283, .8, "S3_part_07Lamp Top", "This is a lamp top.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_08.png", 304, 283, .8, "S3_part_08 poster or  Einstein's photo ", "This is a poster.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_09.png", 299, 283, .8, "S3_part_09", "This is a TV.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 3/S3_part_10.png", 320, 193, .8, "S3_part_10", "This is a TV.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 3/S3_part_11.png", 267, 200, .8, "S3_part_11 Table", "This is a lamp table.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_12.png", 336, 155, .8, "S3_part_12 Top", "This is a lamp top.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_13.png", 299, 286, .8, "S3_part_13 poster or  Einstein's photo ", "This is a poster.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 3/S3_part_14.png", 313, 268, .8, "S3_part_14", "This is a TV.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 3/S3_part_15.png", 299, 118, .8, "S3_part_15", "This is a TV.", 250, 0, 300, 0);
        } else if (level == 2) {
            imager("/img/Stages/Stage 2b/S2b_part_01.png", 299, 256, .8, "S2b_part_01S1_part_01", "This is a vibro plate.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 2b/S2b_part_02.png", 318, 227, .8, "S2b_part_02Table PC", "This is a table PC.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 2b/S2b_part_03.png", 301, 293, .8, "S2b_part_03Car - bed", "This is a bed.", 50, 0, 8, 0);
            imager("/img/Stages/Stage 2b/S2b_part_04.png", 298, 349, .8, "S2b_part_04Books", "This is a books.", 250, 0, 10, 0);
            imager("/img/Stages/Stage 2b/S2b_part_05.png", 300, 340, .8, "S2b_part_05Curtain", "This is a curtain.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 2b/S2b_part_06.png", 298, 410, .8, "S2b_part_06Lamp Table", "This is a lamp table.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 2b/S2b_part_07.png", 300, 225, .8, "S2b_part_07Lamp Top", "This is a lamp top.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 2b/S2b_part_08.png", 245, 255, .8, "S2b_part_08Scientific poster or  Einstein's photo ", "This is a poster.", 250, 0, 8, 0);
            imager("/img/Stages/Stage 2b/S2b_part_09.png", 299, 88, .8, "S2b_part_09", "This is a TV.", 250, 0, 9, 0);
            imager("/img/Stages/Stage 2b/S2b_part_10.png", 336, 120, .8, "S2b_part_010", "This is a TV.", 250, 0, 9, 0);
        } else if (level == 1) {
            imager("/img/Stages/Stage 2a/S2a_part_04.png", 316, 153, .47, "S2a_part_04", "", 250, 0, 3, 0, 5);
            imager("/img/Stages/Stage 2a/S2a_part_01.png", 318, 356, .47, "S2a_part_01", "", 250, 0, 1, 0, 2);
            imager("/img/Stages/Stage 2a/S2a_part_02.png", 317, 123, .47, "S2a_part_02", "", 250, 0, 2, 0, 3);
            imager("/img/Stages/Stage 2a/S2a_part_03.png", 314, 123, .47, "S2a_part_03", "", 50, 0, 4, 0, 4);
        } else if (level == 0) {
            imager("/img/Stages/Stage 1/S1_part_03.png", 381, 206, .47, "Car - bed", "This is a bed.", 50, 0, 1, 0, 0);
            imager("/img/Stages/Stage 1/S1_part_01.png", 302, 476, .47, "S1_part_01", "This is a vibro plate.", 250, 0, 1, 0, 0);
            imager("/img/Stages/Stage 1/S1_part_02.png", 172, 257, .47, "Table PC", "This is a table PC.", 250, 0, 10, 0, 0);
            imager("/img/Stages/Stage 1/S1_part_04.png", 315, 218, .47, "Books", "This is a books.", 250, 0, 200, 0);
            imager("/img/Stages/Stage 1/S1_part_05.png", 315, 196, .47, "Curtain", "This is a curtain.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 1/S1_part_06.png", 318, 356, .47, "Lamp Table", "This is a lamp table.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 1/S1_part_07.png", 274, 120, .47, "Lamp Top", "This is a lamp top.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 1/S1_part_08.png", 316, 103, .47, "Scientific poster or  Einstein's photo ", "This is a poster.", 250, 0, 300, 0);
            imager("/img/Stages/Stage 1/S1_part_09.png", 315, 6, .47, "TV set", "This is a TV.", 250, 0, 300, 0);
        }
        
        createjs.Ticker.addEventListener("tick", rocketFly);
        // $('#Level2').on('click', function () {
        //     fly = true;
        // });
        if ( level == 0 && explored != 9) {
            $('#laboratory .divButtonLaboratory .buttonLaboratory p').each(function () {
                $(this).addClass('blocked');
            });
            $('#Level1').removeClass('blocked');
        } 
        if (level == 0 && explored == 9) {
            $('#Level2').removeClass('blocked');
            $('#Level2').on('click', function () {
                fly = true;
            });
            $('#laboratory .divButtonLaboratory .buttonLaboratory p').each(function () {
                $(this).addClass('blocked');
            });
            $('#Level2').removeClass('blocked');
        }
        if (level == 2 && explored == 10) {
            $('#Level3').removeClass('blocked');
            $('#Level3').on('click', function () {
                level = 3;
                init();
            }); 
            $('#laboratory .divButtonLaboratory .buttonLaboratory p').each(function () {
                $(this).addClass('blocked');
            });      
            $('#Level3').removeClass('blocked');     
        }
    }
    function imager (src, x, y, scale, name, desc, time, explored, zi, activeExplore, fly = 1) {
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
        image.setAttribute('fly', fly);
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
        bitmap = new createjs.Bitmap(image);
        stage.addChild(bitmap);
        bitmap.x = parseInt(event.target.getAttribute('x'));
        bitmap.y = parseInt(event.target.getAttribute('y'));
        bitmap.regX = bitmap.image.width / 2 | 0;
        bitmap.regY = bitmap.image.height / 2 | 0;
        bitmap.scale = bitmap.originalScale = event.target.getAttribute('scale');
        bitmap.name = event.target.getAttribute('name');
        bitmap.description=event.target.getAttribute('description');
        bitmap.time = event.target.getAttribute('time');
        bitmap.explored = event.target.getAttribute('explored');
        bitmap.activeExplore = event.target.getAttribute('activeExplore');
        bitmap.zi = parseInt(event.target.getAttribute('zi'));
        bitmap.fly = parseInt(event.target.getAttribute('fly'));
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
        stage.setChildIndex(bitmap, bitmap.zi);
        stage.update();
        bitmap.on("mousedown", function (evt) {
            this.parent.addChild(this);
            this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
        });

        // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        bitmap.on("pressmove", function (evt) {
            this.x = evt.stageX + this.offset.x;
            this.y = evt.stageY + this.offset.y;
            console.log(this.x + ', ' +this.y);
            // indicate that the stage should be updated on the next tick:
            update = true;
        });
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
            stage.sortChildren(sortByZ);
        }
    }
    function rocketFly(event) {
        // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
        if (fly && level == 0) {
            stage.children.forEach(function (evt) {
                if (evt.fly == 0) {
                    evt.y += 6;
                    if (evt.y - stage.canvas.height > stage.canvas.height) {
                        level = 1;
                        // fly = false;
                        init();
                    }
                }
            });
            stage.update(event);
        }
        if (fly && level == 1) {
            stage.children.forEach(function (evt) {
                if ( evt.fly == 2 ) {
                    evt.y += 6;
                } 
                if ( evt.fly == 3 ) {
                    evt.x += 6;
                    evt.y += 2;
                    evt.rotation += .5;
                } 
                if ( evt.fly == 4 ) {
                    evt.x -= 6;
                    evt.y += 2;
                    evt.rotation -= .5;
                    // stage.scale*=1.5;
                    if (evt.x + stage.canvas.width + 100 < stage.canvas.height) {
                        // fly = false;
                        stage.scale += .1;
                        stage.x -= 35;
                        if ( stage.scale >= 1.6 ) {
                            fly = false;
                            level = 2;
                            init();
                        }
                    }
                }
            });
            stage.update(event);
        }
    }
    function sortByZ(obj1, obj2, options) {
        if (obj1.zIndex > obj2.zIndex) { return 1; }
        if (obj1.zIndex < obj2.zIndex) { return -1; }
        return 0;
    }
    window.addEventListener('DOMContentLoaded', function () {
        init();
    });

}

var rockets = new Rockets();