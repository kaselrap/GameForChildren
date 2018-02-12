// var roomElements = $('.room-svg');
// roomElements.each(function () {
//     $(this).on('click', function () {
//         var name = $(this).data('name');
//         let x = event.pageX;
//         let y = event.pageY;
//         let topMain = $('.main').offset().top,
//             leftMain = $('.main').offset().left;
//         if(x+260>=leftMain+624) {
//             x=x-240;
//         }
//         if(y+325>=topMain+636) {
//             y=y-305;
//         }
        
//         $('.room .about-room-things h3.name').text(name);
//         $('.room .about-room-things span').text('You\'re can buy this thing');
//         $('.room .about-room-things').css({
//             'top':y-10,
//             'left':x-10,
//             'display':'flex',

//         });
//     });
// });
// $(document).on('click', '#buyButton', function () {
//     var name = $(this).parent().parent().find('h3.name').text();
//     $('[data-name="' + name + '"]').removeClass('closed');
//      $('.room .about-room-things').css({
//             'display':'none',

//         });
// });
    var canvas, stage;
    var mouseTarget;    // the display object currently under the mouse, or being dragged
    var dragStarted;    // indicates whether we are currently in a drag operation
    var offset;
    var update = true;
    function init() {
        // create stage and point it to the canvas:
        canvas = document.getElementById("testCanvas");
        stage = new createjs.Stage(canvas);
        // enable touch interactions if supported on the current device:
        createjs.Touch.enable(stage);
        // enabled mouse over / out events
        stage.enableMouseOver(10);
        stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
        // load the source image:
        imager("/img/room/vibro_plate.svg", 412, 285, 0.9, "Vibro Plate", "This is a vibro plate.", 250, 0, 1);
        imager("/img/room/table_PC.svg", 210, 263, 0.7, "Table PC", "This is a table PC.", 250, 0, 2);
        imager("/img/room/bed.svg", 411, 253, 0.75, "Bed", "This is a bed.", 250, 0, 2);
        imager("/img/room/books.svg", 266, 129, 0.7, "Books", "This is a books.", 250, 0, 2);
        imager("/img/room/curtain.svg", 75, 116, 0.7, "Curtain", "This is a curtain.", 250, 0, 2);
        imager("/img/room/lamp_table.svg", 198, 187, 0.4, "Lamp Table", "This is a lamp table.", 250, 0, 2);
        imager("/img/room/lamp_top.svg", 306, 37, 0.6, "Lamp Top", "This is a lamp top.", 250, 0, 2);
        imager("/img/room/poster.svg", 421, 171, 0.5, "Poster", "This is a poster.", 250, 0, 2);
        imager("/img/room/TV.svg", 488, 148, 0.35, "TV", "This is a TV.", 250, 0, 2);
        imager("/img/room/scooter.svg", 47, 306, 0.9, "Scooter", "This is a scooter.", 250, 0, 2);
        imager("/img/room/planet_system.svg", 300, 56, 0.7, "Planet System", "This is a planet system.", 250, 0, 2);
        imager("/img/room/robot_vacuum_cleaner.svg", 120, 341, 0.3, "Robot Vacuum Cleaner", "This is a robot vacuum cleaner.", 250, 0, 2);
        imager("/img/room/jetpack.svg", 123, 273, 0.6, "Jetpack", "This is a jetpack.", 250, 0, 3);
        imager("/img/room/wardrobe.svg", 533, 231, 1.8, "Wardrobe", "This is a wardrobe.", 250, 0, 3);
        imager("/img/room/robot.svg", 472, 261, 0.65, "Robot", "This is a robot.", 250, 0, 4);
        imager("/img/room/sneakers.svg", 431, 303, 0.2, "Sneakers", "This is a sneakers.", 250, 0, 4);
        imager("/img/room/guitar.svg", 285, 240, 0.7, "Guitar", "This is a guitar.", 250, 0, 6);
        imager("/img/room/chair.svg", 238, 237, 0.7, "Chair", "This is a chair.", 250, 0, 5);
        imager("/img/room/table.svg", 270, 326, 0.7, "Table", "This is a table.", 250, 0, 5);
        imager("/img/room/PC.svg", 168, 208, 0.7, "PC", "This is a PC.", 250, 0, 6);
        imager("/img/room/phone.svg", 278, 296, 0.2, "Phone", "This is a phone.", 250, 0, 5);
        imager("/img/room/paret.svg", 333, 273, 0.4, "Paret", "This is a paret.", 250, 0, 10);
        imager("/img/room/plate_and_cup.svg", 223, 294, 0.2, "Plate and Cup", "This is a plate and cup.", 250, 0, 6);
        imager("/img/room/cactus.svg", 137, 205, 0.3, "Cactus", "This is a cactus.", 250, 0, 7);
    }
    function imager (src, x, y, scale, name, desc, money, bued, zi) {
        var image = new Image();
        image.src = src;
        image.setAttribute('x', x);
        image.setAttribute('y', y);
        image.setAttribute('scale', scale);
        image.setAttribute('name', name);
        image.setAttribute('description', desc);
        image.setAttribute('money', money);
        image.setAttribute('buyed', bued);
        image.setAttribute('zi', zi);
        image.onload = handleImageLoad;
    }
    function stop() {
        createjs.Ticker.removeEventListener("tick", tick);
    }
    function handleImageLoad(event) {
        var image = event.target;
        var bitmap;
        var container = new createjs.Container();
        var buy = event.target.getAttribute('buyed');
        var active = 0;
        var Grayscale = new createjs.ColorMatrixFilter([
                0.30,0.30,0.30,0,0, // red component
                0.30,0.30,0.30,0,0, // green component
                0.30,0.30,0.30,0,0, // blue component
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
            if ( buy == 0 ) {
                bitmap.filters = [Grayscale];
            } else {
                bitmap.filters = [Original];
            }
            bitmap.cache(0, 0, bitmap.image.width, bitmap.image.height);
            bitmap.name = event.target.getAttribute('name');
            bitmap.description=event.target.getAttribute('description');
            bitmap.cursor = "pointer";
            bitmap.money = event.target.getAttribute('money');
            bitmap.buy = event.target.getAttribute('buyed');
            container.setChildIndex(bitmap, event.target.getAttribute('zi'));
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
                var self = this;
                if ( this.buy == 0 ) {
                    console.log(this.x);
                    active = 1;
                    this.filters = [RedMask];
                    this.cache(0, 0, bitmap.image.width, bitmap.image.height);
                    let x = this.x;
                    let y = this.y;
                    let topMain = $('.main').offset().top,
                        leftMain = $('.main').offset().left;
                    if(x+260>=leftMain+624) {
                        x=x+240;
                    }
                    if(y+325>=topMain+636) {
                        y=y+305;
                    }
                    $('.room .about-room-things h3.name').text(this.name);
                    $('.room .about-room-things span').text(this.description + ' It coast is ' + this.money + '$');
                    $('.room .about-room-things').css({
                        'top':260,
                        'left':260,
                        'display':'flex',
                    });
                    $(document).on('click', '#buyButton', function () {
                        $(this).parent().parent().css('display','none');
                        self.buy = 1;
                        update = true;
                        if ( self.buy == 0 && active == 0) {
                            self.filters = [Grayscale];
                        } else if ( active == 1 ) { 
                            self.filters = [RedMask];
                        }else {
                            self.filters = [Original];
                        }
                        self.cache(0, 0, self.image.width, self.image.height);
                    });
                    $(document).on('mouseleave', '.room .about-room-things', function () {
                        $(this).css('display','none');
                        active = 0;
                        update = true;
                        if ( self.buy == 0 && active == 0) {
                            self.filters = [Grayscale];
                        } else if ( active == 1 ) { 
                            self.filters = [RedMask];
                        }else {
                            self.filters = [Original];
                        }
                        self.cache(0, 0, self.image.width, self.image.height);
                    });
                } else {
                    this.filters = [Original];
                    update = true;
                }
                update = true;
            });
            bitmap.on("mouseover", function (evt) {
                if ( this.buy == 0 ) {
                    this.filters = [RedMask];
                } else {
                    this.filters = [Original];
                }
                this.cache(0, 0, bitmap.image.width, bitmap.image.height);
                update = true;
            });
            bitmap.on("mouseout", function (evt) {
                if ( this.buy == 0 && active == 0) {
                    this.filters = [Grayscale];
                } else if ( active == 1 ) { 
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
            update = false; // only update once
            stage.update(event);
        }
    }