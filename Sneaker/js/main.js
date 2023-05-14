/*hambergermenu*/ 

// humgergermenu

$(function() {

  //ハンバーガーとクラスのついたやつをクリックしたらアクションが起こる

  // htmlを除くとハンバーガーメニューがある
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        // .toggleClass()は、要素に「指定のクラスがあれば削除して、
        // 無ければ付ける」事ができるメソッド。つまり、指定のクラスをON/OFFできるメソッド

        // 今回ではcssでactiveをつけたり消したりしてる

        // ✅thisの使い方
        // thisとは
        // thisが所属している関数を実行するオブジェクトのこと

        // 使い方は２パターンある

        // １、メソッドの時の場合は所属しているオブジェクトそのものを指す

      //   // ex).

      // 💡chips 
      // const は途中で上書きされるとエラーを吐いて教えてくれる


      // サンプルコード１
      //   const manga = {
      //     title: 'Fullmetal Alchemist',
      //     read() {
      //       console.log(this);
      //     }
      //   }
      //   manga.read();
      //   コンソールにはmangaオブジェクトが表示される
      //   ↓
      //   これはreadメソッドは漫画オブジェクトに所属しているから

      //   // この場合はmangaオブジェクトが表示されます
      //   // 理由はreadメソッドはmangaオブジェクトに所属しているから
      //   // この場合のthisは、mangaオブジェクトそのものをさしている

      //   // ２、通常の関数の時はthisはグローバルオブジェクトブラウザ内のWindowオブジェクト」&「node内のグローバルオブジェクト」を指す

      //   サンプルコード２
      //   const manga = {
      //     title: 'Fullmetal Alchemist',
      //     read() {
      //       console.log(this);
      //     }
      //   }

      //   manga.close = function() {
      //     console.log(this);
      //   }
      //   manga.close();

      //   // closeメソッドの追加

      //   今回はこの程度にしておく本来はswift学習に時間をかける

        // 今回はフロントエンドに対してアプローチしてしまったが多分IOSアプリ開発の方がゆお
        


//  もしactiveというクラスを保有していたら
        if ($(this).hasClass('active')) {
          // activeを持っているなら
            $('.globalMenuSp').addClass('active');
            // activeをつける
        } else {
          // activeを持っていないなら
            $('.globalMenuSp').removeClass('active');
            // activeを外す
        }
    });
});

// 以上がハンバーガーメニューの構造


// slick_sliderのコード

$('.slider').slick({

    slidesToShow: 3.2,
    centerMode: true,
    centerPadding: '60px',

    responsive: [
      
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        }
      },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px'
          }
        },
        {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '60px'
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
 
  });