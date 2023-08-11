import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      const start = window.scrollY;
      const startTime = performance.now();
      const duration = 1000;

      const animateScroll = (timestamp) => {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / duration, 1);

        const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        const newPosition = start + (offsetPosition - start) * easedProgress;

        window.scrollTo(0, newPosition);

        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="nav">
      <header className="App-header">
        <div className="header-name">
          <a className='header-link' href='#about'>River Ferguson</a>
        </div>
        <div className="header-list">
          <ul>
            <a className='list-link' href='#about' onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
          </ul>
          <ul>
            <a className='list-link' href='#projects' onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a>
          </ul>
          <ul>
            <a className='list-link' href='#experience' onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</a>
          </ul>
          <ul>
            <a className='list-link' href='#contact' onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
          </ul>
          <ul>
            <a className='list-link' href={null} target="_blank">Resume</a>
          </ul>
        </div>
        <div className="header-icons">
          <ul className="header-icons">
            <SocialIcon className='icon' url="https://www.linkedin.com/in/river-ferguson/" target="_blank" />
            <SocialIcon className='icon' url="https://github.com/riverferguson" target="_blank" />
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header;