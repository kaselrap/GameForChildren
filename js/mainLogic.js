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
        for(let i = 0;i<=this.study;i++) {
            $('#person'+i).addClass('open');
              
        }
        for(let i = this.study;i<5;i++) {
            $('#person'+i).addClass('closed');
        }
    }

    workClosedimg() {
         for(let i = 0;i<=this.work;i++) {
            $('#work'+i).addClass('open');
        }
        for(let i = this.work;i<5;i++) {
            $('#work'+i).addClass('closed');
        }
    }
    
  
}
let logic = new Logic('admin',0,0,1,1,100,0,0);
logic.startGame();