var canvasL, stageL;
var offset;
var updateL = true;
function initLaboratory() {
    // create stage and point it to the canvas:
    canvasL = document.getElementById("laboratoryCanvas");
    stageL = new createjs.Stage(canvasL);
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stageL);
    // enabled mouse over / out events
    stageL.enableMouseOver(10);
    stageL.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    // load the source image:
    // var subjectIsBy = logic.request('get_params_room',{id:1});
    // console.log(logic.getRoomParams());
    imager("/img/lab/lab_01.png", 86, 140, 1, "lab_01", "This is a vibro plate.", 250, 0, 5);
    imager("/img/lab/lab_02.png", 188, 117, 1, "lab_02", "This is a table PC.", 250, 0, 5);
    imager("/img/lab/lab_03.png", 328, 148, 1, "lab_03", "This is a bed.", 50, 0, 5);
    imager("/img/lab/lab_04.png", 266, 129, 1, "lab_04", "This is a books.", 250, 0, 5);
    imager("/img/lab/lab_05.png", 317, 233, 1, "lab_05", "This is a curtain.", 250, 0, 5);
    imager("/img/lab/lab_06.png", 392, 139, 1, "lab_06", "This is a lamp table.", 250, 0, 5);
    imager("/img/lab/lab_07.png", 418, 112, 1, "lab_07", "This is a lamp table.", 250, 0, 5);
    imager("/img/lab/lab_08.png", 466, 177, 1, "lab_08", "This is a lamp top.", 250, 0, 5);
    imager("/img/lab/lab_09.png", 183, 169, 1, "lab_09", "This is a poster.", 250, 0, 5);
    imager("/img/lab/lab_10.png", 137, 205, 1, "lab_10", "This is a TV.", 250, 0, 5);
    imager("/img/lab/lab_11.png", 345, 138, 1, "lab_11", "This is a scooter.", 250, 0, 5);
    imager("/img/lab/lab_12.png", 518, 150, 1, "lab_12", "This is a planet system.", 250, 0, 5);
    imager("/img/lab/lab_13.png", 360, 147, 1.2, "lab_13", "This is a robot vacuum cleaner.", 250, 0, 5);
    imager("/img/lab/lab_14.png", 364, 101, 1, "lab_14", "This is a jetpack.", 250, 0, 5);
    imager("/img/lab/lab_15.png", 229, 130, 1, "lab_15", "This is a wardrobe.", 250, 0, 4);
    imager("/img/lab/lab_16.png", 245, 108, 1.2, "lab_16", "This is a robot.", 250, 0, 6);
    imager("/img/lab/lab_17.png", 228, 108, 1.2, "lab_17", "This is a sneakers.", 250, 0, 5);
    imager("/img/lab/lab_18.png", 221, 87, 1.2, "lab_18", "This is a guitar.", 250, 0, 5);
    imager("/img/lab/lab_19.png", 402, 198, 1, "lab_19", "This is a chair.", 250, 0, 5);
    imager("/img/lab/lab_20.png", 532, 171, 1, "lab_20", "This is a table.", 250, 0, 5);
    imager("/img/lab/lab_21.png", 238, 83, 1, "lab_21", "This is a PC.", 250, 0, 5);
    imager("/img/lab/lab_22.png", 340, 288, 1, "lab_22", "This is a phone.", 250, 0, 5);
    imager("/img/lab/lab_23.png", 441, 261, 1, "lab_23", "This is a paret.", 250, 0, 5);
    imager("/img/lab/lab_24.png", 535, 240, 1, "lab_24", "This is a plate and cup.", 250, 0, 5);
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
    stageL.addChild(container);
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
    stageL.setChildIndex(bitmap, event.target.getAttribute('zi'));
    stageL.update();
    // bitmap.on("mousedown", function (evt) {
    //     this.parent.addChild(this);
    //     this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    // });

    // // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    // bitmap.on("pressmove", function (evt) {
    //     this.x = evt.stageX + this.offset.x;
    //     this.y = evt.stageY + this.offset.y;
    //     console.log(Math.round(this.x) + ', ' + Math.round(this.y));
    //     // indicate that the stage should be updated on the next tick:
    //     update = true;
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
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if (updateL) {
        updateL = false; // only update once
        stageL.update(event);
    }
}
window.addEventListener('DOMContentLoaded', function () {
    initLaboratory();
});