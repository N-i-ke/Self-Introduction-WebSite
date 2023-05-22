import React from 'react'

const HomePage = () => {
return (
      
<main id="main">
    <section id='video'>
        <video className='bg-video' src='../Video/TopQBeijing.mp4' autoPlay>ここにビデオタグが入ります。</video>
      </section>
      <section id="work">
        <figure className="text-container col2">
            <h2 className="sec-title text-container__title">
            <span className='sub-sec-title'>
                My Work
            </span>
          </h2>
        </figure>
      </section>
    </main>
  );
}

export default HomePage