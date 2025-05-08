import Image from "next/image";
import React from "react";

function CareerPath() {
  return (
    <section className="bg-[#2B2038] w-full py-16 px-6 relative overflow-hidden">
      {/* Circle Element OUTSIDE content container */}
      <div className="absolute top-24 lg:top-[55%] left-0 -translate-y-1/2 z-0 overflow-hidden">
        <Image
          src="/elements/CircleElement_Home.svg"
          alt="Circle Element"
          width={140}
          height={100}
          className="object-cover w-16 lg:w-40" // Ensure the circle image doesn't stretch
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
        {/* Left Side */}
        <div className="z-10">
          <h2 className="text-[#F8F9FF] text-4xl lg:text-5xl font-extrabold my-6 lg:my-12">
            Career Path
          </h2>

          <div className="relative z-10">
            <Image
              src="/CareerPath.png"
              alt="Career Path"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Star Element */}
          <div className="absolute right-2 top-20 lg:right-28 lg:top-48 transform -translate-y-1/2 z-0">
            <Image
              src="/elements/CareerStarElement_Home.svg"
              alt="Star Element"
              width={30}
              height={120}
              className=""
            />
          </div>

          <div className="relative z-10">
            {/* For Desktop */}
            <h3 className="hidden lg:block text-[#EADAFF] text-5xl font-bold mb-10 leading-14">
              Where Will Your Journey Take You?
            </h3>
            <p className="hidden lg:block text-[#F8F9FF] text-3xl leading-12">
              The best part? You’re not limited. <br />
              Whether you're just starting or you're <br />
              aiming for an advanced role, the <br />
              B.Voc AI & ML degree offers a clear path to <br />
              exciting opportunities at every stage of <br />
              your career.
            </p>

            {/* For Mobile */}
            <h3 className="lg:hidden text-[#EADAFF] text-center text-2xl font-bold mb-10 leading-7 mt-8">
              Where Will Your Journey <br /> Take You?
            </h3>
            <p className="lg:hidden text-[#F8F9FF] text-xl text-center leading-8">
              The best part? You’re not limited. Whether you're just starting or
              you're aiming for an advanced role, the B.Voc AI & ML degree
              offers a clear path to exciting opportunities at every stage of
              your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerPath;
