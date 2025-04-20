
import { useEffect, useState } from 'react';

const AnimatedCross = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-10' : ''}`}
      >
        <div className="relative">
          <div className="absolute w-1 h-40 bg-white left-1/2 -translate-x-1/2 rounded-full" />
          <div className="absolute h-1 w-24 bg-white top-1/2 -translate-y-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCross;
