class Logic {
    constructor(user,day,money,work,study,stadyFull,stadyDist,stadyYor,lang) {
        this.user=user; 
        this.day=day;
        this.money=money;
        this.work=work;
        this.study =study;  
        this.stadyFull =stadyFull;
        this.stadyDist = stadyDist;
        this.stadyYor =stadyYor;
        this.lang = lang;

    }

    startGame() {


        this.studyClosedimg();
        this.workClosedimg();
        this.aboutStudyWindow();
        this.activeRadioButton();
        this.startTexrStudy();
    }

    startTexrStudy() {
        Promise.resolve()
        .then(()=>{
            return $.getJSON('./lang/'+this.lang+'.json'); 
        })
        .then((val)=>{
            
       
        $('.room-description').children('.type').text(val['person'+(this.study-1)].name );
        $('.room-description').children('.cost').children('.amount').text(val['person'+(this.study-1)].fullCost ); 
         $('.room-description').children('.hours-left').children('.count-hours').text(val['person'+(this.study-1)].fullDay ); 
             });
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
        let self = this;
        $('.'+ clickedClass +'').on('contextmenu',function(e){
            let x = e.pageX;
            let y = e.pageY,
                id;
            Promise.resolve()
                .then(()=>{


                let topMain = $('.main').offset().top,
                    leftMain = $('.main').offset().left;
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

                return $.getJSON('./lang/'+self.lang+'.json'); 

            })
                .then((val)=>{
                $('.room .about-'+ hiddenClass).children().children('.type').text(val[id].name);
                $('.type-full-desctription').children('.amount').text(val[id].fullCost );
                $('.type-full-desctription').children('.amount-hours').text(val[id].fullDay );

                $('.type-desctription').children('.amount').text(val[id].distanceCost );
                $('.type-desctription').children('.amount-hours').text(val[id].distanceDay );

                $('.type-description-low').children('.amount').text(val[id].yourselfCost );
                $('.type-description-low').children('.amount-hours').text(val[id].yourselfDay );
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
    aboutStudyWindow () {

        $(document).on('click', '.overlay, .buttonStudy', function () {
            $('.about-persons').css({"display":"none", 'top' : 'inherit', 'bottom' : 'inherit', 'left': 'inherit'});
            $('.overlay').css({'display':'none'});
            $('.about-persons').removeClass('block-after');
            $('.about-persons').removeClass('block-before');
        });
    }
    activeRadioButton() {
        $(document).on('click', '.choose-radio-button', function () {
            var activeBtn = $('.about-persons').find('div[data-active=1]');
            activeBtn.children().remove();
            activeBtn.attr('data-active', '0');
            $(this).prepend('<div class="active-rbtn"></div>');
            $(this).attr('data-active', 1);
        });
    }


}


let logic = new Logic('admin',0,0,1,1,100,0,0,'ru');
logic.startGame();

logic.contexmenuArticle('personOpen', 'persons');
logic.contexmenuArticle('relaxOpen', 'relaxs');
logic.contexmenuArticle('workOpen', 'works');