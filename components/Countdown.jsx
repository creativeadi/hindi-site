"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Countdown = ({ onCountdownComplete }) => {
  const initialStarPositions = Array(10).fill(null).map((_, i) => ({
    left: `${((i % 5) * 25)}%`,
    top: `${Math.floor(i / 5) * 50}%`,
    delay: '0s'
  }));

  const [starPositions] = useState(initialStarPositions);
  const [fadeOut, setFadeOut] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    const endDate = new Date('2025-02-21T13:30:00+05:30'); 
    const now = new Date();
    
    const difference = endDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
        setFadeOut(true);
        setTimeout(onCountdownComplete, 1000);
      }

      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 100);
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownComplete]);

  const TimeUnit = ({ value, label }) => (
    <div className="text-center">
      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-orange-400 to-orange-500 
                    rounded-lg shadow-lg flex items-center justify-center mb-2
                    transition-all duration-300 hover:shadow-xl relative overflow-hidden
                    transform hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        <span className="font-samarka text-3xl sm:text-5xl text-white relative z-10">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="font-samarka text-xl sm:text-2xl text-orange-800 capitalize block">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {starPositions.map((position, i) => (
            <div key={i} className="absolute animate-float-random"
              style={{
                left: position.left,
                top: position.top,
                animationDelay: position.delay,
                opacity: 0.2,
              }}>
              <span className="text-orange-500 text-3xl">✦</span>
            </div>
          ))}
        </div>

        <div className="text-center p-4 sm:p-8 relative z-10 w-full max-w-4xl mx-auto">
          <h1 className="font-samarka text-4xl sm:text-8xl text-orange-800 mb-4 sm:mb-8 relative animate-title flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-red-700 text-6xl sm:text-15xl relative">✦</span>
            <span className="whitespace-nowrap">Hindi Club Website</span>
            <span className="text-red-700 text-6xl sm:text-15xl relative">✦</span>
          </h1>
          
          <h2 className="font-samarka text-2xl sm:text-4xl text-orange-800 mb-8 sm:mb-12 animate-reveal">
            Revealing Soon
          </h2>

          <div className="relative flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-orange-400/50 rounded-full animate-ping-slow"></div>
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-orange-400/50 rounded-full animate-ping-slow delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;