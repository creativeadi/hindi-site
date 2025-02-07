"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const albumImages = [
    { src: '/assets/images/rangotsav/1.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/2.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/4.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/3.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/4.1.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/4.2.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/4.3.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/4.4.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/5.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/6.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/7.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/8.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/9.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/12.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/10.jpg', name: 'Rangotsav ' },
    { src: '/assets/images/rangotsav/11.jpg', name: 'Rangotsav ' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + albumImages.length) % albumImages.length
    );
  };

  // Hook to check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        ...styles.sliderContainer,
        flexDirection: isMobile ? "column" : "row", // Stack elements on mobile
      }}
    >
      {/* Arrow for Previous */}
      <button
        onClick={handlePrev}
        style={{
          ...styles.button,
          left: isMobile ? "10px" : "120px", // Position on mobile and desktop
          top: isMobile ? "50%" : "50%", // Center vertically
        }}
      >
        <FaChevronLeft />
      </button>

      {/* Polaroid Image */}
      <div
        style={{
          ...styles.polaroidWrapper,
          width: isMobile ? "90%" : "280px", // Adjust width for mobile
          padding: isMobile ? "10px" : "10px 10px 30px",
          height: isMobile ? "400px" : "380px",
        }}
      >
        <Image
          src={albumImages[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          width={isMobile ? 350 : 700} // Adjust width for mobile
          height={isMobile ? 400 : 800} // Adjust height for mobile
          style={{
            ...styles.polaroidImage,
            width: isMobile ? "300px" : "300px", // Adjust Polaroid image size
            height: isMobile ? "350px" : "300px",
          }}
        />
        <div
          style={{
            ...styles.caption,
            fontSize: isMobile ? "20px" : "35px", // Adjust caption size
          }}
        >
          {albumImages[currentIndex].name}
        </div>
      </div>

      {/* Arrow for Next */}
      <button
        onClick={handleNext}
        style={{
          ...styles.button,
          right: isMobile ? "10px" : "120px", // Position on mobile and desktop
          top: isMobile ? "50%" : "50%", // Center vertically
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

const styles = {
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Keeps the image centered
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative", // Allows absolute positioning of arrows
  },
  polaroidWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  polaroidImage: {
    borderRadius: "8px",
    border: "5px solid #fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    objectFit: "cover",
  },
  caption: {
    marginTop: "8px",
    color: "#333",
  },
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    padding: "10px",
    color: "#000",
    position: "absolute", // Makes arrows float over the sides
    zIndex: 2, // Ensures arrows are on top
    transform: "translateY(-50%)", // Centers the arrow vertically
    transition: "transform 0.3s, opacity 0.3s",
  },
  buttonHover: {
    transform: "scale(1.2)", // Slightly enlarges the arrow on hover
  },
};

export default ImageSlider;
