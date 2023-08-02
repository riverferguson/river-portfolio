import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    const offset = 80; // Adjust the offset according to your layout
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixedHeader">
      <header className="App-header">
        <div className="header-name">
          <a className='header-link' href="/">River Ferguson</a>
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