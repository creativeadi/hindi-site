"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const BoxDesign = ({ pattern, altText, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full max-w-md mx-auto relative overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-500 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={pattern}
        alt={altText}
        width={500}
        height={176}
        className="w-full h-36 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-300"/>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transform transition-all duration-500">
        <h3 
          className={`text-white text-2xl mb-2 text-center transform transition-all duration-500 ${
            isHovered ? 'scale-110 -translate-y-2' : 'scale-100'
          }`}
          style={{ 
            fontFamily: 'Samarkan, cursive',
            textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
          }}
        >
          {title}
        </h3>
        <p className={`text-white/90 text-sm font-sans text-center max-w-md transform transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {description}
        </p>
      </div>
      <div className="absolute inset-0 border-2 border-orange-300/0 group-hover:border-orange-300/50 rounded-lg transition-all duration-500"/>
    </div>
  );
};

const HindiEvents = () => (
  <div className="relative group mb-12 max-w-3xl mx-auto">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
    <div className="relative px-8 py-8 bg-gradient-to-r from-orange-300 via-red-200 to-orange-300 rounded-lg ring-1 ring-orange-400/50 shadow-xl">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-pattern opacity-0"></div>
      </div>
      <h1 
        className="relative text-6xl text-orange-900 flex items-center justify-center gap-6 animate-float"
        style={{ fontFamily: 'Samarkan' }}
      >
        <span className="text-red-700 text-5xl relative animate-pulse">
          ✦
          <span className="absolute inset-0 animate-ping">✦</span>
        </span>
        Hindi Club Events
        <span className="text-red-700 text-5xl relative animate-pulse">
          ✦
          <span className="absolute inset-0 animate-ping">✦</span>
        </span>
      </h1>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce delay-300"></div>
    </div>
  </div>
);

const ComingSoon = () => (
    <div className="absolute -left-8 top-1/2 -translate-y-1/2 hover:translate-x-8 transition-transform duration-700">
      <div className="rotate-90 origin-center group animate-sway">
        <p 
          className="text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 text-white p-6 rounded-lg shadow-lg 
          hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-all duration-500 hover:scale-110 animate-gradient-x cursor-pointer
          group-hover:animate-gradient-pulse relative overflow-hidden transform perspective-1000 hover:rotate-y-12"
          style={{ fontFamily: 'Samarkan' }}
        >
          <span className="relative z-10 animate-float-slow group-hover:text-orange-200 transition-colors duration-300">
            Coming Soon
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 blur opacity-0 group-hover:opacity-75 transition-all duration-500 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </p>
      </div>
    </div>
  );

  const BowAndArrow = () => (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 animate-bow group">
      <div className="relative">
        <Image
          src="/bow copy.png"
          alt="Bow and Arrow"
          width={160}
          height={160}
          className="w-full h-auto transform hover:scale-110 transition-all duration-300 
          group-hover:brightness-110 group-hover:contrast-125 filter 
          hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent 
          opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shine"></div>
      </div>
    </div>
  );

const EventPage = () => (
    
    <div className="min-h-screen relative bg-orange-50">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto pl-16 pr-8 py-12 relative z-10"> 
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="h-full flex items-center relative">
              <ComingSoon />
            </div>
          </div>
  
          <div className="col-span-6 flex flex-col items-center">
            <div className="w-full space-y-6">
              <HindiEvents />
              
              <div className="space-y-6 w-full flex flex-col items-center">
                <BoxDesign 
                  pattern="/image.png" 
                  altText="Kavyanjali Event" 
                  title="Kavyanjali 2.0"
                  description="A celebration of poetry and literature"
                />
                <BoxDesign 
                  pattern="/p2.png" 
                  altText="Rangotsav Event" 
                  title="Rangotsav"
                  description="Festival of colors and creativity"
                />
                <BoxDesign 
                  pattern="/p3.png" 
                  altText="Hindi Diwas Event" 
                  title="Hindi Diwas"
                  description="Celebrating the Hindi language"
                />
              </div>
            </div>
          </div>
  
          <div className="col-span-3">
            <div className="h-full flex items-center relative">
              <BowAndArrow />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
      .bg-pattern {
        background-image: url('/bg.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        opacity: 1.0;
      }
        @keyframes sway {
        0%, 100% { transform: rotate(90deg) translateX(0px); }
        25% { transform: rotate(88deg) translateX(5px); }
        75% { transform: rotate(92deg) translateX(-5px); }
      }

      @keyframes float-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      .animate-sway {
        animation: sway 6s ease-in-out infinite;
      }

      .animate-float-slow {
        animation: float-slow 3s ease-in-out infinite;
      }
      @keyframes bowMovement {
        0% { transform: translateX(0) translateY(-50%); }
        25% { transform: translateX(-10px) translateY(-52%) rotate(-2deg); }
        50% { transform: translateX(-5px) translateY(-50%) rotate(0deg); }
        75% { transform: translateX(-8px) translateY(-48%) rotate(2deg); }
        100% { transform: translateX(0) translateY(-50%) rotate(0deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes gradient-pulse {
        0% { background-size: 100% 100%; }
        50% { background-size: 120% 120%; }
        100% { background-size: 100% 100%; }
      }
      .animate-bow {
        animation: bowMovement 4s ease-in-out infinite;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
        background-size: 200% 200%;
      }
      .animate-gradient-pulse {
        animation: gradient-pulse 2s ease-in-out infinite;
      }
      .animate-gradient-xy {
        animation: gradient-x 10s ease infinite;
        background-size: 400% 400%;
      }
    `}</style>
  </div>
);

export default EventPage;