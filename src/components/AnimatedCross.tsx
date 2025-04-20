
import { useEffect, useState } from 'react';

const AnimatedCross = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-2000 ${isVisible ? 'opacity-20' : ''}`}
      >
        <div className="relative">
          <div className="absolute w-2 h-64 bg-gray-100 left-1/2 -translate-x-1/2 rounded-full" />
          <div className="absolute h-2 w-40 bg-gray-100 top-1/2 -translate-y-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCross;
