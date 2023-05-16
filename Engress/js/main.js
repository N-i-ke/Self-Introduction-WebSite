var parent = $('dt');
parent.each(function () {
    var self = $(this);
    self.on('click', function () {
        parent.not(self).next('dd').slideUp(300);
        self.next('dd').slideToggle(300);
    });
});

$(function () {
    $("dt").click(function () {//ボタンがクリックされたら

        $("dt").toggleClass('remove');// activeクラスを付与し
        $("dd").toggleClass('active');// activeクラスを付与し

    });
});

$(function () {
    $(".dt1").click(function () {//ボタンがクリックされたら

        $(".icon1").toggleClass('open');// activeクラスを付与し

    });
    $(".dd1").click(function () {//ボタンがクリックされたら

        $(".icon1").toggleClass('open');// activeクラスを付与し

    });
});

$(function () {
    $(".dt2").click(function () {//ボタンがクリックされたら

        $(".icon2").toggleClass('open');// activeクラスを付与し

    });
    $(".dd2").click(function () {//ボタンがクリックされたら

        $(".icon2").toggleClass('open');// activeクラスを付与し

    });
});

$(function () {
    $(".dt3").click(function () {//ボタンがクリックされたら

        $(".icon3").toggleClass('open');// activeクラスを付与し

    });
    $(".dd3").click(function () {//ボタンがクリックされたら

        $(".icon3").toggleClass('open');// activeクラスを付与し

    });
});

$(function () {
    $(".dt4").click(function () {//ボタンがクリックされたら

        $(".icon4").toggleClass('open');// activeクラスを付与し

    });
    $(".dd4").click(function () {//ボタンがクリックされたら

        $(".icon4").toggleClass('open');// activeクラスを付与し

    });
});


/*hambergermenu*/

$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });