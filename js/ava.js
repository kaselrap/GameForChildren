class Ava {
    constructor(sex,health){
        this.sex = sex;
        this.health = health;
        this.eye = 1;
        this.menuAva = 0;
        this.menuAvaShow = this.menuAvaShow.bind(this);
        this.clickNewAva = this.clickNewAva.bind(this);
        this.start();

    }

    start() {
        $('.avatarImg').on('click',this.menuAvaShow);
        $('.avaChange').on('click',this.clickNewAva);
        Promise.resolve()
            .then(()=>{
            //запрос на бд  
            this.sex = 1;
            this.health = 1;
            this.eye = 2;
        })
            .then(()=>{


            this.changeSex(this.sex);
            this.changeEye(this.eye);
            this.changeHealth(this.health)
        });
    }

    changeSex(sex) {
        for(let i =0;i<=6;i++) {
            $('.ava-change-'+i).css('display','none'); 
        }

        $('.ava-change-'+sex).css('display','block');
        let ava = $('.person-body');
        switch(parseInt(sex)) {
            case 1: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo1_fxxhdpi.png");
                });
                break;
            case 2: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo2_fxxhdpi.png");
                });

                break;
            case 3: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo3_fxxhdpi.png");
                });
                break;
            case 4: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo1_mxxhdpi.png");
                });
                break;
            case 5: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo2_mxxhdpi.png");
                });
                break;
            case 6: 
                ava.each((el)=>{
                    $(ava[el]).attr("src","img/avatar/ava_colo3_mxxhdpi.png");
                });
                break;
        }
        this.saveBd('sex',sex); 
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
                this.menuAva = 0;
                $('main').off('click',this.menuAvaShow);
            },500);

            return;
        } else {

            $(".menu-ava-right").show("slide", { direction: "left" }, 500); 
            $(".menu-ava-buttom").slideDown( 500); 
            setTimeout(()=>{
                 $('main').on('click',this.menuAvaShow);
            },4);
           
            this.menuAva = 1;
            return;
        }
    }

    clickNewAva(event) {
        let id =  event.target.getAttribute('id').split('-')[1];
        this.changeSex(id);
        this.menuAvaShow();
    }


}



let ava = new Ava(1,1);
