/*!
    PURE Unobtrusive Rendering Engine for HTML

    Licensed under the MIT licenses.
    More information at: http://www.opensource.org

    Copyright (c) 2013 Michael Cvilic - BeeBole.com

    Thanks to Rog Peppe for the functional JS jump
    revision: 2.83
*/
var $p=function(){var d=arguments,e=d[0],o=false;if(typeof e==="string")o=d[1]||false;else if(e&&!e[0]&&!e.length)e=[e];return $p.core(e,o)},pure=$p;
$p.core=function(d,e,o){function u(a){typeof console!=="undefined"&&console.log(a);throw"pure error: "+a;}function O(){var a=$p.plugins,b=function(){};b.prototype=a;b.prototype.compile=a.compile||P;b.prototype.render=a.render||Q;b.prototype.autoRender=a.autoRender||R;b.prototype.find=a.find||S;b.prototype._compiler=B;b.prototype._error=u;return new b}function G(a){return a.outerHTML||function(b){var g=document.createElement("div");g.appendChild(b.cloneNode(true));return g.innerHTML}(a)}function C(a,
b){return function(g){return a(String(b.call(g.item||g.context,g)))}}function S(a,b){if(typeof a==="string"){b=a;a=false}return(a||document).querySelectorAll(b)}function H(a,b){return function(g){var c=[a[0]],i=a.length,h,k,l,f,n;try{for(n=1;n<i;n++){h=b[n].call(this,g);k=a[n];if(h===""){l=c[c.length-1];if((f=l.search(/[^\s]+=\"?$/))>-1){c[c.length-1]=l.substring(0,f);k=k.substr(1)}}c[c.length]=h;c[c.length]=k}return c.join("")}catch(m){if(console&&console.log)console.log(m.stack||m.message+" ("+
m.type+(m.arguments?", "+m.arguments.join("-"):"")+"). Use Firefox or Chromium/Chrome to get a full stack of the error. ");return""}}}function T(a){var b=a.match(/^(\w+)\s*<-\s*(\S+)?$/);b===null&&u('bad loop spec: "'+a+'"');b[1]==="item"&&u('"item<-..." is a reserved word for the current running iteration.\n\nPlease choose another name for your loop.');if(!b[2]||b[2].toLowerCase()==="context")b[2]=function(g){return g.context};else if(b[2]&&b[2].indexOf("context")===0)b[2]=x(b[2].replace(/^context\.?/,
""));return{name:b[1],sel:b[2]}}function x(a){if(typeof a==="function")return function(f){f=a.call(f.item||f.context||f,f);return!f&&f!==0?"":f};var b=a.match(/^[\da-zA-Z\$_\@\#][\w\$:\-\#]*(\.[\w\$:\-\#]*[^\.])*$/),g=false,c=a,i=[],h=[],k=0,l;if(b===null){if(/\'|\"/.test(c.charAt(0))){if(/\'|\"/.test(c.charAt(c.length-1))){l=c.substring(1,c.length-1);return function(){return l}}}else for(;(b=c.match(/#\{([^{}]+)\}/))!==null;){g=true;i[k++]=c.slice(0,b.index);h[k]=x(b[1]);c=c.slice(b.index+b[0].length,
c.length)}if(!g)return function(){return a};i[k]=c;return H(i,h)}b=a.split(".");return function(f){var n=f.context||f,m=f[b[0]];f=0;var s;if(m&&typeof m.item!=="undefined"){f+=1;if(b[f]==="pos")return m.pos;n=m.item}for(m=b.length;f<m;){if(!n)break;s=n[b[f]];n=typeof s==="function"?s.call(n):s;f++}return!n&&n!==0?"":n}}function D(a,b,g){var c,i,h,k,l,f=[],n,m,s,t,r;if(typeof b==="string"){c=b;(l=b.match(I))||u("bad selector syntax: "+b);i=l[1];h=l[2];k=l[3];l=l[4];if(h==="."||!h&&k)f[0]=a;else f=
o.find(a,h);if(!f||f.length===0)return u('The node "'+b+'" was not found in the template:\n'+G(a).replace(/\t/g,"  "))}else{i=b.prepend;k=b.attr;l=b.append;f=[a]}if(i||l)if(i&&l)u("append/prepend cannot take place at the same time");else if(g)u("no append/prepend/replace modifiers allowed for loop target");else l&&g&&u("cannot append with loop (sel: "+c+")");if(k){s=/^style$/i.test(k);r=(t=/^class$/i.test(k))?"className":k;n=function(j,q){j.setAttribute(J+k,q);if(j[r]&&!s)try{j[r]=""}catch(p){}if(j.nodeType===
1){j.removeAttribute(k);t&&j.removeAttribute(r)}};m=s||t?s?function(j){return j.style.cssText}:function(j){return j.className}:function(j){return j.getAttribute(k)};a=function(j){return j.replace(/\"/g,"&quot;")};i=i?function(j,q){n(j,q+m(j))}:l?function(j,q){n(j,m(j)+q)}:function(j,q){n(j,q)}}else{i=g?function(j,q){var p=j.parentNode;if(p){p.insertBefore(document.createTextNode(q),j.nextSibling);p.removeChild(j)}else u("The template root, can't be looped.")}:i?function(j,q){j.insertBefore(document.createTextNode(q),
j.firstChild)}:l?function(j,q){j.appendChild(document.createTextNode(q))}:function(j,q){for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(q))};a=function(j){return j}}return{attr:k,nodes:f,set:i,sel:c,quotefn:a}}function E(a,b){var g=K+b+":",c;for(c=0;c<a.nodes.length;c++)a.set(a.nodes[c],g)}function L(a,b,g,c,i){return function(h){var k=b(h),l=h[a],f={items:k},n=0,m,s=[],t=function(j,q,p,y){var z=h.pos,v=h.item,U=h.items;h.pos=q.pos=j;h.item=q.item=k[j];h.items=
k;if(typeof y!=="undefined")h.length=y;if(typeof p==="function"&&p.call(h.item,h)===false)n++;else{s.push(g.call(h.item,h));h.pos=z;h.item=v;h.items=U}},r;h[a]=f;if(F(k)){m=k.length||0;typeof c==="function"&&k.sort(function(j,q){return c.call(h,j,q)});for(r=0;r<m;r++)t(r,f,i,m-n)}else{k&&typeof c!=="undefined"&&u("sort is only available on arrays, not objects");for(m in k)k.hasOwnProperty(m)&&t(m,f,i)}if(typeof l!=="undefined")h[a]=l;else delete h[a];return s.join("")}}function M(a,b,g,c){var i=false,
h,k,l,f,n;for(f in g)if(g.hasOwnProperty(f))if(f==="sort")k=g.sort;else if(f==="filter")l=g.filter;else if(i)u("cannot have more than one loop on a target");else{h=f;i=true}h||u("Error in the selector: "+b+"\nA directive action must be a string, a function or a loop(<-)");i=g[h];if(typeof i==="string"||typeof i==="function"){g={};g[h]={root:i};return M(a,b,g,c)}g=T(h);h=x(g.sel);a=D(a,b,true);b=a.nodes;for(w=0;w<b.length;w++){f=b[w];n=B(f,i);c[c.length]=C(a.quotefn,L(g.name,h,n,k,l));a.nodes=[f];
E(a,c.length-1)}return a}function V(a,b){function g(j,q){var p=j.match(I);p={prepend:!!p[1],prop:p[2],attr:p[3]||W[q],append:!!p[4],sel:j};var y,z,v;for(y=h.a.length-1;y>=0;y--){z=h.a[y];v=(v=z.l[0])&&v[p.prop];if(typeof v!=="undefined"){p.prop=z.p+"."+p.prop;if(h.l[p.prop]===true)v=v[0];break}}if(typeof v==="undefined"){v=x(p.prop)(F(b)?b[0]:b);if(v==="")return false}if(F(v)){h.a.push({l:v,p:p.prop});h.l[p.prop]=true;p.t="loop"}else p.t="str";return p}var c=a.getElementsByTagName("*"),i=[],h={a:[],
l:{}},k,l,f,n,m,s,t,r;f=-1;for(n=c.length;f<n;f++){t=f>-1?c[f]:a;if(t.nodeType===1&&t.className!==""){r=t.className.split(" ");m=0;for(s=r.length;m<s;m++){k=r[m];k=g(k,t.tagName);if(k!==false){l=/nodevalue/i.test(k.attr);if(k.sel.indexOf("@")>-1||l){t.className=t.className.replace("@"+k.attr,"");if(l)k.attr=false}i.push({n:t,cspec:k})}}}}return i}function B(a,b,g,c){var i=[],h,k,l,f,n,m,s,t,r,j=[];c=c||g&&V(a,g);if(g)for(;c.length>0;){l=c[0].cspec;f=c[0].n;c.splice(0,1);if(l.t==="str"){f=D(f,l,false);
E(f,i.length);i[i.length]=C(f.quotefn,x(l.prop))}else{m=x(l.sel);f=D(f,l,true);n=f.nodes;h=0;for(k=n.length;h<k;h++){s=n[h];t=B(s,false,g,c);i[i.length]=C(f.quotefn,L(l.sel,m,t));f.nodes=[s];E(f,i.length-1)}}}for(r in b)if(b.hasOwnProperty(r)){g=0;c=b[r];l=r.split(/\s*,\s*/);m=l.length;do if(typeof c==="function"||typeof c==="string"){r=l[g];f=D(a,r,false);E(f,i.length);i[i.length]=C(f.quotefn,x(c))}else M(a,r,c,i);while(++g<m)}a=G(a);a=a.replace(/<([^>]+)\s(value\=""|selected)\s?([^>]*)>/ig,"<$1 $3>");
a=a.split(J).join("");a=a.split(K);for(g=1;g<a.length;g++){b=a[g];j[g]=i[parseInt(b,10)];a[g]=b.substring(b.indexOf(":")+1)}return H(a,j)}function P(a,b,g){var c=B((g||this[0]).cloneNode(true),a,b);return function(i){return c({context:i})}}function Q(a,b){var g=typeof b==="function"&&b,c,i;c=0;for(i=this.length;c<i;c++)this[c]=N(this[c],(g||o.compile(b,false,this[c]))(a,false));return this}function R(a,b){var g=o.compile(b,a,this[0]),c,i;c=0;for(i=this.length;c<i;c++)this[c]=N(this[c],g(a,false));
return this}function N(a,b){var g,c=a.parentNode,i=0,h;if(!c){c=document.createElement("DIV");c.appendChild(a)}switch(a.tagName){case "BODY":c.removeChild(a);c.innerHTML+=b;return c.getElementsByTagName("BODY")[0];case "TBODY":case "THEAD":case "TFOOT":b="<TABLE>"+b+"</TABLE>";i=1;break;case "TR":b="<TABLE><TBODY>"+b+"</TBODY></TABLE>";i=2;break;case "TD":case "TH":b="<TABLE><TBODY><TR>"+b+"</TR></TBODY></TABLE>";i=3;break;case "OPTGROUP":case "OPTION":b="<SELECT>"+b+"</SELECT>";i=1;break}h=document.createElement("SPAN");
h.style.display="none";document.body.appendChild(h);h.innerHTML=b;for(g=h.firstChild;i--;)g=g.firstChild;c.insertBefore(g,a);c.removeChild(a);document.body.removeChild(h);return a=g}var A=[],w,K="_s"+Math.floor(Math.random()*1E6)+"_",J="_a"+Math.floor(Math.random()*1E6)+"_",I=/^(\+)?([^\@\+]+)?\@?([^\+]+)?(\+)?$/,W={IMG:"src",INPUT:"value"},F=Array.isArray?function(a){return Array.isArray(a)}:function(a){return Object.prototype.toString.call(a)==="[object Array]"};o=o||O();switch(typeof d){case "string":A=
o.find(e||document,d);A.length===0&&u('The template "'+d+'" was not found');break;case "undefined":u("The root of the template is undefined, check your selector");break;default:A=d}w=0;for(d=A.length;w<d;w++)o[w]=A[w];o.length=d;return o};$p.plugins={};
$p.libs={dojo:function(){return function(d,e){return dojo.query(e,d)}},domassistant:function(){DOMAssistant.attach({publicMethods:["compile","render","autoRender"],compile:function(d,e){return $p([this]).compile(d,e)},render:function(d,e){return $($p([this]).render(d,e))[0]},autoRender:function(d,e){return $($p([this]).autoRender(d,e))[0]}});return function(d,e){return $(d).cssSelect(e)}},ext:function(){return function(d,e){return Ext.query(e,d)}},jquery:function(){jQuery.fn.extend({directives:function(d){this._pure_d=
d;return this},compile:function(d,e){return $p(this).compile(this._pure_d||d,e)},render:function(d,e){return jQuery($p(this).render(d,this._pure_d||e))},autoRender:function(d,e){return jQuery($p(this).autoRender(d,this._pure_d||e))}});return function(d,e){return jQuery(d).find(e)}},mootools:function(){Element.implement({compile:function(d,e){return $p(this).compile(d,e)},render:function(d,e){return $p([this]).render(d,e)},autoRender:function(d,e){return $p([this]).autoRender(d,e)}});return function(d,
e){return $(d).getElements(e)}},prototype:function(){Element.addMethods({compile:function(d,e,o){return $p([d]).compile(e,o)},render:function(d,e,o){return $p([d]).render(e,o)},autoRender:function(d,e,o){return $p([d]).autoRender(e,o)}});return function(d,e){d=d===document?d.body:d;return typeof d==="string"?$$(d):$(d).select(e)}},sizzle:function(){return function(d,e){return Sizzle(e,d)}},sly:function(){return function(d,e){return Sly(e,d)}},yui:function(){typeof document.querySelector==="undefined"&&
YUI().use("node",function(d){$p.plugins.find=function(e,o){return d.NodeList.getDOMNodes(d.one(e).all(o))}});YUI.add("pure-yui",function(d){d.Node.prototype.directives=function(e){this._pure_d=e;return this};d.Node.prototype.compile=function(e,o){return $p([this._node]).compile(this._pure_d||e,o)};d.Node.prototype.render=function(e,o){return d.one($p([this._node]).render(e,this._pure_d||o))};d.Node.prototype.autoRender=function(e,o){return d.one($p([this._node]).autoRender(e,this._pure_d||o))}},"0.1",
{requires:["node"]});return true}};
(function(){var d,e=typeof dojo!=="undefined"&&"dojo"||typeof DOMAssistant!=="undefined"&&"domassistant"||typeof Ext!=="undefined"&&"ext"||typeof jQuery!=="undefined"&&"jquery"||typeof MooTools!=="undefined"&&"mootools"||typeof Prototype!=="undefined"&&"prototype"||typeof Sizzle!=="undefined"&&"sizzle"||typeof Sly!=="undefined"&&"sly"||typeof YUI!=="undefined"&&"yui";if(e)d=$p.libs[e]();if(typeof document.querySelector==="undefined")if(typeof d==="function")$p.plugins.find=d;else if(!d)throw"you need a JS library with a CSS selector engine";
if(typeof exports!=="undefined")exports.$p=$p})();
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
        imager("/img/room/vibro_plate.png", 412, 285, 0.7, "Vibro Plate", "This is a vibro plate.", 250, 0, 1);
        imager("/img/room/table_PC.png", 210, 263, 1, "Table PC", "This is a table PC.", 250, 0, 2);
        imager("/img/room/bed.png", 411, 253, 1, "Bed", "This is a bed.", 250, 0, 2);
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
        stage.setChildIndex(bitmap, event.target.getAttribute('zi'));
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
                $('.room .about-room-things h3.name').text(this.name);
                $('.room .about-room-things span').text(this.description + ' It coast is ' + this.money + '$');
                $('.room .about-room-things').css({
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

// var elements = document.querySelectorAll('.room-svg');
// elements.forEach(function (elem) {
//     elem.addEventListener("load", function () {
//         var svgDocument     = elem.contentDocument,
//             svgElement      = svgDocument.querySelector('svg'),
//             svgTitle        = svgDocument.querySelector('title').textContent,
//             innerSvgElement = svgDocument.getElementById(svgTitle),
//             allPath         = svgDocument.querySelectorAll('path');

//         elem.style.cursor = "pointer";
//         innerSvgElement.addEventListener('mouseenter', function() {
//             elem.classList.add('red');
//         });
//         innerSvgElement.addEventListener('mouseleave', function() {
//             elem.classList.remove('red');
//         });
//     });
// });