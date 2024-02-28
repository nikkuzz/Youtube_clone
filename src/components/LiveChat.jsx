import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/mockdata/liveChatData';



const LiveChat = () => {

    const [liveMessage,setliveMessage] = useState("");

    const dispatch = useDispatch();

    const messages = useSelector((store) => store.chat.messages);

    useEffect(() => {

       const i = setInterval(() => {
        dispatch(addMessage({
            name:generateRandomName(),
            message: makeRandomMessage(25),
        }))
       }, 1500);

     return () =>  clearInterval(i);
    }, []);

  return (
    <>
    <div className='font-bold ml-2 italic text-red-600'>Live Chat... </div>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        
       
       {messages.map((m) => (
              <ChatMessage 
              name={m.name}
              message={m.message}
              />
       ))}
      </div> 

      <form className='border border-black ml-2 p-2 w-full'
            onSubmit={(e) => {
                e.preventDefault();

                dispatch(addMessage({
                    name: "NIKHIL",
                    message: liveMessage,
                }));

                setliveMessage("");
                  }}
      >
        <input className='w-60 px-2' type='text' placeholder='Your Message' value={liveMessage} onChange={(e) => setliveMessage(e.target.value)} />
        <button className='bg-green-200 rounded-sm px-2 mx-2'>Send</button>
      </form>
      </>
   
  )
}

export default LiveChat;