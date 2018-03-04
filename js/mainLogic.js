class Logic {
	constructor(user,day,money,work,study,stadyFull,lang,stadyDone,dayAvelible) {
		this.user=user; 
		this.day=day;
		this.dayAvelible = dayAvelible;
		this.money=money;
		this.work=work;
		this.study =study;  
		this.stadyFull =stadyFull;
		this.lang = lang;
		this.nextDay =this.nextDay.bind(this);
		this.workChangeActive =this.workChangeActive.bind(this);
		this.checkAsk =this.checkAsk.bind(this);
		this.stadyNow = 1;
		this.stadyDone = stadyDone;
		this.room;
		this.outMoney;
	}
	getLang() {
		return this.lang;
	}

	startGame() {
		this.moneyAppend();
		this.studyClosedimg();
		this.workClosedimg();
		this.aboutStudyWindow();
		this.activeRadioButton();
		this.changeTextStudy(1);
		this.workActive(this.work);
		$('#newDay').on('click',this.nextDay);
		$('#btn-work').on('click',this.workChangeActive);
		$('.cloas-dayAvelible-mood').on('click',function(){
			$('.new-day-dayAvelible-mood').css('display','none');
		});
		$('#new-day-cloase').on('click',()=> {
			if(this.day%7) {
				
				$('.new-day-dayAvelible-mood').css('display','flex');
				ava.changeMood(1);
			}
			$('.new-day').css('display','none');
			$('.newDayOverflow').css('display','none');
		});
		$('.closed').on('contextmenu',this.contexmenuClosed);
		$('.about-closed').on('mouseleave',this.cloaseContextMeny);
		$('#closedOk').on('click',this.cloaseContextMeny);
		$('.newDayOverflow').on('click',function(){
			$('.new-day').css('display','none');
			$('.newDayOverflow').css('display','none');
		});
		$('#new-day-ask-cloase').on('click',this.checkAsk);
		$('.cloas-dayAvelible').on('click', function(){
			$('.new-day-dayAvelible').css('display','none');
				$('.greyBlock').css('display','none');
		})


	}

	ask(i) {
		Promise.resolve()
			.then(()=>{
			return $.getJSON('/lang/ask.json');
		}) 
			.then((inf)=>{
			$('.new-day-ask').css('display','flex');
			$('.greyBlock').css('display','block');
			$('#new-day-ask-cloase').attr('href',inf['ask'+i][1]);
			$('.askNum').text(inf['ask'+i][0])
			$('.askComp').on('click',function(){
				$('.hint').text(inf['ask'+i][1]);
			});
		});
	}

	checkAsk(){
		let num = parseInt($('#new-day-ask-cloase').attr('href')),
			input = parseInt($('.numberInput').val());

		if(num===input) {
			$('.new-day-ask').css('display','none');
			$('.new-day-dayAvelible').css('display','block');
		
			this.dayAvelible = 10;
		}
		$('.numberInput').val('');
	}

	setMoneyOut(money) { 
		if(this.getMoney()>=(-money)) { 
			this.money+=money; 
			this.moneyAppend(); 
		} 
	}

	setMoney(money) { 
		if(this.getMoney() >= (-money)) { 
			this.money+=money; 
			this.moneyAppend(); 
			//			this.request('set_params_user', {id:2, money:this.money});
		} else {
			return 1;
		}
	}

	getMoney() { 
		return this.money; 
	}

	initCircle (classCircle, countBued = 0, countThings = 24) {
		var percentageBued = countBued / countThings;
		$('.' + classCircle +'.circle').circleProgress({ 
			value: percentageBued 
		}).on('circle-animation-progress', function(event, progress) { 
			$(this).find('strong').html(Math.round(percentageBued * 100 * progress) + '<i>%</i>'); 
		});
	}

	request ($functionname, $params) {
		self = this;
		var host = "http://"+window.location.hostname;
		$.ajax({
			type: "POST",
			url: host + "/page.php",
			dataType: 'json',
			data:{
				functionname: $functionname, // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
				params: $params
			},
			success: function(data){
				self.setRoomParams(data);
			}

		});
	}

	setRoomParams (params) {
		this.room = params;
	}

	getRoomParams () {

		return this.room;
	}

	cloaseContextMeny(){
		$('.about-closed').css('display','none');
	}

	contexmenuClosed(e) {
		if(!$(this).hasClass('closed')){
			return;
		}
		let x = e.pageX;
		let y = e.pageY;
		let topMain = $('.main').offset().top,
			leftMain = $('.main').offset().left;
		let heightElem = $('.about-closed').outerHeight();
		if(x+260>=leftMain+624) {
			x=x-240;
		}
		if(y+heightElem>=topMain+636) {
			y=y-heightElem + 20;
		}
		$('.about-closed').css({
			'top':y-10,
			'left':x-10,
			'display':'block'
		});
	}

	workActive(i) {

		for(let a = 0;a<5;a++) {
			$('#work'+a).removeClass('workActive');
		}

		$('#work'+(i-1)).addClass('workActive'); 
		this.setWorkText(i-1);
	}

	workChangeActive(ev) {
		let target =ev.target;
		for(let a = 0;a<5;a++) {
			$('#work'+a).removeClass('workActive');
		}
		let num =  parseInt(ev.target.getAttribute('work'));
		this.work = num;
		$('#work'+(num)).addClass('workActive');  
		$('.room .about-works').css('display','none');
		this.setWorkText(num);
	}

	setWorkText(num) {
		Promise.resolve() 
			.then(()=>{
			return this.getText();
		})
			.then((text)=>{
			$('.type-work').text(text['work'+num].name);
			$('.amount-work').text(text['work'+num].salaryInOur);
		});
	}

	moneyAppend(){
		$('.money-block').text(this.money);
	}

	nextContext() {
		$('.newDayOverflow').css('display','block');
		$('.new-day').css({
			'display':'flex',
			'top':202
		});
		$('.dayN').text(this.day);
		$('.dayAvailable').text(this.dayAvelible);
		$('.dayEuroPurchase').text(this.outMoney);


	}

	nextDayRender() {
		this.nextContext();
		this.moneyAppend();
		this.studyClosedimg();
		this.workClosedimg();
		this.changeTextStudy(this.stadyNow);
	}

	getText() {
		return new Promise((resolve)=>{ 
			resolve($.getJSON('./lang/'+this.lang+'.json'));
		});

	}

	nextDay() {
		let flag = 1;
		Promise.resolve()
			.then(()=>{
			return $.getJSON('./lang/'+this.lang+'.json'); 
		})
			.then((val)=>{
			
			let cost,dayOll;
			switch(this.stadyNow) {
				case 1:
					cost =  val['person'+(this.study-1)].fullCost ; 
					dayOll =  val['person'+(this.study-1)].fullDay;
					break;
				case 2:
					cost =  val['person'+(this.study-1)].distanceCost ;
					dayOll =  val['person'+(this.study-1)].distanceDay;
					break;
				case 3:
					cost = val['person'+(this.study-1)].yourselfCost ;
					dayOll = val['person'+(this.study-1)].yourselfDay;
					break;

			}
			let study = parseInt($('#2').text());
			if(cost*study>this.money) {

				return;
			} 
			if(!this.stadyDone) {
				if(this.dayAvelible===0) {
					this.ask((Math.floor(Math.random() * (3 - 1)) + 1));
					flag = 0;
				} else {
					ava.healthIdentify();
					ava.moodIdentify();
					this.outMoney =cost*study;
					this.money-=cost*study;
					this.day++;
					this.dayAvelible --;
					switch (this.stadyNow) {
						case 1:
							this.stadyFull+=study;
							if(this.stadyFull>=dayOll){
								this.stadyFull =0;

								this.study++;
								this.nextWork(this.study);
							}
							break
							case 2:
							this.stadyFull+=(study+study/4);
							if( this.stadyFull>=dayOll){
								this.stadyFull =0;

								this.study++;
								this.nextWork(this.study);
							}
							break
							case 3:
							this.stadyFull+=(study+study/2);
							if( this.stadyFull>=dayOll ){
								this.stadyFull =0;

								this.study++;
								this.nextWork(this.study);
							}
							break

					}


				} }
		})
			.then(()=>{
			if(this.study===5) {
				this.stadyDone = 1;
				this.study=4;
				Promise.resolve()
					.then(()=>{
					return $.getJSON('./lang/'+this.lang+'.json'); 
				})
					.then((val)=>{
					this.stadyFull = val['person'+(this.study-1)].fullDay;

				});

			}


		})
			.then(()=>{
			if(flag) {
			this.nextDayRender();
			}
		});


	}

	nextWork(i) {
		if(i===4){
			this.work=5;
			return;
		}
		if(i===3){
			this.work=4;
			return;
		}
		if(i===2){
			this.work=3;
			return;
		}
		if(i===1){
			this.work=2;
			return;
		}     
	}

	circleReset(val) {
		let prog = val/100;
		$('.second.circle').circleProgress({
			value: prog
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(val * progress) + '<i>%</i>');
		});
	}

	changeTextStudy(num) {
		Promise.resolve()
			.then(()=>{
			return $.getJSON('./lang/'+this.lang+'.json'); 
		})
			.then((val)=>{
			switch(num) {
				case 1:
					$('.room-description').children('.type').text(val['person'+(this.study-1)].name );
					$('.room-description').children('.cost').children('.amount').text(val['person'+(this.study-1)].fullCost ); 
					$('.room-description').children('.hours-left').children('.count-hours').text((val['person'+(this.study-1)].fullDay-this.stadyFull) ); 
					this.circleReset(((this.stadyFull/val['person'+(this.study-1)].fullDay)*100));
					break;
				case 2:
					$('.room-description').children('.type').text(val['person'+(this.study-1)].name );
					$('.room-description').children('.cost').children('.amount').text(val['person'+(this.study-1)].distanceCost ); 
					$('.room-description').children('.hours-left').children('.count-hours').text((val['person'+(this.study-1)].distanceDay-this.stadyFull )); 
					this.circleReset(((this.stadyFull/val['person'+(this.study-1)].distanceDay)*100));
					break;
				case 3:
					$('.room-description').children('.type').text(val['person'+(this.study-1)].name );
					$('.room-description').children('.cost').children('.amount').text(val['person'+(this.study-1)].yourselfCost ); 
					$('.room-description').children('.hours-left').children('.count-hours').text((val['person'+(this.study-1)].yourselfDay-this.stadyFull) ); 
					this.circleReset(((this.stadyFull/val['person'+(this.study-1)].yourselfDay)*100));
					break;

			}


		});

	}

	studyClosedimg() {
		for(let i = 0;i<4;i++) {
			$('#person'+i).removeClass('personOpen');
			$('#person'+i).removeClass('closed');
		}

		$('#person'+(this.study-1)).addClass('personOpen');


		for(let i = this.study;i<4;i++) {
			$('#person'+i).addClass('closed');
		}
	}

	workClosedimg() {
		for(let i = 0;i<5;i++) {
			$('#work'+i).removeClass('workOpen');
			$('#work'+i).removeClass('closed');
		}
		for(let i = 0;i<this.work;i++) {
			$('#work'+i).addClass('workOpen');
		}
		for(let i = this.work;i<5;i++) {
			$('#work'+i).addClass('closed');
		}
	}

	contexmenuArticle(clickedClass, hiddenClass) {
		let self = this;
		$(document).on('contextmenu','.'+ clickedClass +'',function(e){
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
				if(y+heightElem>=topMain+626) {
					y=y-heightElem + 40;
				}

				if(e.target.tagName ==='IMG'){

					id =e.target.classList[1];

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
				$('.type-full-desctription').children('.amountWork').text(val[id].salaryInOur );
				$('#btn-work').attr('work',id.substring(4));
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
		function activeRadioButton () {

			$(document).on('click', '.choose-radio-button', function () {
				var activeBtn = $(this).parent().parent().find('div[data-active=1]');
				activeBtn.children().remove();
				activeBtn.attr('data-active', '0');
				$(this).prepend('<div class="active-rbtn"></div>');
				$(this).attr('data-active', 1);
			});
		}
		activeRadioButton();

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
		let self = this;
		$(document).on('click', '.choose-radio-button', function () {
			var activeBtn = $('.about-persons').find('div[data-active=1]');
			activeBtn.children().remove();
			activeBtn.attr('data-active', '0');
			$(this).prepend('<div class="active-rbtn"></div>');
			$(this).attr('data-active', 1);
			if($(this).siblings().attr('class') === 'description') {
				self.changeTextStudy(2);
				self.stadyNow = 2;
				return;   
			}
			if($(this).siblings().attr('class') === 'description-low') {
				self.changeTextStudy(3);
				self.stadyNow = 3;
				return;   
			}
			if($(this).siblings().attr('class') === 'description-full') {
				self.changeTextStudy(1);
				self.stadyNow = 1;
				return;   
			}
		});
	}

}

//user,day,money,work,study,stadyFull,stadyDist,stadyYor,lang

let logic = new Logic('admin',10,300,2,1,100,'ru',0,3);


logic.startGame();

logic.contexmenuArticle('personOpen', 'persons');
logic.contexmenuArticle('relaxOpen', 'relaxs');
logic.contexmenuArticle('workOpen', 'works');
logic.contexmenuArticle('labOpen', 'lab');