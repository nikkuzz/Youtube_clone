import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Outlet />
        {/* Outlet is for body's children i.e, it can be Main container or Watch page depending upon path */}
    </div>
  )
}

export default Body;