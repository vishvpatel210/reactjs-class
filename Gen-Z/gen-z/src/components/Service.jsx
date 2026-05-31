import React from 'react'
import { FaCode } from "react-icons/fa6";

export default function Service() {
  return (
    <div>
        <div className='text-5xl mt-30 ml-200'>Services</div>
      <div className='mt-10 md:mt-30 ml-4 md:ml-20 flex flex-wrap'>
        
        <div className='border-2 h-60 w-full md:w-[45%] ml-0 md:ml-20 mb-10 flex'>
            <div className='m-10'>
                <FaCode className="text-4xl text-blue-500"/>
            </div>
            <div className='mt-10'> 
                <div>Web Development</div>
                <div>Build modern and responsive websites using latest technologies.</div>
            </div>
        </div>

        <div className='border-2 h-60 w-full md:w-[45%] ml-0 md:ml-20 mb-10 flex'>
            <div className='m-10'>
                <FaCode className="text-4xl text-blue-500"/>
            </div>
            <div className='mt-10'> 
                <div>Web Development</div>
                <div>Build modern and responsive websites using latest technologies.</div>
            </div>
        </div>

        <div className='border-2 h-60 w-full md:w-[45%] ml-0 md:ml-20 mb-10 flex'>
            <div className='m-10'>
                <FaCode className="text-4xl text-blue-500"/>
            </div>
            <div className='mt-10'> 
                <div>Web Development</div>
                <div>Build modern and responsive websites using latest technologies.</div>
            </div>
        </div>

        <div className='border-2 h-60 w-full md:w-[45%] ml-0 md:ml-20 flex'>
            <div className='m-10'>
                <FaCode className="text-4xl text-blue-500"/>
            </div>
            <div className='mt-10'> 
                <div>Web Development</div>
                <div>Build modern and responsive websites using latest technologies.</div>
            </div>
        </div>

      </div>
    </div>
  )
}