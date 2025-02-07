"use client";

import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const profiles = [
    {
        src: "/assets/teams/ad1.png",
        name: "Aman Deep Singh",
        designation: "Technical, Member",
        linkedin: "https://www.linkedin.com/in/aman-deep-singh-180aa2251/",
        instagram: "https://www.instagram.com/a.d_singhhh/profilecard/?igsh=MWZ5NG02NHVvcjljOQ==",
    },
    {
      src: "/assets/teams/anvay.png",
      name: "Anvaya Arsha",
      designation: "Website Designer",
      linkedin: "https://www.linkedin.com/in/anvaya-arsha-761037252/",
      instagram: "",
    },
    {
      src: "/assets/teams/sujal.png",
      name: "Sujal Sakhare",
      designation: "Technical, Member",
      linkedin: "https://www.linkedin.com/in/sujal-s-286b33258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/sujallll.s?igsh=MXJicHd2amg5d3Y5cg%3D%3D&utm_source=qr",
    },
  ];

  const President = [
    {
      src: "/assets/teams/veer.png",
      name: "Dharambir Singh",
      designation: "President",
      linkedin: "https://www.linkedin.com/in/dharmbir-singh-4a1ab024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/_.dharmveer/profilecard/?igsh=MXRldzB3MnNtdjA2ZQ==",
    },
    {
      src: "/assets/teams/harsh.png",
      name: "Harsh Aditya",
      designation: "Technical, Team Lead",
      linkedin: "https://www.linkedin.com/in/harsh-aditya-354aa4251/",
      instagram: "https://www.instagram.com/harshhaditya/",
    },
    {
      src: "/assets/teams/Garv.png",
      name: "Garv Anand",
      designation: "Technical, Team Co-Lead",
      linkedin: "https://www.linkedin.com/in/garv-anand-1bb36b270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/garv_anand_/profilecard/?igsh=MWlzMm5sbHk5ejkwMA==",
    },
  ]

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


  const styles = {
    caption: {
      marginTop: "0px",
      fontSize: "80px",
      //fontFamily: "'Arial', sans-serif", // Polaroid-style handwritten font
      color: "#333",
      textAlign: "center", // Center caption text
    },
  };

  const isMobile = useScreenSize();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(179.56deg,#FFA134_0.36%,#FFB259_99.6%)] py-4`}
      style={{marginBottom: isMobile ? "10px" : "40px"}}
    >
      <h1 style={{ ...styles.caption, fontSize: isMobile ? "40px" : "80px", marginBottom: isMobile ? "20px" : "40px", }}>Website Development Team</h1>
      {/* President Only */}
      <div className={`flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`} style={{ marginTop: "20px", marginBottom:"10px" }}>
        {President.map((profile, index) => (
          <div 
            key={index}
            className={`relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`}
          >
            {/* President Main Card */}
            <div className="h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
              <Image
                className="rounded-full"
                src={profile.src}
                alt={profile.name}
                width={300}
                height={300}
              />
              <h3 className="text-lg font-bold mt-4 text-gray-800" style={{ fontFamily: "Arial, sans-serif"}}>{profile.name}</h3>
              <p className="text-sm text-gray-600 text-center" style={{ fontFamily: "Arial, sans-serif"}}>{profile.designation}</p>
            </div>

            {/* Extension of the card joining the main card of President */}    
            <div className="absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="mt-2 flex gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={President.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <div className={`flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`}>
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`}
          >
            {/* Main Card */}
            <div className="h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
              <Image
                className="rounded-full"
                src={profile.src}
                alt={profile.name}
                width={300}
                height={300}
              />
              <h3 className="text-lg font-bold mt-4 text-gray-800" style={{ fontFamily: "Arial, sans-serif"}}>{profile.name}</h3>
              <p className="text-sm text-gray-600 text-center" style={{ fontFamily: "Arial, sans-serif"}}>{profile.designation}</p>
            </div>

            {/* Extension of the card joining the main card */}
            <div className="absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="mt-2 flex gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
