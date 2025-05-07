import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className="bg-[#1712331B] relative lg:mt-6 py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12 overflow-hidden">
      
      {/* Decorative Stars SVGs */}
      <Image 
        src="/elements/StarsElement.svg" 
        alt="Star Top Right" 
        width={50} 
        height={50}
        className="absolute top-4 right-48 w-8 h-8 lg:w-12 lg:h-7"
      />
      <Image 
        src="/elements/StarsElement.svg" 
        alt="Star Bottom Right" 
        width={50} 
        height={50}
        className="absolute bottom-8 right-52 w-8 h-8 lg:w-12 lg:h-12"
      />
      <Image 
        src="/elements/StarsElement.svg" 
        alt="Star Bottom Left" 
        width={50} 
        height={50}
        className="absolute bottom-28 left-6 lg:left-72 w-8 h-8 lg:w-12 lg:h-8"
      />

      {/* Text Section */}
      <div className="relative lg:w-1/2 text-center lg:text-left">

        {/* SVG Element Positioned Above Heading */}
        <div className="absolute top-5 left-10/12 md:left-1/2 lg:top-6 transform -translate-x-1/2 lg:-translate-x-0 z-10">
          <Image 
            src="/elements/HeroElement.svg" 
            alt="Decorative Element" 
            width={80} 
            height={30} 
            className="w-8 h-4 lg:w-16 lg:h-8"
          />
        </div>

        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6 mt-6 lg:mt-14">
          Welcome to <br />
          the Future of <br />
          <span className="text-[#AC6CFF]">Learning!</span>
        </h1>

        <p className="hidden lg:block text-[28px] text-white mb-8">
          We’re excited to introduce a game-changing partnership between <span className='text-[#AC6CFF]'>Nexcore Alliance LLP</span> and <span className='text-[#AC6CFF]'>Guru Kashi University (GKU)</span>—an alliance designed to bring you the <span className='text-[#AC6CFF]'>B.Voc (Bachelor of Vocation)</span> degree programs that fuse industry expertise with academic excellence.
        </p>
        <p className="lg:hidden text-lg text-white mb-8">
          We’re excited to introduce a game-changing partnership between <span className='text-[#AC6CFF]'>Nexcore Alliance LLP</span> and <span className='text-[#AC6CFF]'>Guru Kashi University (GKU)</span>—an alliance designed to bring you the <span className='text-[#AC6CFF]'>B.Voc (Bachelor of Vocation)</span> degree programs that fuse industry expertise with academic excellence.
        </p>

        <button className="bg-[#EADAFF] text-[#AC6CFF] px-8 py-3 rounded-full text-lg hover:bg-[#AC6CFF] hover:text-[#EADAFF] transition">
          Enroll Now
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block md:w-1/2">
        <Image 
          src="/elements/AI_Element_Home.svg" 
          alt="Hero Illustration" 
          width={200} 
          height={150} 
          className=""
        />
      </div>
    </section>
  )
}

export default Welcome
