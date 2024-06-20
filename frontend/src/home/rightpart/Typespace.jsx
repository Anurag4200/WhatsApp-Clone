import React from 'react'
import { IoMdSend } from "react-icons/io";
const Typespace = () => {
  return (
    <>
    <div className='h-[8vh] px-10 mt-3 py-4 w-full flex items-center justify-center gap-3'>
    <input type="text" placeholder="Type here" className="input  bg-slate-800 text-white outline-none w-full " />
    <IoMdSend className='text-3xl cursor-pointer'/>
    </div>
    
    </>
  )
}

export default Typespace