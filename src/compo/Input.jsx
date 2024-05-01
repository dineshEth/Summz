import React from 'react'
import {RiCornerDownLeftFill,RiCloseLine, RiLinkM} from '@remixicon/react'

function Input({handleDataFetching, url, setUrl, loader}) {
  return (
    <div className=' w-full my-10 flex justify-center items-center '>
        <div className='bg-white flex flex-row max-w-2xl w-full p-2 rounded-sm'>
            {/* logo */}
            <p className=' font-normal text-black border-[1px] px-1 flex justify-center items-center border-black/60'>
              {url ? (<RiCloseLine size={28} onClick={()=>setUrl('')} />) : (<RiLinkM size={28} className='' />)}
            </p>
            <input
            required
            placeholder='Paste article url' 
            value={url}
            onChange={(e)=> setUrl(e.target.value)}
            type="url" 
            className='outline-none text-black px-2 bg-transparent border-[1px] w-full border-black/60' />
            <button disabled={loader} onClick={handleDataFetching} 
            className={`text-black border-[1px] px-1 border-black/60`} ><RiCornerDownLeftFill size={36}  /></button>
        </div>
    </div>
  )
}

export default Input