import React from 'react'
import Image from 'next/image'

type industriesCard={
  title:string,
  image:string
  iconcss?:string,
}


function IndustriesCard({title,image , iconcss}:industriesCard) {
  return (
    <div className='flex flex-col gap-1 w-fit self-centern items-center justify-center transition-all duration-300 justify-self-center hover:bg-websecondary  px-5 py-3 cursor-pointer text-sm bg-white  '>
            <Image src={image} alt='industries-image | flow devices' height={200} width={200} className={` object-contain ${iconcss ?  iconcss: "h-[60px] w-[70px]"} `}/>
            <p className='text-base  font-semibold text-webaccent'>{title}</p>
    </div>
  )
}

export default IndustriesCard