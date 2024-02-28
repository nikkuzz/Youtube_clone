import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuToggled = useSelector((store) => store.bar.isMenuToggled);

    //Early Return pattern - dont show the side bar if isMenuToggled = false i.e, !false = true => null
    if(!isMenuToggled) return null;
    
    
  return (
    <div className='grid col-span-1 shadow-lg mr-2 p-2'>
     <div>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>

        </ul>
    </div>    
    <div>
       
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li>Flying Beast</li>
            <li>Mumbaiker Nikhil</li>
            <li>DRS</li>
        </ul>
    </div>
    <div>
        <h2 className='font-bold'>Explore</h2>
        <ul>
            <li>Trending</li>
            <li>Music</li>
            <li>Movies</li>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar