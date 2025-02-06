import Image from 'next/image';

const BowAndArrow = () => (
  <div className="fixed top-20 right-20 z-50 w-56 transition-transform duration-300 hover:scale-125 cursor-pointer animate-[sweep_2s_ease-in-out_infinite]">
    <Image
      src="/bow copy.png"
      alt="Bow and Arrow"
      width={224}
      height={224}
      className="w-full h-auto rounded-md"
    />
    <style>{`
      @keyframes sweep {
        0% { transform: translateX(0); }
        50% { transform: translateX(-20px); }
        100% { transform: translateX(0); }
      }
    `}</style>
  </div>
);

export default BowAndArrow; 