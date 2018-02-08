class Ava {
    constructor(sex,health){
        this.sex = sex;
        this.health = health;
        this.eye = 2;
        this.menuAva = 0;
        this.menuAvaShow = this.menuAvaShow.bind(this);
        this.start();

    }

    start() {
        $('.avatarImg').on('click',this.menuAvaShow);
        
        Promise.resolve()
            .then(()=>{
            //запрос на бд  
            this.sex = 1;
            this.health = 1;
            this.eye = 3;
        })
            .then(()=>{


            this.changeSex(this.sex);
            this.changeEye(this.eye);
            this.changeHealth(this.health)
        });
    }

    changeSex(sex) {
        switch(sex) {
            case 1: 
                $('.girl').css('display','none');
                $('.man').css('display','block');
                break;
            case 2: 
                $('.girl').css('display','block');
                $('.man').css('display','none');
                break;

        }
    }

    changeEye(eye){
        switch(eye) {
            case 1: 
                $('.eyes_nor').css('display','none');
                $('.eyes_mid').css('display','block');
                $('.eyes_up').css('display','block');
                break;
            case 2: 
                $('.eyes_nor').css('display','block');
                $('.eyes_mid').css('display','none');
                $('.eyes_up').css('display','block');
                break;
            case 3: 
                $('.eyes_nor').css('display','block');
                $('.eyes_mid').css('display','block');
                $('.eyes_up').css('display','none');
                break;

        }
    }

    changeHealth(health){
        switch(health) {
            case 1: 
                this.off();
                $('.mouth_smile').css('display','block');
                $('.mouth_sad').css('display','none');
                break;
            case 2: 
                this.off();
                $('.scarf').css('display','block');
                $('#tempM').css('display','block');
                $('.mouth_smile').css('display','none');
                $('.mouth_sad').css('display','block');
                break;
            case 3:
                this.off();
                $('.scarf').css('display','block');
                $('#tempH').css('display','block');
                $('.mouth_smile').css('display','none');
                $('.mouth_sad').css('display','block');
                break;
        }
    }

    off() {
        $('.scarf').css('display','none');
        $('#tempH').css('display','none');
        $('#tempM').css('display','none');
    }

    saveBd(what,size) {

    }

    menuAvaShow() {
        if(this.menuAva){
            $(".menu-ava-right").hide("slide", { direction: "left" }, 500); 
            $(".menu-ava-buttom").slideUp( 500);
            setTimeout( ()=>{
                this.menuAva = 0
            },500);
           
            return;
        } else {
            
            $(".menu-ava-right").show("slide", { direction: "left" }, 500); 
            $(".menu-ava-buttom").slideDown( 500); 
            
             this.menuAva = 1;
            return;
        }
    }
    
    clickNewAva() {
        
    }


}



let ava = new Ava(1,1);
