//main画面をスライドさせる
slideMainImage();

function slideMainImage() { 
  const img = [

  ];
  let count = -1;

  picCount();

  function picCount() { 
    count += 1;

    //カウント要素数がカウントと位置した時はゼロに戻す
    if (count == img.length) { 
      count = 0;
    }
    //画像選択
    document.getElementById("mainPic").src = img[count];
    console.log(document.getElementById("mainPic"));
    //0.5sで表示切り替え
    setTimeout("picCount", 1000);
   }
}
//ヘッダーの機能
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 0);
});

//モーダルの機能
$(function () {
    $('.js-modal-open').on('click', function () {
      $('.js-modal').fadeIn();
      return false;
    });
    $('.js-modal-close').on('click', function () {
      $('.js-modal').fadeOut();
      return false;
    });
  });
  //モーダルの中の機能
  const config = {
    mode: "range"
  }
flatpickr('.flatpickr', config);

//headerのsp版のhamuberger-menu 
function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );