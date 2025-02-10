import React from 'react'
import ProductDetailBanner from '@/components/Products/ProductDetailBanner'
import DetailFilter from '@/components/Products/DetailFilter'
import DetailSection from '@/components/Products/DetailSection'
import ConnectSection from '@/components/Home/ConnectSection'
import NewsLetter from '@/components/common/NewsLetter'

function page() {
  return (
    <>
        <ProductDetailBanner/>
        <DetailFilter/>
        <DetailSection/>
        <ConnectSection title='' isProductBanner={false}/>
        <NewsLetter/>

    </>
  )
}

export default page