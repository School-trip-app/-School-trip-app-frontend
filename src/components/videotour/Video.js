import React from 'react'
import video from '../../assets/oekotourismus-cc0-pixabay-nikolaus_bader-200820.avif';
import './video.scss'
function Video() {
  return (
    <div className='video'>
      <a className='pop-video' href='https://www.youtube.com/watch?v=up68UAfH0d0'>
        <img src={video} alt='video' />
        <h1>Watch our last tour</h1>
      </a>
    </div>
  )
}

export default Video;
