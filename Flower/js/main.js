/*hambergermenu*/ 

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});



$(function () {
    /*=================================================
    スクロール時のイベント
    ===================================================*/
    $(window).scroll(function () {
      // スクロール位置を取得
      let scroll = $(window).scrollTop();
  
      /*=================================================
      メインビジュアルの拡大・縮小
      ===================================================*/
      mv_scale(scroll);
  
    });
  
  });
  
  /*=================================================
  メインビジュアルの拡大・縮小（共通処理）
  ===================================================*/
  function mv_scale(scroll) {
    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
      $(".main_img").css({
        width: 100 / 3 + scroll / 10 + "%",
      });
      // スマホ表示の場合の処理（画面幅が900px以下の場合）
    } else {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
      $(".main_img").css({
        width: 100 - scroll / 10 + "%",
      });
    }
  }

  //fadein

  jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
        });
    });
});




$(function() {
  // 変数にクラスを入れる
  var bg = $('.bg');
  var header = $('header');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    
    
    if($(this).scrollTop() > 3800) {
      bg.addClass('active');
    }else{
      bg.removeClass('active');
    }
  });
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 4400) {
      bg.addClass('remove');
    }else{
      bg.removeClass('remove');
    }
  });
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 600) {
      header.addClass('active');
    }else{
      header.removeClass('active');
    }
  });

 
});

