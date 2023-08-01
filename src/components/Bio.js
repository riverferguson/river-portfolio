import React from 'react'

const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio-image'>
        <img src={null} alt="image not found"/>
      </div>
      <div className='interests'>
        <h4 className='interest-header'>My Interests</h4>
        <div>
          <p>Coding</p>
          <p>Diving</p>
          <p>Music</p>
          <p>Outdoors</p>
          <p>Surfing</p>
        </div>
      </div>
    </div>
  )
}

export default Bio