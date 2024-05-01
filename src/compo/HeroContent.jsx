import React from 'react'

function HeroContent({summary}) {
  return (
    <div className='w-full my-10 flex flex-col gap-2 justify-start items-center '>
        <h1 className='text-3xl md:text-7xl font-extrabold text-center'>Summarize Articles with </h1>
        <h1 className='text-3xl text-gradient md:text-7xl font-extrabold text-center '>OpenAI GPT-4</h1>
        <p className='font-extralight max-w-3xl text-center opacity-60 '>Simplify your reading with summz, an open source article summarizer that transforms lengthy articles into clear and concise summaries.</p>
    </div>
  )
}

export default HeroContent