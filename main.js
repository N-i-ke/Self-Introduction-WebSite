$(function(){
  $('.menu-btn').on('click', function() {
    if (!$('#header').hasClass('open')) {
      $('#header').addClass('open');
    } else {
      $('#header').removeClass('open');
    }
  });
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      // this.destroy();
    }
  },
  offset: '60%',
});
//windowがscrollされた時のイベント
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    // eachでliを順番に処理
    $(".animated-li").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;
            // 0.3s毎にずれて表示
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 300 * i);
        }
    });
    // eachでliを順番に処理
    $(".animated-div").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;
            
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 200 * i);
        }
    });
});

$('.top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 1400);
});
// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする

$('.work').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてid="contents"までスクロールする
const workTop = $('#work').offset().top;
$('html, body').animate({ scrollTop: workTop }, 1400);
});
// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする

$('.about').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてid="contents"までスクロールする
const aboutTop = $('#about').offset().top;
$('html, body').animate({ scrollTop: aboutTop }, 1400);
});

$('.skill').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてid="contents"までスクロールする
const skillTop = $('#skill').offset().top;
$('html, body').animate({ scrollTop: skillTop }, 1400);
});

$('.service').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてid="contents"までスクロールする
const skillTop = $('#service').offset().top;
$('html, body').animate({ scrollTop: skillTop }, 1400);
});

$('.contact').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてid="contents"までスクロールする
const contactTop = $('#contact').offset().top;
$('html, body').animate({ scrollTop: contactTop }, 1400);
});

/*=================================================
  sec-titleのアニメーション
===================================================*/
$('.text-container').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }       
},{offset : '70%'});

/*=================================================
  スタートのアニメーション
===================================================*/
//startのloading jquery
$(function() {
	setTimeout(function(){
		$('.start .1').fadeIn(1);
	},100); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .2').fadeIn(1);
	},200); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .3').fadeIn(1);
	},300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .4').fadeIn(1);
	},400); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .5').fadeIn(1);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .6').fadeIn(1);
	},600); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .7').fadeIn(1);
	},700); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .8').fadeIn(1);
	},900); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .9').fadeIn(1);
	},1000); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start .10').fadeIn(1);
	},1100); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .11').fadeIn(1);
	},1200); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .12').fadeIn(1);
	},1300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .13').fadeIn(1);
	},1400); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .14').fadeIn(1);
	},1500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .15').fadeIn(1);
	},1600); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .16').fadeIn(1);
	},1700); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .17').fadeIn(1);
	},2000); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .18').fadeIn(1);
	},2100); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .19').fadeIn(1);
	},2200); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .20').fadeIn(1);
	},2300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .21').fadeIn(1);
	},2400); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .22').fadeIn(1);
	},2500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .23').fadeIn(1);
	},2600); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .24').fadeIn(1);
	},2700); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .25').fadeIn(1);
	},2800); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .26').fadeIn(1);
	},2900); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .27').fadeIn(1);
	},3000); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .28').fadeIn(1);
	},3100); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .29').fadeIn(1);
	},3200); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .30').fadeIn(1);
	},3300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .31').fadeIn(1);
	},3400); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .32').fadeIn(1);
	},3500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .33').fadeIn(1);
	},3600); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .34').fadeIn(1);
	},3700); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .35').fadeIn(1);
	},3800); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .36').fadeIn(1);
	},3900); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
	  $('.start .37').fadeIn(1);
	},4000); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(800);
	},4000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

