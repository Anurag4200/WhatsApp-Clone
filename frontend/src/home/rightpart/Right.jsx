import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typespace from './Typespace'

const Right = () => {
  return (
    <>
    <div className='w-3/4 bg-slate-900'>
      <Chatuser/>
      <Messages/>
      <Typespace/>
    </div>
    
    </>
  )
}

export default Right