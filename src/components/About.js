import React from 'react'
import Bio from './Bio'

const About = () => {
  return (
    <div className='about'>
        <Bio />
        <div className='about-div'>
            <h2 id='about'> About Me </h2>
            <h3 className='about-me-bio'></h3>
        </div>
    </div>
  )
}

export default About