'use client';

import Image from 'next/image';
import { useState } from 'react';

const BoxDesign = ({ pattern, altText, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex justify-center items-center h-full mx-auto w-full max-w-xl mb-6 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-l from-orange-50 to-transparent rounded-lg -rotate-2 transition-all duration-300 group-hover:-rotate-4 group-hover:scale-105" />
      
      <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        <Image
          src={pattern}
          alt={altText}
          width={800}
          height={176}
          className={`w-full h-44 object-cover transition-all duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Samarkan' }}>{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxDesign; 