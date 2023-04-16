import React from 'react'
import Typed from 'react-typed'
function Hero() {
  return (
    <>
    <div className='text-white'>
       <div className='max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-5'>fast, flexible financing for</p>
            <Typed  className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-gray-800'
            strings={['BTC', 'BTB','SAAS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
        </div>
        <p className='md:text-2xl sm:tex-1xl text-xl  font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto my-6 py-3 rounded-md text-black font-medium'>Get Started</button>
       </div>
    </div>
    </>
  )
}

export default Hero