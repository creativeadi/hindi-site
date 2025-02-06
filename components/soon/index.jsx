'use client';

const ComingSoon = () => (
  <div className="absolute left-1 top-1/2 -translate-y-1/2 rotate-90 scale-y-[-1] scale-x-[-1] hover:scale-105 transition-all duration-300">
    <div
      className="p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{
        background: "linear-gradient(90deg, #D9D9D9 0%, #FF8B50 100%)",
      }}
    >
      <p 
        className="text-7xl font-serif font-bold tracking-wider text-black"
        style={{ fontFamily: 'Samarkan' }}
      >
        Coming Soon
      </p>
    </div>
  </div>
);

export default ComingSoon; 