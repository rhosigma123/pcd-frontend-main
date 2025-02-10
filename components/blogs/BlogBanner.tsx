import React from 'react'
import Image from 'next/image'
function BlogBanner() {
  return (
    <section className='w-full relative   gap-3 h-[60vh]  bg-cover  '>
            <Image src={"/blogs-banner.png"} alt='blogImage' height={1500} width={1500} className='w-full object-cover h-full  '/>
            <div className='w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-t from-black/55 from-10% via-transparent via-30%  '>
            
            </div>
    </section>
  )
}

export default BlogBanner