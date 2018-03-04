<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Document</title>
		<link rel="stylesheet" href="/css/style.css">
		<link rel="stylesheet" href="/css/roket.css">
	</head>
	<body>
		<?php
		if ( isset( $_GET ) ) 
			$data = $_GET;
		if ( isset ( $data['lang'] ) ) {
			$lang = json_decode(file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/lang/' . $data['lang'] . '.json'),true);
		} else {
			$lang = json_decode(file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/lang/en.json'),true);
		}
		?>
		<main>
			<div class ="newDayOverflow">

			</div>
			<div class ="greyBlock">

			</div>
			<div id="preload"></div>
			<div class="menu">
				<div class="avatarImg">

					<img src="./img/avatar/stoc/ava_colo1_fxxhdpi.png" class="avaMain ava-change-1"alt="">
					<img src="./img/avatar/stoc/ava_colo2_fxxhdpi.png" class="avaMain ava-change-2"alt="">
					<img src="./img/avatar/stoc/ava_colo3_fxxhdpi.png" class="avaMain ava-change-3" alt="">
					<img src="./img/avatar/stoc/ava_colo1_mxxhdpi.png" class="avaMain ava-change-4"alt="">
					<img src="./img/avatar/stoc/ava_colo2_mxxhdpi.png" class="avaMain ava-change-5"alt="">
					<img src="./img/avatar/stoc/ava_colo3_mxxhdpi.png" class="avaMain ava-change-6"alt="">

					<img class="scarf" src="/img/export/36w/scarfldpi.png" alt="">
					<img id="tempH" class="temp" src="/img/export/36w/temp_hldpi.png" alt="">
					<img id="tempM" class="temp" src="/img/export/36w/temp_mldpi.png" alt="">
					<img class="eyebrows_normal eyebrows" class="" src="img/export/36w/eyebrows_normal_color1ldpi.png" alt="">
					<img src="img/export/36w/mouth_smile_color1ldpi.png" alt="" class="mouth mouth_smile">
					<img src="img/export/36w/mouth_sad_color1ldpi.png" alt="" class="mouth mouth_sad">

					<img src="img/avatar/eyes_color1_normalxxhdpi.png" alt="" class="eye eyes_nor">
					<img src="img/avatar/eyes_color1_normalxxhdpi.png" alt="" class="eye eyes_mid">
					<img src="img/avatar/eyes_color1_normalxxhdpi.png" alt="" class="eye eyes_up">
				</div>
				<div class="menu-ava-right">
					<div>
						<img src="./img/avatar/avaMain/ava_colo1_fxxhdpi.png"class="avaChange rightAvaChange" id="ava-1"alt="">
						<img src="./img/avatar/avaMain/ava_colo2_fxxhdpi.png" class="avaChange rightAvaChange" id="ava-2"alt="">
						<img src="./img/avatar/avaMain/ava_colo3_fxxhdpi.png" class="avaChange rightAvaChange" id="ava-3" alt="">
					</div>
				</div>
				<div class="menu-ava-buttom">
					<div>
						<img src="./img/avatar/avaMain/ava_colo1_mxxhdpi.png" class="avaChange  buttomAvaChange" id="ava-4"alt="">
						<img src="./img/avatar/avaMain/ava_colo2_mxxhdpi.png" class="avaChange buttomAvaChange" id="ava-5"alt="">
						<img src="./img/avatar/avaMain/ava_colo3_mxxhdpi.png" class="avaChange buttomAvaChange" id="ava-6"alt="">
					</div>
				</div>
				<div class="status">
					<div class="status-block"><img src="/img/money.png" alt=""><p class="money-block"></p></div>
					<div class="status-block"><img src="/img/Rocket-Progress.png" alt=""><p class="rocketCount">13%</p></div>
					<div class="status-block"><img src="/img/health.png" alt=""><p class="health"></p></div>
					<div class="status-block"><img src="/img/mood.png" alt=""><p class="mood"></p></div>
					<div class="status-block"><img src="/img/sleep.png" alt=""> <div class="selectButton" > 
						<div class="num"  id="0">7</div>
						<div class="select"  id="div0">
						</div>
						</div></div>
					<div class="status-block"><img src="/img/invent.png" alt=""><div class="selectButton" >
						<div class="num" id="1">4</div>
						<div class="select" id="div1"></div>
						</div></div>
					<div class="status-block"><img src="/img/study.png" alt=""><div class="selectButton" >
						<div class="num" id="2">3</div>
						<div class="select" id="div2"></div>
						</div></div>
					<div class="status-block"><img src="/img/job.png" alt=""><div class="selectButton" >
						<div class="num" id="3">4</div>
						<div class="select" id="div3"></div>
						</div></div>
					<div class="status-block"><img src="/img/free-time.png" alt=""><div class="selectButton" >
						<div class="num" id="4">4</div>
						<div class="select" id="div4"></div>
						</div></div>
				</div>
				<div class="buttonRun" > 
					<p id="newDay"><?php if ( isset ( $lang['nextDay'] ) ) echo $lang['nextDay']; ?></p>
				</div>
			</div>
			<div class="main">
				<div class="buttonChangeBlock">
					<div class="buttonChange" href="study" id="buttonChangeOn"><img src="/img/room.png" alt="Study"><div class="after"></div></div>
					<div class="buttonChange" href="laboratory"><img src="/img/settings.png" alt="Laboratory"><div class="after"></div></div>
					<div class="buttonChange" href="research"><img src="/img/tab3.png" alt="Research"><div class="after"></div></div>
					<div class="buttonChange" href="rest"><img src="/img/tab4.png" alt="Rest"><div class="after"></div></div>
					<div class="buttonChange" href="training"><img src="/img/tab5.png" alt="Training"><div class="after"></div></div>
					<div class="buttonChange" href="work"><img src="/img/tab6.png" alt="Work"><div class="after"></div></div>
					<div class="buttonChange" href="cooperation"><img src="/img/tab7.png" alt="Cooperation"><div class="after"></div></div> 



				</div>
				<div class="room">
					<div id="study">
						<div class="room-header">

							<div class="room-about">
								<div class="first circle">
									<strong></strong>

								</div>
							</div>

							<div class="room-title">
								<h1><?php if ( isset ( $lang['livingRoom'] ) ) echo $lang['livingRoom']; ?></h1>
							</div>
						</div>
						<div class="content content-room" onload="initRoom();">
							<img src="img/room/walls.png" alt="" class="room-wall">
							<canvas id="roomCanvas" width="576" height="362"></canvas>
						</div>
					</div>
					<div id="laboratory">
						<canvas id="rocketCanvas" width="602" height="549"></canvas>
						<div class="divButtonLaboratory">
							<div class="buttonRun buttonLaboratory"> 
								<p id="Level3">Level 3</p>
							</div>
							<div class="buttonRun buttonLaboratory"> 
								<p id="Level2">Level 2</p>
							</div>
							<div class="buttonRun buttonLaboratory buttonLaboratoryActive"> 
								<p id="Level1">Level 1</p>
							</div>
						</div>
					</div>
					<div id="research">
						<div class="room-header">
							<div class="room-about">



								<div class="lab circle">
									<strong></strong>

								</div>
							</div>
							<div class="room-title">
								<h1>Laboratory</h1>
							</div>
						</div>
						<div class="content-lab" onload="initLaboratory();">
							<canvas id="laboratoryCanvas" width="576" height="362"></canvas>
						</div>


					</div>
					<div id="rest">
						<div class="room-header">
							<div class="room-about">
								<div class="second circle">
									<strong></strong>
								</div>
								<div class="room-description">
									<h3 class="type nameblockMargin nameblock"></h3>
									<div class="cost">
										<span class="amount"></span>
										<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
										<span class="slash">/</span>
										<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
									</div>
									<div class="hours-left">
										<span class="count-hours"></span>
										<span class="time"><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span>
										<span class="left"><?php if ( isset ( $lang['left'] ) ) echo $lang['left']; ?></span>
									</div>
								</div>
							</div>
							<div class="room-title">
								<h1><?php if ( isset ( $lang['study'] ) ) echo $lang['study']; ?></h1>
							</div>
						</div>
						<div class="contentPersons content-articles">
							<div class="persons articles">
								<div class="person article" id="person0">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body person0">
									<img src="img/avatar/Study_level1_mxxhdpi.png" alt="" class="person-clothes person0">
									<img src="img/avatar/eyebrows_color3_normalxxhdpi.png" alt="" class="person-eye-brows person0">
									<img src="img/avatar/eyes_color3_normalxxhdpi.png" alt="" class="person-eye person0">
									<img src="img/avatar/mouth_colo3_smilexxhdpi.png" alt="" class="person-mouth person0">
								</div>
								<div class="person article " id="person1" >
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body person1">
									<img src="img/avatar/Study_level2_mxxhdpi.png" alt="" class="person-clothes person1">
									<img src="img/avatar/eyebrows_color3_normalxxhdpi.png" alt="" class="person-eye-brows person1">
									<img src="img/avatar/eyes_color3_normalxxhdpi.png" alt="" class="person-eye person1">
									<img src="img/avatar/mouth_colo3_smilexxhdpi.png" alt="" class="person-mouth person1">
								</div>
								<div class="person article " id="person2">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body person2">
									<img src="img/avatar/Study_level3_mxxhdpi.png" alt="" class="person-clothes person-headdress person2">

									<img src="img/avatar/eyebrows_color3_normalxxhdpi.png" alt="" class="person-eye-brows person2">
									<img src="img/avatar/eyes_color3_normalxxhdpi.png" alt="" class="person-eye person2">
									<img src="img/avatar/mouth_colo3_smilexxhdpi.png" alt="" class="person-mouth person2">
								</div>
								<div class="person article " id="person3">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body person3">
									<img src="img/avatar/Study_level4_mxxhdpi.png" alt="" class="person-clothes person-headdress person3">

									<img src="img/avatar/eyebrows_color3_normalxxhdpi.png" alt="" class="person-eye-brows person3">
									<img src="img/avatar/eyes_color3_normalxxhdpi.png" alt="" class="person-eye person3">
									<img src="img/avatar/mouth_colo3_smilexxhdpi.png" alt="" class="person-mouth person3">
								</div>
							</div>
						</div>
					</div>
					<div id="training">
						<div class="room-header">
							<div class="room-description">
								<h3 class="type-work nameblockMargin nameblock"></h3>
								<div class="cost">
									<span class="amount-work"></span>
									<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
									<span class="slash">/</span>
									<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
								</div>
							</div>
							<div class="room-title">
								<h1><?php if ( isset ( $lang['work'] ) ) echo $lang['work']; ?></h1>
							</div>
						</div>
						<div class="content-work content-articles">
							<div class="works articles">
								<div class="work article" id="work0">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body work0">
									<img src="img/avatar/job_level1_fxxhdpi.png" alt="" class="person-clothes work0">
									<img src="img/avatar/eyebrows_color2_normalxxhdpi.png" alt="" class="person-eye-brows work0">
									<img src="img/avatar/eyes_color2_normalxxhdpi.png" alt="" class="person-eye work0">
									<img src="img/avatar/mouth_color2_smilexxhdpi.png" alt="" class="person-mouth work0">
								</div>
								<div class="work article" id="work1">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body work1">
									<img src="img/avatar/job_level2_fxxhdpi.png" alt="" class="person-clothes work1">
									<img src="img/avatar/eyebrows_color2_normalxxhdpi.png" alt="" class="person-eye-brows work1">
									<img src="img/avatar/eyes_color2_normalxxhdpi.png" alt="" class="person-eye work1">
									<img src="img/avatar/mouth_color2_smilexxhdpi.png" alt="" class="person-mouth work1">
								</div>
								<div class="work article" id="work2">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body work2">
									<img src="img/avatar/job_level3_fxxhdpi.png" alt="" class="person-clothes work2">
									<img src="img/avatar/eyebrows_color2_normalxxhdpi.png" alt="" class="person-eye-brows work2">
									<img src="img/avatar/eyes_color2_normalxxhdpi.png" alt="" class="person-eye work2">
									<img src="img/avatar/mouth_color2_smilexxhdpi.png" alt="" class="person-mouth work2">
								</div>
								<div class="work article " id="work3">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body work3">
									<img src="img/avatar/job_level4_fxxhdpi.png" alt="" class="person-clothes work3">
									<img src="img/avatar/eyebrows_color2_normalxxhdpi.png" alt="" class="person-eye-brows work3">
									<img src="img/avatar/eyes_color2_normalxxhdpi.png" alt="" class="person-eye work3">
									<img src="img/avatar/mouth_color2_smilexxhdpi.png" alt="" class="person-mouth work3">
								</div>
								<div class="work article " id="work4">
									<img src="img/avatar/ava_colo1_fxxhdpi.png" alt="" class="person-body work4">
									<img src="img/avatar/job_level5_fxxhdpi.png" alt="" class="person-clothes work4">
									<img src="img/avatar/eyebrows_color2_normalxxhdpi.png" alt="" class="person-eye-brows work4">
									<img src="img/avatar/eyes_color2_normalxxhdpi.png" alt="" class="person-eye work4">
									<img src="img/avatar/mouth_color2_smilexxhdpi.png" alt="" class="person-mouth work4">
								</div>
							</div>
						</div>
					</div>
					<div id="work">
						<div class="room-header">
							<div class="room-description">
								<h3 class="type-relax nameblockMargin nameblock"></h3>
							</div>
							<div class="room-title">
								<h1><?php if ( isset ( $lang['freeTime'] ) ) echo $lang['freeTime']; ?></h1>
							</div>
						</div>
						<div class="content-articles free-time">
							<div class="articles">
								<div class="article freeTime">
									<img id="relax1" src="/img/freetime/free_time_1.png" alt="">
								</div>
								<div class="article">
									<img id="relax2" src="/img/freetime/free_time_2.png" alt="">
								</div>
								<div class="article ">
									<img id="relax3" src="/img/freetime/free_time_3.png" alt="">
								</div>
								<div class="article ">
									<img id="relax4" src="/img/freetime/free_time_4.png" alt="">
								</div>
								<div class="article ">
									<img id="relax5" src="/img/freetime/free_time_5.png" alt="">
								</div>
							</div>
						</div>
					</div>
					<div id="cooperation">
						<p>COMING SOON</p>


					</div>

					<div class="about-rocket">
						<h4></h4>
						<span class="costRocket"></span>
						<div class="buttonRun buttonLaboratoryMenu"> 
							<p id="buyButton">Buy</p>
						</div>
					</div>


					<div class="new-day">
						<div class="dayTitle"><span class="dayN"></span> Day </div>		
						<div><span class="dayAvailable"></span> days are available</div>		
						<div><span class="dayEuroPurchase"></span> euro is charged for the purchase</div>		
						<div><span class="dayEuroEarned">0</span> euro is earned</div>		
						<div><span class="dayInvented">0</span> item is invented</div>		
						<div class="buttonRun"> 
							<p id="new-day-cloase">Next</p>
						</div>
					</div>

					<div class="new-day-ask">
						<div class="new-day-ask-center">
							<h3>Warning</h3>	
							<span >The number of available </span>
							<span>steps is 0.</span>
							<span>We offer to fulfill some additional task.</span><br>

							<div id="new-day-ask"><span class="askNum"></span><span>= </span><input class="numberInput" type="number"> <span class="askComp"> ?</span></div>	
							<p class="hint"></p>	
							<div class="new-day-buttonRun buttonRun"> 
								<p id="new-day-ask-cloase">Check</p>
							</div>
						</div>
					</div>

					<div class="new-day-dayAvelible">
						<div class="new-day-ask-center">
							<h3>Well done</h3>	
							<span >10 steps are available for use</span>


							<div class="new-day-buttonRun buttonRun"> 
								<p class="cloas-dayAvelible">Next</p>
							</div>
						</div>
					</div>
					
					<div class="new-day-dayAvelible-mood">
						<div class="new-day-ask-center-mood">
							<h3>Well done</h3>	
							<span class="new-day-mood-discription">Grandma has come and the mood goes up!</span>


							<div class="new-day-buttonRun-mood buttonRun"> 
								<p class="cloas-dayAvelible-mood">Next</p>
							</div>
						</div>
					</div>

					<div class="about-room-things">
						<h3 class="name"></h3>
						<span class="about"></span>
						<h4 class="alert"><b></b></h4>
						<div class="buttonRun buttonLaboratoryMenu"> 
							<p id="buyButton" href="S1_part_04_w">Buy</p>
						</div>
					</div>
					<div class="about-rocket-things about-room-things">
						<h3 class="name"></h3>
						<span class="about"><span class="time"></span></span>
						<h4 class="alert"><b></b></h4>
						<div class="buttonRun buttonLaboratoryMenu"> 
							<p id="buyButton" href="S1_part_04_w">Explore</p>
						</div>
					</div>
					<div class="about-persons about-articles">
						<div class="about-description">
							<h2 class="type"></h2>
							<div class="study-type">
								<div class="choose-radio-button" data-active="1">
									<div class="active-rbtn"></div>
								</div>
								<div class="description-full">
									<h3 class="title"><?php if ( isset ( $lang['fullTime'] ) ) echo $lang['fullTime']; ?>:</h3>
									<div class="type-full-desctription">
										<span class="amount"></span>
										<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
										<span class="slash">/</span>
										<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
										<span class="comma">,</span>
										<span class="amount-hours"><span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
									</div>
								</div>
							</div>
							<div class="study-type">
								<div class="choose-radio-button" data-active="0"></div>
								<div class="description">
									<h3><?php if ( isset ( $lang['distance'] ) ) echo $lang['distance']; ?>:</h3>
									<div class="type-desctription">
										<span class="amount"></span>
										<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
										<span class="slash">/</span>
										<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
										<span class="comma">,</span>
										<span class="amount-hours"><span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
									</div>
								</div>
							</div>
							<div class="study-type">
								<div class="choose-radio-button" data-active="0"></div>
								<div class="description-low">
									<h3><?php if ( isset ( $lang['yourself'] ) ) echo $lang['yourself']; ?>:</h3>
									<div class="type-description-low">
										<span class="amount"></span>
										<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
										<span class="slash">/</span>
										<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
										<span class="comma">,</span>
										<span class="amount-hours"> <span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
									</div>
								</div>
							</div>
							<div class="buttonRun buttonStudy"> 
								<p id="study"><?php if ( isset ( $lang['study'] ) ) echo $lang['study']; ?></p>
							</div>
						</div>
					</div>
					<div class="about-relaxs about-articles">
						<div class="about-description">
							<h2 class="type"><?php if ( isset ( $lang['tRelax'] ) ) echo $lang['tRelax']; ?></h2>


							<div class="relax-type study-type">
								<div class="choose-plus">+</div>
								<div class="type-description">
									<h3><?php if ( isset ( $lang['yourself'] ) ) echo $lang['yourself']; ?>:</h3>
									<div class="type-full-desctription">
										<span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla excepturi perferendis quaerat temporibus ipsum debitis accusantium,</span>
									</div>
								</div>
							</div>
							<div class="relax-type study-type">
								<div class="choose-plus study-type">-</div>
								<div class="type-description">
									<h3><?php if ( isset ( $lang['yourself'] ) ) echo $lang['yourself']; ?>:</h3>
									<div class="type-full-desctription">
										<span class="amount">0</span>
										<span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
										<span class="slash">/</span>
										<span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
										<span class="comma">,</span>
										<span class="amount-hours">1600 <span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
									</div>
								</div>
							</div>
							<div class="buttonRun buttonRelax"> 
								<p id="relax"><?php if ( isset ( $lang['relax'] ) ) echo $lang['relax']; ?></p>
							</div>
						</div>
					</div>
					<div class="about-works about-articles">
						<div class="about-description">
							<h2 class="type"><?php if ( isset ( $lang['tWork'] ) ) echo $lang['tWork']; ?></h2>

							<div class="work-type study-type">
								<div class="type-description">
									<div class="type-full-desctription">
										<span class="amountWork"></span>
										<span> euro / hour</span>
									</div>
								</div>
							</div>
							<div class="buttonRun buttonWork"> 
								<p id="btn-work"><?php if ( isset ( $lang['work'] ) ) echo $lang['work']; ?></p>
							</div>
						</div>
					</div>
					<div class="about-closed about-articles">
						<div class="about-description">
							<h2 class="type-closed">Closed</h2>
							<div class="buttonRun "> 
								<p id="closedOk">Ok</p>
							</div>
						</div>
					</div>
					
					
					
				</div>
			</div>
			<div class="overlay"></div>
		</main>
		<script src="/js/jquery-3.2.1.min.js"></script>
		<script src="https://code.createjs.com/1.0.0/easeljs.min.js"></script>
		<script src="/js/jquery-ui.min.js"></script>
		<script src="/js/circle-progress.js"></script>
		<script src="/js/examples.js"></script>
		<script src="/js/profile.js"></script>
		<script src="/js/mainLogic.js"></script>
		<script src="/js/room.js"></script>
		<script src="/js/change.js"></script>

		<script src="/js/freeTime.js"></script>
		<script src="/js/requests.js"></script>
		<script src="/js/imge_to_data_url.js"></script>
		

		<script src="/js/laboratory.js"></script>
		<!--        <script src="/js/rockets.js"></script>-->
		<script src="/js/rocket.js"></script>
		<script src="/js/ava.js"></script>
	</body>
</html>