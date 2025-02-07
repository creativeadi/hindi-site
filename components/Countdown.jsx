"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Countdown = ({ onCountdownComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10
  });
  const [fadeOut, setFadeOut] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);

  useEffect(() => {
    let targetDate = localStorage.getItem('countdownTarget');
    
    if (!targetDate) {
      const newTarget = new Date();
      newTarget.setSeconds(newTarget.getSeconds() + 10); // Set to 10 seconds
      targetDate = newTarget.getTime().toString();
      localStorage.setItem('countdownTarget', targetDate);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = parseInt(targetDate) - now;

      if (difference <= 0) {
        setFadeOut(true);
        setPulseEffect(true);
        localStorage.removeItem('countdownTarget');
        setTimeout(() => {
          onCountdownComplete();
        }, 1500);
        clearInterval(timer);
        return;
      }

      // Only show seconds for 10-second countdown
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: Math.ceil(difference / 1000)
      });

      if (difference % 1000 < 50) {
        setPulseEffect(true);
        setTimeout(() => setPulseEffect(false), 100);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2,
              }}
            >
              <span className="text-orange-500 text-3xl">✦</span>
            </div>
          ))}
        </div>

        <div className="text-center p-8 relative z-10">
          <h1 className="font-samarka text-6xl text-orange-900 mb-8 relative animate-title">
            <span className="text-red-700 text-5xl relative mr-4">✦</span>
            Hindi Club Website
            <span className="text-red-700 text-5xl relative ml-4">✦</span>
          </h1>
          
          <h2 className="font-samarka text-4xl text-orange-800 mb-12 animate-reveal">
            Revealing Soon
          </h2>

          <div className="flex justify-center gap-6 mb-12">
            {/* Only show seconds counter */}
            <div 
              className={`text-center transform transition-all duration-200 ${
                pulseEffect ? 'scale-102' : 'scale-100'
              }`}
            >
              <div className="w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-500 
                            rounded-lg shadow-lg flex items-center justify-center mb-2
                            transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                <span className="font-samarka text-5xl text-white relative z-10">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="font-samarka text-2xl text-orange-800 capitalize block">
                seconds
              </span>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-orange-400/50 rounded-full animate-ping-slow"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400/50 rounded-full animate-ping-slow delay-500"></div>
        </div>

        <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-20">
          <Image
            src="/bow copy.png"
            alt="Decorative Bow Left"
            width={200}
            height={200}
            className="animate-float"
          />
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-20">
          <Image
            src="/bow copy.png"
            alt="Decorative Bow Right"
            width={200}
            height={200}
            className="animate-float delay-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Countdown;