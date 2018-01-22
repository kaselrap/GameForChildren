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
            <div class="menu">
                <div class="avatarImg">
                   <img class="girl main-avatarImg" src="/img/export/72w/ava_colo1_mhdpi.png" id="#" alt="">
					<img class="man main-avatarImg" src="/img/export/72w/ava_colo1_fhdpi.png" id="#" alt="">
					<img class="scarf" src="/img/export/36w/scarfldpi.png" alt="">
					<img id="tempH" class="temp" src="/img/export/36w/temp_hldpi.png" alt="">
					<img id="tempM" class="temp" src="/img/export/36w/temp_mldpi.png" alt="">
					<img class="eyebrows_normal eyebrows" class="" src="img/export/36w/eyebrows_normal_color1ldpi.png" alt="">
					<img src="img/export/36w/mouth_smile_color1ldpi.png" alt="" class="mouth mouth_smile">
					<img src="img/export/36w/mouth_sad_color1ldpi.png" alt="" class="mouth mouth_sad">
					
					
					<img src="img/export/36w/eyes_normalldpi.png" alt="" class="eye eyes_nor">
					<img src="img/export/36w/eyes_midleldpi.png" alt="" class="eye eyes_mid">
					<img src="img/export/36w/eyes_upldpi.png" alt="" class="eye eyes_up">
                </div>
                <div class="status">
                    <div class="status-block"><img src="/img/money.png" alt=""><p>1300</p></div>
                    <div class="status-block"><img src="/img/Rocket-Progress.png" alt=""><p>13%</p></div>
                    <div class="status-block"><img src="/img/health.png" alt=""><p><?php if ( isset ( $lang['good'] ) ) echo $lang['good']; ?></p></div>
                    <div class="status-block"><img src="/img/mood.png" alt=""><p><?php if ( isset ( $lang['nice'] ) ) echo $lang['nice']; ?></p></div>
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
                <div id="preload"></div>
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

                                <div class="second circle">
                                    <strong></strong>
                                  
                                </div>
                            </div>
                            <div class="room-title">
                                <h1><?php if ( isset ( $lang['livingRoom'] ) ) echo $lang['livingRoom']; ?></h1>
                            </div>
                        </div>
                        <div class="content">
                            

                        </div>
                    </div>
                    <div id="laboratory">
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
                    <div id="research">c</div>
                    <div id="rest">
                        <div class="room-header">
                            <div class="room-about">
                                 <div class="second circle">
                                    <strong></strong>
                                </div>
                                <div class="room-description">
                                    <h3 class="type"><?php if ( isset ( $lang['university'] ) ) echo $lang['university']; ?></h3>
                                    <div class="cost">
                                        <span class="amount">4</span>
                                        <span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
                                        <span class="slash">/</span>
                                        <span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
                                    </div>
                                    <div class="hours-left">
                                        <span class="count-hours">160</span>
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
                                <div class="person article" id="person0" >
                                    <img class="person0" src="/img/person1-girl.png" alt="">
                                </div>
                                <div class="person article" id="person1">
                                    <img class="person1"  src="/img/person2-girl.png" alt="">
                                </div>
                                <div class="person article " id="person2" >
                                    <img class="person2" src="/img/person3-girl.png" alt="">
                                </div>
                                <div class="person article " id="person3">
                                    <img class="person3"  src="/img/person4-girl.png" alt="">
                                </div>
                                <div class="person article " id="person4">
                                    <img class="person4"  src="/img/person5-girl.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="training">
                        <div class="room-header">
                            <div class="room-about">
                                <div class="second circle">
                                    <strong></strong>
                                </div>
                            </div>
                            <div class="room-title">
                                <h1><?php if ( isset ( $lang['work'] ) ) echo $lang['work']; ?></h1>
                            </div>
                        </div>
                        <div class="content-work content-articles">
                            <div class="works articles">
                                <div class="work article" id="work0">
                                    <img class="work0"src="/img/person1-girl.png" alt="">
                                </div>
                                <div class="work article" id="work1">
                                    <img class="work1"  src="/img/person1-girl.png" alt="">
                                </div>
                                <div class="work article" id="work2">
                                    <img class="work2"  src="/img/person3-girl.png" alt="">
                                </div>
                                <div class="work article " id="work3">
                                    <img class="work3"  src="/img/person4-girl.png" alt="">
                                </div>
                                <div class="work article " id="work4">
                                    <img class="work4" src="/img/person5-girl.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="work">
                        <div class="room-header">
                            <div class="room-about">
                                <div class="second circle">
                                    <strong></strong>
                                </div>
                            </div>
                            <div class="room-title">
                                <h1><?php if ( isset ( $lang['freeTime'] ) ) echo $lang['freeTime']; ?></h1>
                            </div>
                        </div>
                        <div class="content-articles free-time">
                            <div class="articles">
                                <div class="relaxOpen article">
                                    <img id="relax article-opened" src="/img/freetime/free_time_1.png" alt="">
                                </div>
                                <div class="relaxOpen article">
                                    <img id="relax article-opened" src="/img/freetime/free_time_2.png" alt="">
                                </div>
                                <div class="relax article closed">
                                    <img id="relax article-closed" src="/img/freetime/free_time_3.png" alt="">
                                </div>
                                <div class="relax article closed">
                                    <img id="relax article-closed" src="/img/freetime/free_time_4.png" alt="">
                                </div>
                                <div class="relax article closed">
                                    <img id="relax article-closed" src="/img/freetime/free_time_5.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cooperation">f</div>
                    <div class="about-rocket">
                        <span></span>
                        <div class="buttonRun buttonLaboratoryMenu"> 
                                <p id="buyButton">Buy</p>
                            </div>
                    </div>
                    <div class="about-persons about-articles">
                        <div class="about-description">
                            <h2 class="type"><?php if ( isset ( $lang['university'] ) ) echo $lang['university']; ?></h2>
                            <div class="study-type">
                                <div class="choose-radio-button" data-active="1">
                                    <div class="active-rbtn"></div>
                                </div>
                                <div class="type-description">
                                    <h3 class="title"><?php if ( isset ( $lang['fullTime'] ) ) echo $lang['fullTime']; ?>:</h3>
                                    <div class="type-full-desctription">
                                        <span class="amount">4</span>
                                        <span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
                                        <span class="slash">/</span>
                                        <span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
                                        <span class="comma">,</span>
                                        <span class="amount-hours">800 <span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="study-type">
                                <div class="choose-radio-button" data-active="0"></div>
                                <div class="type-description">
                                    <h3><?php if ( isset ( $lang['distance'] ) ) echo $lang['distance']; ?>:</h3>
                                    <div class="type-full-desctription">
                                        <span class="amount">2</span>
                                        <span class="currency"><?php if ( isset ( $lang['euro'] ) ) echo $lang['euro']; ?></span>
                                        <span class="slash">/</span>
                                        <span class="time"><?php if ( isset ( $lang['hour'] ) ) echo $lang['hour']; ?></span>
                                        <span class="comma">,</span>
                                        <span class="amount-hours">1200 <span><?php if ( isset ( $lang['hours'] ) ) echo $lang['hours']; ?></span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="study-type">
                                <div class="choose-radio-button" data-active="0"></div>
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
                                        <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla excepturi perferendis quaerat temporibus ipsum debitis accusantium,</span>
                                    </div>
                                </div>
                            </div>
                            <div class="buttonRun buttonWork"> 
                                <p id="btn-work"><?php if ( isset ( $lang['work'] ) ) echo $lang['work']; ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </main>
        <script src="/js/jquery-3.2.1.min.js"></script>
        <script src="/js/jquery-ui.min.js"></script>
        <script src="/js/circle-progress.js"></script>
        <script src="/js/examples.js"></script>
        <script src="/js/profile.js"></script>
        <script src="/js/mainLogic.js"></script>
        <script src="/js/change.js"></script>
        <script src="/js/rocket.js"></script>
        <script src="/js/ava.js"></script>

        <script src="/js/move.js"></script>
        <script src="/js/level2.js"></script>
        <script src="/js/requests.js"></script>

    </body>
</html>