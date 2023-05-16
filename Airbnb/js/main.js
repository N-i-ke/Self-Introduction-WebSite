
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/*video-btn*/
const video = document.querySelector('#video');
const videoBtn = document.querySelector('#video-btn');
let videoPlaying = false;

videoBtn.addEventListener('click', () => {
  if (!videoPlaying) {
    video.play();
    videoPlaying = true;
  } else {
    video.pause();
    videoPlaying = false;
  }
});
/*video-btnの表示*/
$(function(){
    $(".video-btn").click(function () {//ボタンがクリックされたら
        $(".text1").toggleClass('active1');// activeクラスを付与し
        $(".text2").toggleClass('active2');// activeクラスを付与し
      });
});