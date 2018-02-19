var canvasR, stageR;
var updateL = true;
function initRoom() {
    // create stage and point it to the canvas:
    canvasR = document.getElementById("roomCanvas");
    stageR = new createjs.Stage(canvasR);
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stageR);
    // enabled mouse over / out events
    stageR.enableMouseOver(10);
    stageR.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvasR
    // load the source image:
    // var subjectIsBy = logic.request('get_params_room',{id:1});
    // console.log(logic.getRoomParams());
    imager("/img/room/vibro_plate.png", 412, 285, 0.7, "Vibro Plate", "This is a vibro plate.", 250, 0, 1);
    imager("/img/room/table_PC.png", 210, 263, 1, "Table PC", "This is a table PC.", 250, 0, 2);
    imager("/img/room/bed.png", 411, 253, 1, "Bed", "This is a bed.", 50, 0, 2);
    imager("/img/room/books.png", 266, 129, 1, "Books", "This is a books.", 250, 0, 2);
    imager("/img/room/curtain.png", 75, 116, 1, "Curtain", "This is a curtain.", 250, 0, 2);
    imager("/img/room/lamp_table.png", 198, 187, 1, "Lamp Table", "This is a lamp table.", 250, 0, 2);
    imager("/img/room/lamp_top.png", 306, 37, 1, "Lamp Top", "This is a lamp top.", 250, 0, 2);
    imager("/img/room/poster.png", 421, 171, 1, "Poster", "This is a poster.", 250, 0, 2);
    imager("/img/room/TV.png", 488, 148, 1, "TV", "This is a TV.", 250, 0, 2);
    imager("/img/room/scooter.png", 47, 306, 1, "Scooter", "This is a scooter.", 250, 0, 2);
    imager("/img/room/planet_system.png", 300, 56, 1, "Planet System", "This is a planet system.", 250, 0, 2);
    imager("/img/room/robot_vacuum_cleaner.png", 120, 341, 1, "Robot Vacuum Cleaner", "This is a robot vacuum cleaner.", 250, 0, 2);
    imager("/img/room/jetpack.png", 123, 273, 1, "Jetpack", "This is a jetpack.", 250, 0, 3);
    imager("/img/room/wardrobe.png", 533, 231, 1, "Wardrobe", "This is a wardrobe.", 250, 0, 3);
    imager("/img/room/robot.png", 472, 261, 1, "Robot", "This is a robot.", 250, 0, 4);
    imager("/img/room/sneakers.png", 431, 303, 1, "Sneakers", "This is a sneakers.", 250, 0, 4);
    imager("/img/room/guitar.png", 285, 240, 1, "Guitar", "This is a guitar.", 250, 0, 6);
    imager("/img/room/chair.png", 238, 237, 1, "Chair", "This is a chair.", 250, 0, 5);
    imager("/img/room/table.png", 270, 326, 1, "Table", "This is a table.", 250, 0, 5);
    imager("/img/room/PC.png", 168, 208, 1, "PC", "This is a PC.", 250, 0, 6);
    imager("/img/room/phone.png", 278, 296, 1, "Phone", "This is a phone.", 250, 0, 5);
    imager("/img/room/paret.png", 333, 273, 1, "Paret", "This is a paret.", 250, 0, 10);
    imager("/img/room/plate_and_cup.png", 223, 294, 1, "Plate and Cup", "This is a plate and cup.", 250, 0, 6);
    imager("/img/room/cactus.png", 137, 205, 1, "Cactus", "This is a cactus.", 250, 0, 7);
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
    stageR.addChild(container);
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
    bitmap.money = event.target.getAttribute('money');
    bitmap.buy = event.target.getAttribute('buyed');
    if ( bitmap.buy == 0 ) {
        bitmap.cursor = "pointer";
    }
    stageR.setChildIndex(bitmap, event.target.getAttribute('zi'));
    stageR.update();
    // bitmap.on("mousedown", function (evt) {
    //     this.parent.addChild(this);
    //     this.offset = {x: this.x - evt.stageRX, y: this.y - evt.stageRY};
    // });

    // // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    // bitmap.on("pressmove", function (evt) {
    //     this.x = evt.stageRX + this.offset.x;
    //     this.y = evt.stageRY + this.offset.y;
    //     console.log(this.x + ', ' +this.y);
    //     // indicate that the stageR should be updateLd on the next tick:
    //     updateL = true;
    // });
     bitmap.on("click", function (evt) {
        var self = this;
        if ( this.buy == 0 ) {
            if ( logic.getMoney() < bitmap.money ) {
                $('.room .about-room-things .buttonRun p').addClass('blocked');
                $('.room .about-room-things h4.alert b').text('There are not enough funds on your balance to make this purchase!');
                $(document).on('click', '#buyButton', function (e) {
                    e.preventDefault();
                });
            } else {
                $(document).on('click', '#buyButton', function () {
                    $('.room .about-room-things h4.alert b').text('');
                    $(this).parent().parent().css('display','none');
                    self.buy = 1;
                    updateL = true;
                    if ( self.buy == 0 && active == 0) {
                        self.filters = [Grayscale];
                    } else if ( active == 1 ) { 
                        self.filters = [RedMask];
                    }else {
                        self.filters = [Original];
                    }
                    self.cache(0, 0, self.image.width, self.image.height);
                    logic.setMoney( - bitmap.money )
                    logic.request('set_params_room', {id : 1, bed:1});
                    bitmap.cursor = "not-allowed";
                });
            }
            active = 1;
            this.filters = [RedMask];
            this.cache(0, 0, bitmap.image.width, bitmap.image.height);
            $('.room .about-room-things h3.name').text(this.name);
            $('.room .about-room-things span').text(this.description + ' It coast is ' + this.money + '$');
            $('.room .about-room-things').css({
                'display':'flex',
            });
            $(document).on('mouseleave', '.room .about-room-things', function () {
                $(this).css('display','none');
                active = 0;
                updateL = true;
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
            updateL = true;
        }
        updateL = true;
    });
    bitmap.on("mouseover", function (evt) {
        if ( this.buy == 0 ) {
            this.filters = [RedMask];
        } else {
            this.filters = [Original];
        }
        this.cache(0, 0, bitmap.image.width, bitmap.image.height);
        updateL = true;
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
        updateL = true;
    });     
    createjs.Ticker.addEventListener("tick", tick);
}
function tick(event) {
    // this set makes it so the stageR only re-renders when an event handler indicates a change has happened.
    if (updateL) {
        updateL = false; // only updateL once
        stageR.update(event);
    }
}
window.addEventListener('DOMContentLoaded', function () {
    initRoom();
});
