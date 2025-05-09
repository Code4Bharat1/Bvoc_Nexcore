import React, { useState } from 'react';
import Image from 'next/image';

const ModernInfra = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`hidden lg:flex min-h-screen items-center justify-center transition-all duration-500 ease-in-out ${
        isHovered
          ? 'bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E]'
          : 'bg-gradient-to-b from-[#160E6E] via-[#3D0B67] to-[#3A0B57]'
      }`}
    >
      <Image
        src="/ModernInfra.svg"
        alt="Modern Infrastructure"
        width={700}
        height={700}
        className="max-w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
        priority
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ModernInfra;
