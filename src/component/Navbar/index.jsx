import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
function Navbar() {

    const [togle,setTogle] = useState(false) 
    const handleTogle = () =>{
        setTogle(!togle)
    }

  return (
   <>
   <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-5 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>

        <ul className='hidden md:flex'>
            <li className='p-3'>Home</li>
            <li className='p-3'>Company</li>
            <li className='p-3'>Resource</li>
            <li className='p-3'>About</li>
            <li className='p-3 me-5'>Contact</li>
            <button className='bg-white w-[130px] h-8 m-auto rounded-md text-[#00df9a] font-small'>Get Started</button>
        </ul>
        
        {/* Icons Menu */}
        <div onClick={handleTogle} className='block md:hidden'>
            {togle ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        
        </div>
        <div className={togle ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-5xl font-bold text-[#00df9a] m-4'>React.</h1>
            <ul className='p-5 uppercase'>
                <li className='p-4 border-b border-gray-700'>Home</li>
                <li className='p-4 border-b border-gray-700'>Company</li>
                <li className='p-4 border-b border-gray-700'>Resource</li>
                <li className='p-4 border-b border-gray-700'>About</li>
                <li className='p-4'>Contact</li>
                <button className='bg-white w-[150px] mx-auto py-2 mt-4 rounded-md text-[#00df9a] font-small'>Get Started</button>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Navbar