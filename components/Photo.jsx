"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import image from "@/public/assets/map.png";
import Album_one from "./Album_one";
import KavyanjaliSec from "./KavyanjaliSec";
import Rangotsav from "./Rangotsav";

// Custom hook to detect screen size
const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Consider <= 768px as mobile
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isMobile;
};

// Component styles
const styles = {
    container: {
        position: "relative", 
        width: "100%", 
        minHeight: "100vh", // Full viewport height 
        overflow: "hidden", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
    },
    imageWrapper: {
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto", // Center align the image for larger screens
        paddingLeft: "20px",
    },
    image: {
        objectFit: "cover", // Ensures the image covers the container
        height: "auto", // Maintain aspect ratio
    },
    caption: {
        marginTop: "1px",
        fontSize: "80px",
        color: "#333",
        textAlign: "center", // Center caption text
    },
    overlay: {
        width: "90%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    albumWrapper: {
        width: "100%", // Full width for mobile
        maxWidth: "800px", // Restrict width for larger screens
        margin: "0 auto", // Center align
        padding: "30px",
        display: "flex",
        flexDirection: "column",
    },
    albumItem: {
        width: "calc(100% - 10px)", // Reduce width for side-by-side view
        boxSizing: "border-box",
    },
    row: {
        flexDirection: "row", // Row for larger screens
        justifyContent: "space-between",
    },
    sideBySide: {
        flexDirection: "row", // Side by side on larger screens
        justifyContent: "space-between",
        gap: "20px", // Add gap between side-by-side items
    },
    halfWidth: {
        width: "50%", // Take half width for side-by-side layout
    }
};

const PhotoWithOverlay = () => {
    const isMobile = useScreenSize();

    return (
        <div
            style={{
                ...styles.container,
                flexDirection: isMobile ? "column" : "row", // Change flex direction based on screen size
                justifyContent: isMobile ? "flex-start" : "space-between", // Align items for larger screens
            }}
        >
            <div style={{ ...styles.imageWrapper, ...(!isMobile ? styles.halfWidth : {}) }}>
                <Image
                    src={image}
                    alt="Map of India"
                    style={styles.image}
                    width={isMobile ? 600 : 800} // Adjust width for mobile or desktop
                    height={isMobile ? 300 : 400} // Adjust height proportionally
                />
            </div>
            <div style={{ ...styles.overlay, ...(!isMobile ? styles.halfWidth : {}) }}>
                <h2 style={{ ...styles.caption, fontSize: isMobile ? "40px" : "80px" }}>
                    Photo Album
                </h2>
                <div
                    style={{
                        ...styles.albumWrapper,
                        padding: isMobile ? "10px" : "30px",
                        flexDirection: isMobile ? "column" : "row", // Change flex direction based on screen size
                        gap: isMobile ? "20px" : "40px",
                    }}
                >
                    <div style={styles.albumItem}>
                        <Album_one />
                    </div>
                    <div style={styles.albumItem}>
                        <KavyanjaliSec />
                    </div>  
                </div>
                <div style={{
                        ...styles.albumWrapper,
                        padding: isMobile ? "10px" : "30px",
                        flexDirection: isMobile ? "column" : "row", // Change flex direction based on screen size
                        gap: isMobile ? "20px" : "20px", // Adjust gap based on screen size
                    }}
                >
                    <div
                        style={{
                            ...styles.albumItem,
                            width: "100%", // Ensure the child takes full width
                        }}
                    >
                        <Rangotsav />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoWithOverlay;
