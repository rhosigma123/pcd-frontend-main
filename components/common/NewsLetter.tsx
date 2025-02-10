import React from 'react'

function NewsLetter() {
  return (
        <section className='w-full relative py-20 h-auto flow-container flex flex-col md:flex-row  items-start md:items-center justify-between gap-5 '>
            <span className='flex items-start flex-col '>
                <h2 className='text-p50 font-medium text-webaccent leading-[1.3]'>Newslatter</h2>
                <p className=' text-lg font-normal '>Subscribe to our newsletter for updates!</p>
            </span>
            <form action={''}  className=' w-full md:w-[500px] relativge h-auto flex items-center  border border-webtext overflow-hidden rounded-full'>
                <input type="text" className='w-full px-4 py-2  relative h-auto text-p18 text-webaccent placeholder:text-webaccent  ' placeholder='E.g : Example@gmail.com' />
                <button className='text-white h-full py-2 px-2 md:px-4 text-p18 font-medium bg-webaccent rounded-r-full uppercase'>SUBSCRIBE</button>
            </form>
        </section>
  )
}

export default NewsLetter