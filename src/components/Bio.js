import React from 'react'
import profile from '../project-images/profile-pic.jpg'

const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio-image'>
        <img src={profile} alt="image not found"/>
      </div>
      <div className='interests'>
        <h4 className='interest-header'>My Interests</h4>
        <div className='interest-tags'>
          <p>Coding</p>
          <p>Diving</p>
          <p>Music</p>
          <p>Outdoors</p>
          <p>Surfing</p>
          <p>Fitness</p>
        </div>
      </div>
    </div>
  )
}

export default Bio