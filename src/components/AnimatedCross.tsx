import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedCross = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-3000 ${isVisible ? 'opacity-25' : ''}`}
        style={{ 
          transform: `translate(-50%, -50%) scale(${isMobile ? 1.2 : 2.5})`,
          top: isMobile ? '25%' : '15%'
        }}
      >
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-12 h-[32rem] bg-gradient-to-br from-church-navy to-purple-900 rounded-md shadow-lg" />
            <div className="absolute top-0 left-full w-3 h-[32rem] bg-opacity-40 bg-gray-600 rounded-r-md" />
            <div className="absolute top-full left-0 w-12 h-3 bg-opacity-40 bg-gray-600 rounded-b-md" />
            <div className="absolute inset-0 w-12 h-[32rem] bg-white bg-opacity-10 rounded-md filter blur-sm" />
          </div>
          
          <div className="absolute top-[8rem] left-1/2 -translate-x-1/2">
            <div className="w-80 h-12 bg-gradient-to-br from-church-navy to-purple-900 rounded-md shadow-lg" />
            <div className="absolute top-0 left-full w-3 h-12 bg-opacity-40 bg-gray-600 rounded-r-md" />
            <div className="absolute top-full left-0 w-80 h-3 bg-opacity-40 bg-gray-600 rounded-b-md" />
            <div className="absolute inset-0 w-80 h-12 bg-white bg-opacity-10 rounded-md filter blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCross;
