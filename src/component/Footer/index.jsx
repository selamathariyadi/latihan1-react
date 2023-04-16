import React from 'react'
import {FaFacebookSquare,FaInstagram,FaDribbbleSquare,FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'
function Footer() {
  return (
   <>
   <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quia quae praesentium officia dicta pariatur consectetur recusandae quis quam, inventore, voluptates qui voluptatibus amet commodi mollitia fugiat, magnam corporis. Voluptatum?</p>
        <div className='flex justify-between lg:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
        </div>
        
        <div className='lg:col-span-2 flex justify-between mt-4  sm:px-20'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>

                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Supports</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>

                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>

                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>

                </ul>
            </div>
        </div>
   </div>
   </>
  )
}

export default Footer