"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import End from "@/components/End";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Teams from "@/components/Teams";
import WebTeam from "@/components/WebTeam";
import EventPage from "@/components/eventsection";
import AboutUs from "@/components/AboutUs";
import Countdown from "@/components/Countdown";
import { SlideInImage } from "@/components/Home";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faCircleQuestion,faImage,faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-b from-yellow to-orange overflow-x-hidden">
      <div className="absolute w-screen top-10 min-h-[10px] gap-2 flex items-center justify-center z-40">
        <div>
          <Link href="/" className="p-5">
            <FontAwesomeIcon icon={faHouse} style={{color: "#9F2828"}} className="w-7 h-7 transition-transform duration-200 transform hover:scale-125" />
          </Link>
        </div>
        <div>
          <Link href="#aboutus" className="p-5">
            <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#9F2828"}} className="w-7 h-7 transition-transform duration-200 transform hover:scale-125"/>
          </Link>
        </div>
        <div>
          <Link href="#teams" className="p-5">
            <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#9F2828"}} className="w-7 h-7 transition-transform duration-200 transform hover:scale-125"/>
          </Link>
        </div>
        <div>
          <Link href="#events" className="p-5">
            <FontAwesomeIcon icon={faImage} style={{color: "#9F2828"}} className="w-7 h-7 transition-transform duration-200 transform hover:scale-125" />
          </Link>
        </div>
      </div>

      <div className="relative w-screen bg-transparent md:min-h-[55vh] xxs:min-h-[70vh]">
        <div className="flex justify-between">
          <div>
            <Image src="/Home/left.png" alt="left" width={300} height={300} className="pr-[100px]" />
          </div>
          <div>
            <Link href="https://vitbhopal.ac.in/" target="_blank" className="md:absolute md:top-[100px] z-20">
              <Image src="/Home/vit.png" alt="home" width={100} height={100} className="cursor-pointer"/>
            </Link>
          </div>
          <div>
            <Image src="/Home/right.png" alt="right" width={300} height={300} className="pl-[100px]" />
          </div>
        </div>

        <div className="absolute top-[90px] h-full w-full flex flex-col justify-center items-center">
          <div className="absolute">
            <motion.div 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute sm:top-10 xxs:top-5 w-[100%] sm:w-[75%] xs:w-[60%] xxs:w-[50%] sm:right-1 xxs:right-11 flex items-center justify-center"
            >
              <Image src="/Home/text1.png" alt="text1" width={380} height={60} className="transition-transform duration-200 transform hover:scale-110" />
            </motion.div>
            <Image src="/Home/Home.png" alt="home" width={750} height={300} className="p-3" />
            <motion.div 
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute xxs:bottom-11 sm:pb-10 w-[100%] sm:w-[75%] xs:w-[60%] xxs:w-[50%] xxs:right-11 xs:pl-5 sm:pl-10 flex items-center justify-center"
            >
              <Image src="/Home/text2.png" alt="text1" width={320} height={60} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative md:min-h-[45vh] xxs:min-h-[30vh]">
        <div className="absolute w-full h-full flex justify-center z-0 md:left-[300px] xxs:left-[100px]">
          <SlideInImage />
        </div>
        <div className="absolute md:w-full xxs:w-[250px] flex justify-center md:left-[120px] xxs:left-[250px] top-4">
          <Image src="/Home/Birds.png" alt="birds" width={400} height={30}/>
        </div>
        <div className="absolute z-15">
          <Image src="/Home/Stars.png" alt="stars" width={1470} height={30}/>
        </div>
        <div className="absolute bottom-0 z-10">
          <Image src="/Home/Castle.png" alt="castle" width={1665} height={30} />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  if (!mounted) return null;

  const handleCountdownComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Countdown onCountdownComplete={handleCountdownComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Landing />
          <section>
            <div id="aboutus"><AboutUs /></div>
          </section>
          <section>
            <div id="events"><EventPage /></div>
          </section>
          <Photo />
          <div id="teams">
            <Teams />
          </div>
          <div>
            <End />
          </div>
          <div>
            <WebTeam />
          </div>
          <div>
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
