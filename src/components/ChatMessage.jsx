import React from 'react'


const ChatMessage = ({name, message}) => {

  return (
    <div className='flex items-center m-2 text-sm shadow-sm'>
        <img className='w-6 mr-2' 
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
        alt='user profile'/>
        <p className='font-semibold m-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage