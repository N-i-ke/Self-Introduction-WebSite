main()

function main() {
     var parent = $("dt");
     parent.each(function () {
       var self = $(this);
       self.on("click", function () {
         parent.not(self).next("dd").slideUp(300);
         self.next("dd").slideToggle(300);
       });
     });
    //swiper.js
     var mySwiper = new Swiper(".slider1", {
       loop: true, //最後に達したら先頭に戻るかどうか
       slidesPerView: 3.8, //一画面での表示スライド枚数（PC）
       spaceBetween: 56, //各スライド間の余白の間隔（スペース）（PC）
       centeredSlides: true, //対象のスライドを中央寄せするかどうか
       speed: 1500, //各スライド間の移動速度

       breakpoints: {
         // 768px以上の場合
         768: {
           slidesPerView: 2,
           spaceBetween: 56,
         },
         // 980px以上の場合
         980: {
           slidesPerView: 2.5,
           spaceBetween: 56,
         },
         // 1200px以上の場合
         500: {
           slidesPerView: 1,
           spaceBetween: 10,
         },
       },

       autoplay: {
         delay: 3000, //自動再生の1枚のスライドを待機する速度
         disableOnInteraction: false, //Swiperのautoplayがクリック・フリック後も止まらないようにする
       },
       pagination: {
         el: ".swiper-pagination", //ページネーションの要素
         type: "bullets", //ページネーションの種類
         clickable: true, //クリックに反応させる
       },
       //ナビゲーションボタン（矢印）表示の設定
       navigation: {
         nextEl: ".swiper-button-next", //「次へボタン」要素の指定
         prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
       },
     });
     jQuery(function ($) {
       var fadeIn = $(".fade-in");
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

     $(function () {
       $(".hamburger").click(function () {
         $(this).toggleClass("active");

         if ($(this).hasClass("active")) {
           $(".globalMenuSp").addClass("active");
         } else {
           $(".globalMenuSp").removeClass("active");
         }
       });
     });
     /*お問い合わせフォームのjquery*/
     $(function () {
       $('a[href^="#"]').click(function () {
         let speed = 500;
         let href = $(this).attr("href");
         let target = $(href == "#" || href == "" ? "html" : href);
         let position = target.offset().top;
         $("html, body").animate({ scrollTop: position }, speed, "swing");
         return false;
       });
     });
  }