"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Hook to determine screen size
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
};

function End() {
  const isMobile = useScreenSize(); // Determine screen size

  return (
    <div
      style={{
        ...styles.container,
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* Caption */}
      <div style={styles.caption}>Vasudhaiva Kutumbakam</div>

      {/* Conditional Image Rendering */}
      <div style={styles.imageContainer}>
        {isMobile ? (
          <Image
            src="/assets/images/last.png" // Replace with your mobile image path
            alt="Mobile View Image"
            width={800} // Adjust dimensions for mobile
            height={500}
          />
        ) : (
          <Image
            src="/assets/img.png" // Replace with your laptop image path
            alt="Laptop View Image"
            width={1000} // Adjust dimensions for laptop
            height={100}
          />
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundImage: `linear-gradient(0.36deg, rgba(255, 161, 52, 0.5) 0.36%, rgba(255, 178, 89, 0.5) 99.6%)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  caption: {
    marginTop: "8px",
    fontSize: "80px",
    fontFamily: "'Samarka', cursive",
    color: "#333",
    textAlign: "center",
  },
  imageContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
};

export default End;
