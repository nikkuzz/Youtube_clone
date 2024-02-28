import React from 'react'
import Button from './Button';

const ButtonList = () => {

    const list = ["All","Cricket","Football","News","Sports","Entertainment","Shows","Pool","Taarak Mehta ka otla chashma"];

  return (

    <div className='flex'>
        {
        list.map((l,i) => (
          <Button key={i} name={l}/>
        ))
        } 
    </div>
  )
}

export default ButtonList