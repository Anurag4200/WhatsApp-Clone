import React from 'react'
import Search from './Search'
import User from './User'
import Logout from './Logout'

const Left = () => {
  return (
    
    <div className='w-1/4 bg-zinc-900 '>
      <Search/>
      <div className="h-[480px] overflow-y-auto remove-scroll">
        
      <User/>
     
      </div>
      <Logout/>
      </div>


  )
}

export default Left