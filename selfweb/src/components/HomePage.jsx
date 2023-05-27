import React from 'react'
import Sneaker from "../Image/sneaker.png"; 
import Flower from "../Image/ohana.png"; 
import Work from "../Image/works.png"; 
import Building from "../Image/kensetu.png"; 
import BathSalt from "../Image/kunaipu.png"; 
import Engress from "../Image/Engress.png"; 
import Kadan from "../Image/kadan.png"; 
import Sousaku from "../Image/sousaku.png"; 
import Your from "../Image/your.png"; 


const HomePage = () => {
return (
  <main id="main">
    {/* work */}
    <section id="work">
      <figure className="text-container col2">
        <h2 className="sec-title text-container__title">
          My Work
          <span className="sub-sec-title">My Work</span>
        </h2>
      </figure>
      <div className="work-wrapper">
        <ul>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Sneaker} />
                <figcaption>
                  <div className="fig-inner">
                    <h3>動画付きカルーセル</h3>
                    <p>カルーセルグリッドレイアウト</p>
                    <p>制作期間:2日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Flower} />
                <figcaption>
                  <div className="fig-inner">
                    <h3>スクロールイベントのWebサイト</h3>
                    <p>ギャラリーサイト/スクロールイベント</p>
                    <p>制作期間:3日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Work} />
                <figcaption>
                  <div className="fig-inner">
                    <h3>シンプルなサイトのWordPress構築</h3>
                    <p>カスタム投稿タイプ、問い合わせフォームなど</p>
                    <p>制作期間:3日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Building} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>建設会社のWebサイト</h3>
                    <p>シンプルな配置を意識しました</p>
                    <p>制作期間:2日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={BathSalt} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>一般的なLPサイト</h3>
                    <p>黄色がベースの爽やかなサイト</p>
                    <p>制作期間:2日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Engress} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>TOEFL英語学習コーポレートサイト</h3>
                    <p>WordPressで構築しました</p>
                    <p>制作期間:16日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Kadan} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>旅館型Webサイト</h3>
                    <p>モーダル/マップ埋め込みetc</p>
                    <p>制作期間:16日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Sousaku} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>和風なWebサイト模写</h3>
                    <p>縦書きレイアウト</p>
                    <p>制作期間:1日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
          <li className="work-item animated-li">
            <figure>
              <a href="/">
                <img src={Your} alt="/" />
                <figcaption>
                  <div className="fig-inner">
                    <h3>モダンなデザインのWebサイトの模写</h3>
                    <p>アコーディオン、フェードインetc</p>
                    <p>制作期間:12日</p>
                  </div>
                </figcaption>
              </a>
            </figure>
          </li>
        </ul>
      </div>
    </section>
    {/* about */}
    <section id="about">
      <figure className="text-container col2">
        <h2 className="sec-title text-container__title">
          About
          <span className="sub-sec-title">About</span>
        </h2>
      </figure>
      <div className="profile">
        <div className="icon-wrapper">
          <h3 className="name animated">
            <p className="name-main">N-i-ke</p>
            <p className="name-sub">N-i-ke</p>
          </h3>
        </div>
        <div className="about-wrapper">
          <h4 className="animated">
            <i className="fas fa-chess-king"></i>
            Personal History
          </h4>
          <p className="animated">
            <i className="fa-regular fa-dot-circle"></i>
            2002年1月生まれ。東京都出身。
            <br />
            <i className="fa-regular fa-dot-circle"></i>
            東京育ち、東京在住
            <br />
            <i className="fa-regular fa-dot-circle"></i>
            趣味はテニスとハシゴ酒です
            <br />
          </p>
          <h4 className="animated">
            <i className="fas fa-chess-queen"></i>
            Mind
          </h4>
          <p className="animated">
            技術力向上に日々努力しておりますが、第一に双方すれ違いのない円滑なコミュニケーションを大事に活動しております。
            業務においては「レスの速さ」を大切にしております。急なデザインの変更や修正なども、その都度しっかりと対応できるように心がけております。
          </p>
        </div>
      </div>
    </section>
    {/* image-sec */}
    <div className="image-sec"></div>
    <section id="skill">
      <h2 className="sec-title">
        Skills
        <span className="sub-sec-title">My Skills</span>
      </h2>
      <div className="skill-wrap wrapper animated">
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>HTML</h4>
        </div>
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>CSS</h4>
        </div>
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>SASS</h4>
        </div>
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>JavaScript</h4>
        </div>
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>PHP</h4>
        </div>
        <div className="skill-item animated-div">
          <i className="fab fa-html5"></i>
          <h4>WordPress</h4>
        </div>
      </div>
    </section>
    {/* service */}
    <section id="service">
      <h2 className="sec-title animated-div">
        Service
        <span className="sub-sec-title animated-li">My Service</span>
      </h2>
      <div className="service-wrapper">
        <div className="service-wrap-left wrapper animated">
          <i className="fas fa-edit animated"></i>
          <h3 className="animated">コーポレートサイト制作</h3>
          <p className="animated">
            会社のイメージを重視しながら会社概要やお知らせの掲載、所在地地図の設置などに対応いたします。
          </p>
        </div>
        <div className="service-wrap-right wrapper animated">
          <i className="fas fa-laptop-code animated"></i>
          <h3 className="animated">コーディング•WP構築</h3>
          <p className="animated">
            スマートフォンサイト、ワードプレスを使用した更新性の高いサイト、Javascriptを使用した動きのあるサイトなど、様々なサイトのコーディングを行っております。
          </p>
        </div>
      </div>
    </section>
    {/* contact */}
  </main>
);
}

export default HomePage