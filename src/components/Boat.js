import React from 'react'

const Boat = () => {
  return (
    <div className='project-card'>
    <img src={null}></img>
    <h2 className='project-name'>Pacific Boat Club</h2>
    <h4 className='project-description'>An app designed for boat enthusiests to browse and list their boats while logged in</h4>
    <h5 className='software'>Software</h5>
    <h6 className='software-used'>Flask Python React</h6>
    <br></br>
    <div className='links'>
        <a className='reference-link1' href='https://github.com/riverferguson/boat-project' target='_blank'>Code</a>
        <a className='reference-link2' href=''>Demo</a>
    </div>
</div>
  )
}

export default Boat