<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        /*body {
            background-color:#333;
            text-align:center;
            color:#FFF;
            font-family:'Arial',sans-serif;
            margin:0px;
        }

        img {
            position: absolute;
            bottom: 0;left: 0;
            border: 2px solid #ffffff;
            background: #fff;
        }*/
        .content-room {
            position: absolute;
            width: 450px;
            height: 360px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .content-room img {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<div class="content content-room">
    <img src="img/room/bed.svg" alt="" data-name="Books" id="roomBed" class="room-svg room-bed closed">
    </div>
<p>Is transparent: <span id="transparent">false</span></p>
<div id="cursor" style="position: absolute;z-index: 9999;width: 10px;height:10px;display: block; background-color: #333;"></div>
        <script src="/js/jquery-3.2.1.min.js"></script>
        <script src="/js/imge_to_data_url.js"></script>


<script>
    (function() {
        $('.room-svg').each(function () {
        let $this      = $(this),
            $src       = $this.attr('src'),
            $id = $this.attr('id');
        toDataUrl($src, function($base64Img){
            $this.attr('src', $base64Img);
        })
        var img        =     new Image(),
            bImg       =     document.getElementById($id);
            console.log(bImg.top);
        img.src = bImg.src;
        img.style.top = bImg.offsetTop;
        img.style.left = bImg.offsetLeft;
        
        function isTransparent(e) {
            var x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop;
           $('#cursor').css({
                'top' : y,
                'left' : x
            });
            var canvas = document.getElementById($id + '-canvas') || (function(_this) { var e = document.createElement('canvas'); e.setAttribute('width',_this.width); e.setAttribute('height',_this.height); e.setAttribute('id',_this.id+'-canvas'); e.setAttribute('style','display:none;');document.body.appendChild(e);var cx=e.getContext('2d');cx.drawImage(_this,0,0,_this.width,_this.height); return e; })(this);
            if(canvas.getContext === undefined) { return false; }
            var ctx = canvas.getContext('2d');
            console.log(ctx.getImageData(x,y,1,1).data);
            console.log((ctx.getImageData(x,y,1,1).data[3] == 0) ? true:false);
        }
        
        function init() {
            console.log('init');
            bImg.addEventListener('mousemove',isTransparent,true);
        }
        
        img.addEventListener('load',init,true);
        });
    })();
</script>
</body>
</html>