"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const albumImages = [
    { src: '/assets/images/kavyanjali/1.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/2.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/3.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/4.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/5.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/6.jpeg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/7.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/8.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/9.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/10.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/11.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/12.jpg', name: 'Kavyanjali' },
    { src: '/assets/images/kavyanjali/13.jpg', name: 'Kavyanjali' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + albumImages.length) % albumImages.length
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          ...styles.button,
          left: isMobile ? "10px" : "-30px",
          top: isMobile ? "50%" : "50%",
        }}
      >
        <FaChevronLeft />
      </button>

      <div
        style={{
          ...styles.polaroidWrapper,
          width: isMobile ? "90%" : "280px",
          padding: isMobile ? "10px" : "10px 10px 30px",
          height: isMobile ? "400px" : "380px",
        }}
      >
        <Image
          src={albumImages[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          width={isMobile ? 350 : 700}
          height={isMobile ? 400 : 800}
          style={{
            ...styles.polaroidImage,
            width: isMobile ? "300px" : "300px",
            height: isMobile ? "350px" : "300px",
            objectFit: "cover", // Ensures the image fits the frame properly
          }}
        />
        <div
  style={{
    ...styles.caption,
    fontSize: isMobile ? "20px" : "35px",
    fontFamily: "var(--font-samarka)"
  }}
>
  {albumImages[currentIndex].name}
</div>
      </div>

      <button
        onClick={handleNext}
        style={{
          ...styles.button,
          right: isMobile ? "10px" : "-30px",
          top: isMobile ? "50%" : "50%",
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
    justifyContent: "center",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
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
  },
  caption: {
    marginTop: "8px",
    fontFamily: "var(--font-samarka)",
    color: "#333",
  },
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    padding: "10px",
    color: "#000",
    position: "absolute",
    zIndex: 2,
    transform: "translateY(-50%)",
    transition: "transform 0.3s, opacity 0.3s",
  },
  buttonHover: {
    transform: "scale(1.2)",
  },
};

export default ImageSlider;
