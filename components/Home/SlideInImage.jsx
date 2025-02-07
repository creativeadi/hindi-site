"use client"
import { motion } from "framer-motion";
import React from 'react';
import Image from "next/image";
import { slideIn } from '../utils/motion';

function SlideInImage() {
  return (
    <motion.div
      initial={{ y: 250 }}       // Start off-screen (100 pixels below)
      animate={{ y: 5 }}         // Animate to its original position
      transition={{ duration: 0.5 }}
      className="lg:w-fit md:w-fit sm:w-[110px] xxs:w-[80px]"
    >
        <Image src="/Home/Sun.png" alt="Sun" width={130} height={130} />
    </motion.div>
  );
}

export default SlideInImage;