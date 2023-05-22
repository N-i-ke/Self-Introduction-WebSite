import React from 'react'

function Header() {
  return (
    <div>
      <header id="header">
        <nav id="nav">
          <ul class="nav-menu">
            <li>
              <a href="#" class="top">
                TOP
              </a>
            </li>
            <li>
              <a href="#" class="work">
                WORK
              </a>
            </li>
            <li>
              <a href="#" class="about">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" class="skill">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#" class="service">
                SERVICE
              </a>
            </li>
            <li>
              <a href="#" class="contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div class="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 class="site-title">N-i-ke's Portfolio</h1>
        <h4 class="sub-site-title">クリエイティブなWeb制作をお届けします。</h4>
        <div id="mask"></div>
      </header>
    </div>
  );
}

export default Header