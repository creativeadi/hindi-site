'use client';

const HindiEvents = () => (
  <div className="relative mx-auto w-fit px-8 py-6 text-black group">
    <div className="absolute -top-8 -left-8 w-24 h-24 opacity-20 rotate-45 bg-orange-500 rounded-full 
      transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" 
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 30%, currentColor 30%, currentColor 40%, 
        transparent 40%, transparent 60%, currentColor 60%, currentColor 70%, transparent 70%)`
      }}
    />
    <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-20 -rotate-45 bg-orange-500 rounded-full 
      transition-all duration-500 group-hover:-rotate-90 group-hover:scale-110"
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 30%, currentColor 30%, currentColor 40%, 
        transparent 40%, transparent 60%, currentColor 60%, currentColor 70%, transparent 70%)`
      }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 rotate-1 rounded-lg 
      transition-all duration-500 group-hover:rotate-2 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-l from-orange-100 to-transparent -rotate-1 rounded-lg 
      transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105" />
    
    <div className="relative px-8 py-6 rounded-lg bg-gradient-to-r from-[#e1745d] to-[#ff8f7d] 
      shadow-lg transition-all duration-500 group-hover:shadow-2xl">
      <div className="absolute inset-0 rounded-lg border-2 border-orange-600/30 
        transition-all duration-500 group-hover:border-orange-600/50" />
      
      <div className="relative">
        <div className="absolute -left-6 -right-6 h-1 bg-orange-600/30 top-1/2 transform -translate-y-1/2
          transition-all duration-500 group-hover:scale-x-110" />
        
        <h1 className="text-5xl md:text-6xl tracking-wider font-bold flex items-center justify-center gap-4"
          style={{ fontFamily: 'Samarkan' }}>
          <span className="text-red-700 text-4xl relative animate-pulse">
            ●
            <span className="absolute inset-0 animate-ping">●</span>
          </span>
          
          <span className="relative text-orange-900 group-hover:text-orange-950 transition-colors duration-300">
            Hindi Club Events
            <span className="absolute -top-2 -right-4 text-2xl text-orange-600 animate-bounce">॥</span>
            <span className="absolute -bottom-2 -left-4 text-2xl text-orange-600 animate-bounce delay-150">॥</span>
          </span>
        </h1>
      </div>
      
      <div className="absolute bottom-2 left-4 text-orange-600/50 text-xl">❈</div>
      <div className="absolute top-2 right-4 text-orange-600/50 text-xl">❈</div>
    </div>
  </div>
);

export default HindiEvents; 