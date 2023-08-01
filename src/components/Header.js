import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <div className="fixedHeader">
    <header className="App-header">
        <div className="header-name">
        <a className='header-link' href="/">River Ferguson</a>
        </div>
        
        <div className="header-icons">
        <ul className="header-icons">
            <SocialIcon className='icon' url="https://www.linkedin.com/in/river-ferguson/" target="_blank"/>
            <SocialIcon className='icon' url="https://github.com/riverferguson" target="_blank"/>
        </ul>
        </div>
    </header>
</div>
  )
}

export default Header