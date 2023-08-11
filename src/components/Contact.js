import React from 'react'
import {SocialIcon} from 'react-social-icons'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 id='contact' className='skills-h3'>Contact</h2>
      <div className='contact-info'>
        <h4>Email</h4>
        <h3>riverferguson@gmail.com</h3>
        <h4>Phone Number</h4>
        <h3>805-602-2452</h3>
        <div className='header-icons'>
          <ul className='header-icons'>
            <SocialIcon className='icon' url="https://www.linkedin.com/in/river-ferguson/" target="_blank"/>
            <SocialIcon className='icon' url="https://github.com/riverferguson" target="_blank"/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact