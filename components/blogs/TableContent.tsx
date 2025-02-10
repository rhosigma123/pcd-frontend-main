import React from 'react'
import CommonFrom from '../common/CommonFrom'


function TableContent() {
  return (
        <section className='w-full sticky top-10 hidden xl:flex  items-start flex-col gap-5  '> 
            <div className='flex flex-col gap-1 w-full relative bg-websecondary p-8 text-webaccent '>
                <h2 className='text-p22 text-webaccent font-semibold'>
                    Table of Content
                </h2>
                <ul className='w-full relative h-auto flex flex-col gap-1 mt-5 '>
                    <li className=' border-b border-white border-webaccent text-p18 font-medium px-4 py-2 '>Lorem ipsum dolor sit  </li>
                    <li className=' border-b border-white border-webaccent text-p18 font-medium px-4 py-2 '>Lorem ipsum dolor sit  </li>
                    <li className=' border-b border-white border-webaccent text-p18 font-medium px-4 py-2 '>Lorem ipsum dolor sit  </li>
                    <li className=' border-b border-white border-webaccent text-p18 font-medium px-4 py-2 '>Lorem ipsum dolor sit  </li>
                    <li className=' border-b border-white border-webaccent text-p18 font-medium px-4 py-2 '>Lorem ipsum dolor sit  </li>
                </ul>
            </div>
            <CommonFrom title={"Get a Free Quote"} fromtitlecss='text-white ' titlecss='text-white' css='bg-webaccent text-white' />
        </section>
  )
}

export default TableContent