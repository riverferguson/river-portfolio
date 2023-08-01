import React from 'react'
import Saltys from './Saltys'
import Boat from './Boat'

const Projects = () => {
  return (
    <div className='projects'>
      <h2 id='projects' className='skills'>Projects</h2>
      <div className='project-showcase'>
        <Saltys />
        <Boat />
      </div>
    </div>
  )
}

export default Projects