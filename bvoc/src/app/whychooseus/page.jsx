import React from 'react'
import Navbar from '@/components/layout/Navbar'
import CardCarousel from '@/components/WhyChooseUs/Cardcarousel'
 const page = () => {
  return (
    <div>
    <Navbar/>
    <main className="bg-[#0f0f1a] min-h-screen">
    <CardCarousel/>
    </main>
    </div>
  )
}
export default page