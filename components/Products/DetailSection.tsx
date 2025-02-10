import React from 'react'
import CommonFrom from '../common/CommonFrom'
import NewsLetter from '../common/NewsLetter'
import ConnectSection from '../Home/ConnectSection'
import Faqs from '../common/Faqs'
function DetailSection() {
  return (
    <>
    <section className='w-full relative grid  grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 flow-container py-20'>
            <div className='w-full relative flex items-start flex-col gap-5'>
                    <div className='flex flex-col gap-3 p-5 bg-websecondary w-full '>
                        <h2 className='w-full relative text-p32 font-medium text-webaccent '>Ayabn</h2>

                        <ul className='w-full relative flex flex-col gap-2 '>
                            <li className='w-full relative text-p18 text-webaccent'></li>
                        </ul>
                    </div>

                <Faqs/>

            </div>
            <div className='w-full  h-auto flex items-center justify-center sticky top-10 '>
                    <CommonFrom title={'Contact Us Today for'} css='bg-secondary ' subtitle='Thermal Mass Flow Meter' />
            </div>

     </section>

    <ConnectSection title={'feel free to contact us for any quries'} isProductBanner={false}/>
     <NewsLetter/>

     </>
  )
}

export default DetailSection