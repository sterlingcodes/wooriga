import { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-5' : ''}`}
        style={{ transform: 'scale(5)' }}
      >
        <div className="relative">
          <div className="absolute w-1 h-40 bg-church-gold left-1/2 -translate-x-1/2 rounded-full animate-pulse" />
          <div className="absolute h-1 w-24 bg-church-gold top-1/2 -translate-y-1/2 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
