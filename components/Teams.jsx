"use client";

import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const profiles = [
    {
      src: "/assets/teams/ayushraj.png",
      name: "Ayush Raj",
      designation: "Secretary",
      linkedin: "https://www.linkedin.com/in/ayush-raj-295a88223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/theayushrajsingh/",
    },
    {
      src: "/assets/teams/veer.png",
      name: "Dharambir Singh",
      designation: "President",
      linkedin: "https://www.linkedin.com/in/dharmbir-singh-4a1ab024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/_.dharmveer/profilecard/?igsh=MXRldzB3MnNtdjA2ZQ==",
    },
    {
      src: "/assets/teams/dheeraj.png",
      name: "Dheeraj Saraswat",
      designation: "Vice President",
      linkedin: "http://www.linkedin.com/in/dheeraj-saraswat04",
      instagram: "https://www.instagram.com/dheerajj_sarswat/profilecard/?igsh=MXc2cTM1MGZpM2R1Yw==",
    },
    {
      src: "/assets/teams/ayush.png",
      name: "Ayush Raj",
      designation: "Event Management, Team Lead",
      linkedin: "https://www.linkedin.com/in/ayushrajspeaks",
      instagram: "https://www.instagram.com/dontstalkayush/profilecard/?igsh=MWtvYTRjenFhYTQwYQ==",
    },
    {
      src: "/assets/teams/vardhan.jpg",
      name: "Harsh Chandawat",
      designation: "Event Management, Team Lead",
      linkedin: "https://www.linkedin.com/in/harshvardhan-singh-2a13a7250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/beingwicked_99?igsh=ZTRjMHphNzNhZzQ4",
    },
    {
      src: "/assets/teams/Vishwas.png",
      name: "Vishwash Chouhan",
      designation: "Event Management, Team Co-Lead",
      linkedin: "https://www.linkedin.com/in/vishwas-chouhan-82663828a/",
      instagram: "https://www.instagram.com/vishwas_chouhan14?igsh=enNldjBreDlocXA2",
    },
    {
      src: "/assets/teams/rhythm.png",
      name: "Rhythm Dhangar",
      designation: "Event Management, Team Co-Lead",
      linkedin: "https://www.linkedin.com/in/rhythm-dhangar-49b733289/",
      instagram: "https://www.instagram.com/justrhythm_/",
    },
    {
      src: "/assets/teams/Palak.png",
      name: "Palak Mehra",
      designation: "Design, Team Lead",
      linkedin: "https://www.linkedin.com/in/palak-mehra-808a112b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/palakkmehraa?utm_source=qr&igsh=MXQ2cTlkZWt4Mmw5eg==",
    },
    {
      src: "/assets/teams/chirag.png",
      name: "Chirag Yadav",
      designation: "Design, Team Co-Lead",
      linkedin: "",
      instagram: "",
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
    {
      src: "/assets/teams/Manav.png",
      name: "Manav Wagh",
      designation: "Social Media, Team Lead",
      linkedin: "https://www.linkedin.com/in/manav-wagh-556687304/",
      instagram: "https://www.instagram.com/manavvwagh01?igsh=MTF1YmtveTRxZ3N4Nw%3D%3D&utm_source=qr",
    },
    {
      src: "/assets/teams/Milind.png",
      name: "Milind Verma",
      designation: "PR & Outreach, Team Lead",
      linkedin: "https://www.linkedin.com/in/milind-verma-8aa10a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/_itsmilindd/profilecard/?igsh=bGw5bWQ5ejJ5cGs5",
    },
    {
      src: "/assets/teams/arya.png",
      name: "Kumar Arya",
      designation: "PR & Outreach, Team Co-Lead",
      linkedin: "https://www.linkedin.com/in/kumar-arya-725b42331/",
      instagram: "https://www.instagram.com/aryaaa_kr/",
    },
  ];

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

  const faculty = [
    {
      src: "/assets/teams/rajeev.png",
      name: "Dr. Rajeev Saxena",
      designation: "Faculty Co-Ordinator",
      linkedin: "https://www.linkedin.com/in/rajeev-saxena-9763871a/",
      instagram: "",
    },
  ]

  const styles = {
    caption: {
      marginTop: "8px",
      fontSize: "80px",
      fontFamily: "'Samarka', cursive", // Polaroid-style handwritten font
      color: "#333",
      textAlign: "center", // Center caption text
    },
  };

  const isMobile = useScreenSize();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(179.56deg,#FFA134_0.36%,#FFB259_99.6%)] py-12">
      <h1 style={{ ...styles.caption, fontSize: isMobile ? "40px" : "80px" }}>Meet Our Team</h1>
      
      {/* Faculty Only */}
      <div className={`flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`}>
        {faculty.map((profile, index) => (
          <div 
            key={index}
            className={`relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`}
          >
            {/* Faculty Main Card */}
            <div className="h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
              <Image
                className="rounded-full"
                src={profile.src}
                alt={profile.name}
                width={300}
                height={300}
              />
              <h3 className="text-lg font-bold mt-4 text-gray-800">{profile.name}</h3>
              <p className="text-sm text-gray-600 text-center">{profile.designation}</p>
            </div>

            {/* Extension of the card joining the main card of Faculty */}    
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
              <h3 className="text-lg font-bold mt-4 text-gray-800">{profile.name}</h3>
              <p className="text-sm text-gray-600 text-center">{profile.designation}</p>
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
