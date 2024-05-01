import React from 'react'
import {RiFileCopyFill, RiVolumeUpFill} from '@remixicon/react'

function Summary({summary}) {
  return (
    <section className='w-full  mx-auto'>
        <div className='flex flex-row gap-2 text-xl justify-start items-center'>
            <h2 className='text-white'>Article</h2>
            <h2 className='font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#14e2e2]'>Summary</h2>
        </div>
        <div className='w-full pl-4 my-2'>
          <div className='bg-white/10 relative p-4 rounded-2xl'>
            {/* <div className='flex absolute right-4 mb-2 flex-row justify-start items-center ga-2'>
              <RiFileCopyFill size={28} className='hover:text-blue-500 '  />
              <RiVolumeUpFill size={28} className='hover:text-blue-500' />
            </div> */}
            <pre className=' text-wrap'>{summary}</pre>
          </div>
        </div>

    </section>
  )
}

export default Summary