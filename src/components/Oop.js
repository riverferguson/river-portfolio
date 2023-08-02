import React from 'react'
import oop from '../project-images/OOP.png'

const Oop = () => {

// function rightArrow(){
//     null
// }

  return (
    <div className='experience-arrows'>
       <div className='experience-card'>
        <img className='oop-image' src={oop}></img>
        <h5 className='experience-header'>Object Oriented Programming</h5>
        <h6 className='experience-text'>The main approach utilized in developing full stack applications involving relational databases.</h6>
        </div> 
        <div className='arrows'>
            <div onClick={null}>➡️</div>
        </div>
    </div>
  )
}

export default Oop