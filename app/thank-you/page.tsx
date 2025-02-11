import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

import Link from 'next/link';

function page() {
  return (
    <>
    <section className='flex flex-col   items-center justify-center h-[90vh] relative'>
        <h1 className='text-bannerfont font-medium text-webaccent '>Thank You</h1>
        <p className='text-center text-p22 text-webtext  '>Your form has been submitted successfully! We’ll get back to you soon</p>
        <Link href="/" className='text-p18 mt-10 flex items-center gap-4 px-5 py-2 bg-webaccent text-white  rounded-xl group hover:border-webaccent border border-transparent hover:text-webaccent hover:bg-transparent '>
        <IoHomeOutline className='text-[20px] group-hover:text-webaccent '/>  Go Back Home
        </Link>
    </section>
    </>
  )
}

export default page