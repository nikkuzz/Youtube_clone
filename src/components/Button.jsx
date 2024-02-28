import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2 py-2 px-5 bg-gray-200 rounded-lg cursor-pointer'>{name}</div>
  )
}

export default Button