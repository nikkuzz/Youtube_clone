import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/barSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';



const WatchPage = () => {

  // The useSearchParams hook is used to read and modify the query string in the URL for the current location
  const [searchParams] = useSearchParams();
  // searchParams will be an URLSearchParams object

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(closeMenu());
  },[]);

  
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex w-full'>
    <div >
    {/* The <iframe> tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document. */}
        <iframe
       width="1050"
       height="600"
      //  src url is the another html which needs to be called in this html page
       src={"https://www.youtube.com/embed/" + searchParams.get("v")}
       title="YouTube video player"
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen
        className='rounded-lg my-4'
         >
         </iframe>
         </div>
        
         <div className='w-full'>
          <LiveChat />
         </div>
         </div>

         <CommentsContainer />
    </div>
  )
}

export default WatchPage