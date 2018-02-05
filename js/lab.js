class Lab{
    constructor(){
        this.id = null; 
         this.contexmenuArticle = this.contexmenuArticle.bind(this);
         this.retmoveCloased = this.retmoveCloased.bind(this);
        
        $('.content-lab').on('click',this.contexmenuArticle);   
        $('#btnLab').on('click',this.retmoveCloased);
        $('.about-lab').on('mouseleave',this.cloaseContextMeny);
        this.num = 10*3.846153;
        this.circleApdate();
    }
    
    cloaseContextMeny(){
         $('.about-lab').css('display','none');
    }

    contexmenuArticle(e) {
        let target = e.target;
        console.log();
        if(target.tagName!='IMG' || target.className===''   ) {
            return;
        }
      
       
        let x = e.pageX;
        let y = e.pageY;
        let topMain = $('.main').offset().top,
            leftMain = $('.main').offset().left;
         let heightElem = $('.about-lab').outerHeight();
        if(x+260>=leftMain+624) {
            x=x-240;
        }
        if(y+heightElem>=topMain+636) {
            y=y-heightElem + 20;
        }
   
         this.id =  target.id;


        $('.about-lab').css({
            'top':y-10,
            'left':x-10,
            'display':'block'
        });
    }
    
    retmoveCloased() {
        
        $('#'+this.id).removeClass('closed');
        this.num+=3.846153;
        this.cloaseContextMeny();
        this.circleApdate();
    }
     
    circleApdate() {
        let val = this.num/100,
        prog  = parseInt(this.num);
      $('.lab.circle').circleProgress({
    value: val
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(prog * progress) + '<i>%</i>');
  });  
    }

}
let lab = new Lab();
 
