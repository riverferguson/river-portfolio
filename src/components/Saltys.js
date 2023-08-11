import React from 'react'
import saltys from '../project-images/saltys.png'


const Saltys = () => {
  return (
    <div className='project-card'>
        <img src={saltys}></img>
        <h2 className='project-name'>Salty's Surf Co.</h2>
        <h4 className='project-description'>A user-friendly online surf shop intended for logged in users to buy and review surf products</h4>
        <h5 className='software'>Software</h5>
        <h6 className='software-used'>Flask Python React</h6>
        <br></br>
        <div className='links'>
            <a className='reference-link1' href='https://github.com/riverferguson/saltys-surf' target='_blank'>Code</a>
            <a className='reference-link2' href='https://www.loom.com/share/5f1a9dfe0a4244f3ab1eeeb35ad96366' target= '_blank'>Demo</a>
        </div>
    </div>
  )
}

export default Saltys