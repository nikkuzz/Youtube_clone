import React from 'react'

const VideoCard = ({info}) => {

  const {snippet,statistics} = info;

  const {thumbnails,title,channelTitle} = snippet;

  const {viewCount} = statistics;

  return (
 
    <div className='w-72 m-2 p-2 cursor-pointer shadow-lg'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount/1000}K views</li>
      </ul>
    </div>
  )
}

export default VideoCard