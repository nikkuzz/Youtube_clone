import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(() => {
    fetchedVideos();
  },[]);

  const fetchedVideos = async ()  => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }
 
  return (
    <div class="flex flex-wrap">
      {videos.map((video) => (
      <Link 
      key={video.id} 
      to={"/watch?v=" + video.id}
      >
      <VideoCard  info={video} />
      </Link>
      ))}
     
     </div>
  )
}

export default VideoContainer