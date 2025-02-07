import React from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import image from '@/public/assets/club.png';
import image_vitb from '@/public/assets/vitb.png';

const Footer = () => {
  return (
    <footer className='bg-white'>
        <div className="container mx-auto flex justify-between items-center h-[180px]" >
        {/* Club Logo */}
        <div className="w-30">
          <Image src={image} alt="Club Logo" />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Social Media Icons */}
          <div className="socialIcons flex space-x-10 mb-1">
            <div className="icon-wrapper group flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-white">
              <a
                href="https://www.instagram.com/hindi_club.vitb/profilecard/?igsh=MTFuaGF3c2k0d2p4cQ=="
                className="text-pink-500 "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div className="icon-wrapper group flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-white">
              <a
                href="https://chat.whatsapp.com/Jo4hvUwl7Fy8DLIbeIDHF"
                className="text-green-500 "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
            <div className="icon-wrapper group flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-white">
              <a
                href="https://www.linkedin.com/company/hindiclub"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <div className="icon-wrapper group flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-white">
              <a
                href="mailto:hindiclub@vitbhopal.ac.in"
                className="text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
          {/* Footer Text */}
          <p className="text-lg text-gray-500 my-1" style={{ fontFamily: "Arial, sans-serif"}}>
            Copyright &copy; 2024 | Designed by <span className="font-semibold">Technical Team, Hindi Club</span>
          </p>
          <p className="text-lg text-gray-500 font-extrabold" style={{ fontFamily: "Arial, sans-serif"}}>VIT Bhopal</p>
        </div>

        {/* VIT Bhopal Logo */}
        <div className="w-30">
          <Image src={image_vitb} alt="VIT Bhopal Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
