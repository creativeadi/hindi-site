"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
};

const AboutUs = () => {
  const isMobile = useScreenSize();

  return (
    <div className={`relative ${isMobile ? 'min-h-screen' : 'min-h-[80vh]'} flex flex-col items-center justify-start py-2 px-4`}>
      {/* Content */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto text-center mt-1`}>
        <h1 
          className="text-[#8B4513] mb-1 font-bold font-samarka"
          style={{ 
            fontSize: isMobile ? "2.5rem" : "4rem",
            marginTop: "0",
            lineHeight: "1"
          }}

        >
          About Us
        </h1>
        
        {/* Image Container */}
        <div className={`relative ${isMobile ? 'w-full h-[150px]' : 'w-2/5 h-[100px]'} mx-auto mb-0`}>
          <Image
            src="/assets/d2.svg"
            alt="Hindi Club Activity"
            fill
            style={{ 
              objectFit: "contain"
            }}
          />
        </div>

        <div 
          className={`${isMobile ? 'mx-2' : ''} mt-0`}
          style={{
            padding: isMobile ? '12px' : '16px',
            border: `8px double #8B4513`,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0)",
            backdropFilter: "blur(20px)"
          }}
        >
          <p 
            className="text-[#8B4513] font-samarka"
            style={{ 
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              lineHeight: "1.5",
              wordBreak: "break-word"
            }}

          >
            "यत् भावो – तत् भवति" अर्थात् जैसा भाव होता है, वैसा ही भविष्य बनता है। यही विचार हिंदी क्लब, वीआईटी भोपाल की आत्मा है। हम केवल एक क्लब नहीं, बल्कि हिंदी भाषा और भारतीय संस्कृति के संवर्धन और संरक्षण का एक सशक्त मंच हैं। हमारा उद्देश्य न केवल हिंदी के प्रति प्रेम जगाना है, बल्कि इसकी समृद्ध परंपराओं, साहित्यिक विरासत और सांस्कृतिक मूल्यों को जीवंत बनाए रखना है।

यदि आपको कविता, नाट्य कला, साहित्य, लेखन या भारतीय त्योहारों की जीवंतता आकर्षित करती है, तो यह क्लब आपके लिए है! हम सेमिनार, विचार-विमर्श, प्रतियोगिताएँ और रंगारंग सांस्कृतिक कार्यक्रमों के माध्यम से हिंदी को आधुनिकता के साथ जोड़ते हैं। यहाँ हर शब्द में अभिव्यक्ति की स्वतंत्रता है और हर विचार में सृजनात्मकता की उड़ान।

तो आइए, इस खूबसूरत यात्रा का हिस्सा बनें, अपनी जड़ों से जुड़े रहें, और हिंदी की इस समृद्ध धारा को आगे बहाने में योगदान दें। हिंदी क्लब आपका स्वागत करता है – क्योंकि भाषा सिर्फ संवाद का माध्यम नहीं, यह पहचान और अभिव्यक्ति का स्रोत है!

हिंदी में कुछ बात है
क्योंकि हिंदी में जस्बात है
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 
