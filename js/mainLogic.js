class Logic {
    constructor(user,day,money,work,study,stadyFull,stadyDist,stadyYor) {
        this.user=user; 
        this.day=day;
        this.money=money;
        this.work=work;
        this.study =study;  
        this.stadyFull =stadyFull;
        this.stadyDist = stadyDist;
        this.stadyYor =stadyYor;


    }

    startGame() {


        this.studyClosedimg();
        this.workClosedimg();
    }

    studyClosedimg() {
        for(let i = 0;i<this.study;i++) {
            $('#person'+i).addClass('personOpen');

        }
        for(let i = this.study;i<5;i++) {
            $('#person'+i).addClass('closed');
        }
    }

    workClosedimg() {
        for(let i = 0;i<this.work;i++) {
            $('#work'+i).addClass('workOpen');
        }
        for(let i = this.work;i<5;i++) {
            $('#work'+i).addClass('closed');
        }
    }

    contexmenuArticle(clickedClass, hiddenClass) {

        $('.'+ clickedClass +'').on('contextmenu',function(e){
            Promise.resolve()
                .then(()=>{
                let x = e.pageX;
                let y = e.pageY;

                let topMain = $('.main').offset().top,
                    leftMain = $('.main').offset().left,
                    id;
                let heightElem = $('.about-'+ hiddenClass).outerHeight();
                if(x+260>=leftMain+624) {
                    x=x-240;
                }
                if(y+heightElem>=topMain+636) {
                    y=y-heightElem + 20;
                }

                if(e.target.tagName ==='IMG'){
                    id =e.target.className;
                } else {
                    id =e.target.id;
                }
                $.getJSON('lang/'+lang+'.json', function(data) {
                    $.each(data, function(key, val) {
                        if(key == id) {
                            return resolve(val);
                        } 

                    });
                });
            })
                .then(()=>{
                $('.room .about-'+ hiddenClass).css({
                    'top':y-10,
                    'left':x-10,
                    'display':'block'
                });
            });
        });
        $('.room .about-'+ hiddenClass).on('mouseleave',function(){
            $('.room .about-'+ hiddenClass).css('display','none');
        });

        $(document).on('contextmenu',function(e){
            e.preventDefault();
        });

    }



}


let logic = new Logic('admin',0,0,1,1,100,0,0);
logic.startGame();

logic.contexmenuArticle('personOpen', 'persons');
logic.contexmenuArticle('relaxOpen', 'relaxs');
logic.contexmenuArticle('workOpen', 'works');