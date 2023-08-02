import React from 'react'
import Bio from './Bio'

const About = () => {
  return (
    <div className='about'>
        <Bio />
        <div className='about-div'>
            <h2 id='about'> About Me </h2>
            <h3 className='about-me-bio'>Welcome to my portfolio! My name is River Ferguson and I am a Full Stack Software Engineer who recently graduated from Flatiron school bootcamp with extensive training in JavaScript, React.js, Python, and Flask. After working as a commercial diver in the piledrivers union out of Seattle I have found a new passion, coding. Due to my desire to change careers I have decided to take my hard working energy, leadership skills, and collaboration skills and search for a job in the tech field.</h3>
        </div>
    </div>
  )
}

export default About