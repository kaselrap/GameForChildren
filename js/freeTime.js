class FreeTime {
    constructor() {
        this.freeTimeNow = 1;
        this.changeFreeTime = this.changeFreeTime.bind(this);
        this.textShange(this.freeTimeNow);
        $('.free-time .articles .article img').on('click',this.changeFreeTime);  
    }
    getFreeTime() {
        return this.freeTimeNow;
    }
    setFreeTime(num) {
        this.freeTimeNow = num; 
    }
    changeFreeTime(ev) {
        let id =  ev.target.id[5];
        this.textShange(id);
        $('#relax'+this.freeTimeNow).parent().removeClass('freeTime');
        $('#relax'+id).parent().addClass('freeTime');
        this.freeTimeNow = id;
    }
    textShange(id){
        Promise.resolve()
            .then(()=>{

            return logic.getText();  
        })
            .then((text)=>{
            $('.type-relax').text(text['relax'+id].type);
            $('.amount-relax').text(text['relax'+id].amount); 
        });

    }
}
let freeTime = new FreeTime();