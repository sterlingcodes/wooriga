
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <img
        src="/lovable-uploads/e790ef25-af09-4f25-b394-cbf98aface0c.png"
        alt="우리가교회 Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          objectPosition: isMobile ? "right center" : "center center",
          transform: isMobile ? "scale(1)" : "none"
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Aurora background with content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <AuroraBackground className="w-full h-full">
          <div className="relative h-full flex items-center justify-center">
            <div className="container max-w-4xl mx-auto text-center p-4 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in drop-shadow-lg mt-[-50px]"
              >
                <strong>우리가교회</strong>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-8 max-w-3xl mx-auto"
              >
                <p className="text-lg md:text-xl whitespace-pre-line animate-fade-in drop-shadow-md leading-relaxed font-bold">
                  {`하나님께서는 우리를 성전 삼아주시고,
성도라 부르셨습니다.
성도는 교회를 다니는 것이 아니라,
교회가 되어 가는 것입니다.
그래서 우리가교회 입니다.
우리가교회는 개혁주의 신앙을 기초로 건강한 교회를 꿈꾸는 공동체입니다.`}
                </p>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mb-8">
                <Button asChild size="lg" className="bg-church-navy hover:bg-blue-900">
                  <Link to="/worship">예배 정보</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-church-navy">
                  <Link to="/about">교회 소개</Link>
                </Button>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold font-serif italic text-white animate-fade-in drop-shadow-lg"
              >
                여호와로 인하여 기뻐하는 것이 너희의 힘이니라
              </motion.p>
            </div>
          </div>
        </AuroraBackground>
      </div>
    </section>
  );
};

export default HeroSection;
