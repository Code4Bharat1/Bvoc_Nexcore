"use client";

import React from "react";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

const PlacementAssistance = () => {
  return (
    <section className="w-7xl max-w-full mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/placement-card.png"
            alt="Placement Assistance"
            width={500}
            height={200}
            className="rounded-2xl lg:w-full lg:h-96 object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          {/* For desktop */}
          <h1 className="hidden lg:block text-5xl font-bold text-white leading-tight mb-10">
            Placement Assistance: <br className="hidden lg:block" />
            <span className="text-[#AC6CFF]">Your Path to Success!</span>
          </h1>
          <p className="hidden lg:block text-2xl text-white my-14 pr-20">
            At <span className="text-[#AC6CFF]"> Nexcore Alliance LLP</span>, we
            don’t just teach—you <span className="text-[#AC6CFF]"> intern</span>{" "}
            and <span className="text-[#AC6CFF]">work</span>. Our{" "}
            <span className="text-[#AC6CFF]">100% placement assistance</span>{" "}
            ensures you’re job-ready.
          </p>

          {/* For Mobile */}
          <h1 className="lg:hidden text-3xl font-bold text-white text-center leading-tight mb-4">
            Placement Assistance: <br />
            <span className="text-[#AC6CFF]">Your Path to Success!</span>
          </h1>
          <p className="lg:hidden text-lg text-white mb-6 text-center">
            At <span className="text-[#AC6CFF]"> Nexcore Alliance LLP</span>, we
            don’t just teach—you <span className="text-[#AC6CFF]"> intern</span>{" "}
            and <span className="text-[#AC6CFF]">work</span>. Our{" "}
            <span className="text-[#AC6CFF]">100% placement assistance</span>{" "}
            ensures you’re job-ready.
          </p>
          {/* Enroll Button */}
          <button className="bg-[#EADAFF] text-[#AC6CFF] font-semibold py-4 px-5 lg:px-10 rounded-full transition-transform hover:scale-105 flex items-center space-x-2 mx-auto lg:mx-0">
            <IoMdPlay />
            <span>Enroll Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
