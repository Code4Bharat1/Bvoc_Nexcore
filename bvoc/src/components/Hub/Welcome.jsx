import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className="py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">

    {/* SVG Element Positioned Above Heading */}
      <div className="absolute top-[13%] right-[20%] lg:left-[410px] lg:top-[100px] transform -translate-x-1/2 lg:translate-x-0 z-10">
          <Image 
            src="/elements/HeroElement.svg" 
            alt="Decorative Element" 
            width={40} 
            height={20} 
            className='w-5 h-20 lg:w-20 lg:h-7'
          />
        </div>

        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6">
        Welcome to <br />
        the Future of <br />
        <span className="text-[#AC6CFF]">Learning!</span>
        </h1>
        <p className="hidden lg:block text-[28px] text-white mb-8">
          We’re excited to introduce a game-changing partnership between <span className='text-[#AC6CFF]'>Nexcore Alliance LLP</span> and <span className='text-[#AC6CFF]'>Guru Kashi University (GKU)</span>—an alliance designed to bring you the <span className='text-[#AC6CFF]'>B.Voc (Bachelor of Vocation)</span>degree programs that fuse industry expertise with academic excellence.
        </p>
        <p className="lg:hidden text-lg text-white mb-8">
          We’re excited to introduce a game-changing partnership between <span className='text-[#AC6CFF]'>Nexcore Alliance LLP</span> and <span className='text-[#AC6CFF]'>Guru Kashi University (GKU)</span>—an alliance designed to bring you the <span className='text-[#AC6CFF]'>B.Voc (Bachelor of Vocation)</span>degree programs that fuse industry expertise with academic excellence.
        </p>
        <button className="bg-[#EADAFF] text-[#AC6CFF] px-8 py-3 rounded-full text-lg hover:bg-[#AC6CFF] hover:text-[#EADAFF] transition">
          Enroll Now
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 ">
        <Image 
          src="/hero-image.jpg" 
          alt="Hero Illustration" 
          width={600} 
          height={400} 
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  )
}

export default Welcome
