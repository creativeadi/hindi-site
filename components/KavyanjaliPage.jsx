"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Music, Mic, Book, Theater, Phone, Sparkles } from 'lucide-react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const KavyanjaliPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ff8f7d" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.5,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      }
    },
    retina_detect: true
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const eventHighlights = [
    { icon: <Mic className="w-6 h-6" />, text: "Story Telling & Stand Up" },
    { icon: <Music className="w-6 h-6" />, text: "Singing and Music" },
    { icon: <Book className="w-6 h-6" />, text: "Book Stalls" },
    { icon: <Theater className="w-6 h-6" />, text: "Tuk Bandi" },
    { icon: <Mic className="w-6 h-6" />, text: "Open Mic" },
    { icon: <Theater className="w-6 h-6" />, text: "Drama" },
  ];

  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-fixed p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/90 to-orange-200/90 backdrop-blur-sm" />
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-300" />
        </div>

        {/* Header Section with Enhanced Animation */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 200
              }}
              className="absolute -top-6 -left-6 text-4xl text-orange-500"
            >
              ✦
            </motion.div>
            
            <h1 className="font-samarka text-6xl sm:text-8xl text-orange-900 mb-4 relative">
              <span className="absolute -top-1 -left-1 text-orange-300 opacity-50 blur-[1px]">काव्यमंच</span>
              काव्यमंच
              <motion.span 
                className="block text-3xl sm:text-4xl text-orange-700 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Kavyamanch
              </motion.span>
            </h1>

            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.3
              }}
              className="absolute -bottom-6 -right-6 text-4xl text-orange-500"
            >
              ✦
            </motion.div>
          </div>

          {/* Enhanced Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-lg bg-white/50 backdrop-blur-sm border-orange-300 hover:bg-orange-50">
                <Calendar className="w-4 h-4 mr-2" /> 20th February
              </Badge>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-lg bg-white/50 backdrop-blur-sm border-orange-300 hover:bg-orange-50">
                <Clock className="w-4 h-4 mr-2" /> 2PM - 5PM
              </Badge>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-lg bg-white/50 backdrop-blur-sm border-orange-300 hover:bg-orange-50">
                <MapPin className="w-4 h-4 mr-2" /> Open Air Auditorium
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Details Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 sm:p-6 backdrop-blur-md bg-white/80 hover:bg-white/90 
              transition-all duration-300 border-orange-200 h-full">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h3 className="font-samarka text-4xl text-orange-800">
                  Event Highlights
                </h3>
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {eventHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-orange-50/50 hover:bg-orange-100/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {item.icon}
                    </div>
                    <p className="text-lg text-orange-900 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Registration Form Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 sm:p-6 backdrop-blur-md bg-white/80 hover:bg-white/90 
              transition-all duration-300 border-orange-200 h-full">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-2xl text-orange-500">✦</span>
                <h3 className="font-samarka text-4xl text-orange-800">
                  Registration
                </h3>
                <span className="text-2xl text-orange-500">✦</span>
              </div>
              <div className="w-full min-h-[600px] bg-orange-50/50 rounded-lg relative overflow-hidden border border-orange-200">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScrqY3EZsUFURUE-a4JTODYtZ3dekWUbz0Pq6JSAsNx-R5Qwg/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="backdrop-blur-sm"
                >
                  Loading Registration Form...
                </iframe>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="p-4 sm:p-6 backdrop-blur-md bg-white/80 hover:bg-white/90 
            transition-all duration-300 border-orange-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-6 h-6 text-orange-500" />
              <h3 className="font-samarka text-3xl text-orange-800">
                Student Co-ordinators
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {['Dharmbir Singh: 8887808716', 'Dheeraj Saraswat: 6367510083'].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="text-lg p-6 hover:bg-orange-100 border-orange-200"
                  >
                    <Phone className="w-4 h-4 mr-2 text-orange-500" />
                    {contact}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default KavyanjaliPage; 