import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {AiOutlineUsergroupAdd,AiOutlineUserAdd} from 'react-icons/ai'

function Cards() {
  return (
    <>
    <div className='w-full py-40 px-5 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <AiOutlineUserAdd className='text-[80px] mx-auto mt-[-4rem] bg-white'/>
            <h2 className='text-2xl text-center font-bold py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>

            <div className='text-center font-medium'>
                <p className='border-b mx-8 py-5 mt-8'>500 GB Storage</p>
                <p className='border-b mx-8 py-5'>1 Granted User</p>
                <p className='border-b mx-8 py-5'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] mx-auto my-6 py-3 rounded-md text-black font-medium'>Start Trial</button>
            </div>

             
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <AiOutlineUsergroupAdd className='text-[80px] mx-auto mt-[-4rem] bg-transparent'/>
            <h2 className='text-2xl text-center font-bold py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>

            <div className='text-center font-medium'>
                <p className='border-b  mx-8 py-5 mt-8'>500 GB Storage</p>
                <p className='border-b  mx-8 py-5'>1 Granted User</p>
                <p className='border-b  mx-8 py-5'>Send up to 2 GB</p>
            </div>
            <button className='text-[#00df9a] w-[200px] mx-auto my-6 py-3 rounded-md bg-black font-medium'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <HiOutlineUserGroup className='text-[80px] mx-auto mt-[-4rem] bg-transparent'/>
            <h2 className='text-2xl text-center font-bold py-4'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>

            <div className='text-center font-medium'>
                <p className='border-b  mx-8 py-5 mt-8'>500 GB Storage</p>
                <p className='border-b  mx-8 py-5'>1 Granted User</p>
                <p className='border-b  mx-8 py-5'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] mx-auto my-6 py-3 rounded-md text-black font-medium'>Start Trial</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards