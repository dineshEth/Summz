import React from 'react'
import Button from './Button'
import { logo } from '../assets'


function Navbar() {
    const redirectLink = () =>{
        window.location.href = `https://github.com/dineshEth/`
    }
  return (
    <nav className='w-full  py-2 rounded-2xl my-2 flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-start gap-[2px] items-center'>
            <img src={logo} alt="logo" className='w-[72px] rotate-90 ' />
            <span className='text-gradient font-scode text-3xl font-extrabold'>Summz</span>
        </div>
        <Button onClick={redirectLink} type='button' >Github</Button>
    </nav>
  )
}

export default Navbar