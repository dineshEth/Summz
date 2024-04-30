import React from 'react'

function Button({children,type = 'button', variant, className = "", ...props}) {
  return (
    <button {...props} className='bg-green-500 hover:bg-green-600 p-1 px-4 rounded-2xl text-xl text-black'>{children}</button>
  )
}

export default Button