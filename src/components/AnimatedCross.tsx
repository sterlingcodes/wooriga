
import { useEffect, useState } from 'react';

const AnimatedCross = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute left-1/2 -top-24 -translate-x-1/2 opacity-0 transition-opacity duration-3000 ${isVisible ? 'opacity-20' : ''}`}
        style={{ transform: 'scale(1.5)' }}
      >
        <div className="relative">
          {/* Vertical beam with 3D effect */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-8 h-[28rem] bg-church-navy rounded-md" />
            <div className="absolute top-0 left-full w-2 h-[28rem] bg-opacity-30 bg-gray-500 rounded-r-md" />
            <div className="absolute top-full left-0 w-8 h-2 bg-opacity-30 bg-gray-500 rounded-b-md" />
          </div>
          
          {/* Horizontal beam with 3D effect */}
          <div className="absolute top-[6rem] left-1/2 -translate-x-1/2">
            <div className="w-64 h-8 bg-church-navy rounded-md" />
            <div className="absolute top-0 left-full w-2 h-8 bg-opacity-30 bg-gray-500 rounded-r-md" />
            <div className="absolute top-full left-0 w-64 h-2 bg-opacity-30 bg-gray-500 rounded-b-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCross;
