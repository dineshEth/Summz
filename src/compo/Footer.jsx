import React from 'react'
import { profile } from '../assets'

function Footer() {
  return (
    <div className='w-full  mt-8 bg-black min-h-[20vh] left-0 right-0 bottom-0 p-2'>
      <div className='flex flex-row flex-wrap justify-around items-center'>
        <div className='flex flex-col items-center my-2 justify-center '>
          <h1 className='text-gradient text-3xl font-extrabold'>Sumz</h1>
          <div className='flex flex-row gap-2 justify-start items-start'>
            <div className='w-24 h-24 rounded-full overflow-hidden border-[1px] border-[#dc8614]'>
              <img src={profile} alt="profile" />
            </div>
            <div className=''>
              <p className='text-2xl'>Dinesh Prajapati</p>
              <p>Software Engineer </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 flex-wrap justify-start  items-start'>
          <p className=''>@dinesh_eth</p>
          <p className=''>@dineshprajapati41</p>
          <p className=''>@cs_dinezh</p>
        </div>
      </div>
      <p className='text-center py-2'>
        Copyright. All rights are reserved 2024</p>
    </div>
  )
}

export default Footer