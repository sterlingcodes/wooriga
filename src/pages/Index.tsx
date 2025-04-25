import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Book, ArrowRight, Youtube, Church } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      {/* Welcome Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">환영합니다</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>우리가교회</strong>는 하나님의 사랑을 전하고 예수 그리스도의 복음을 실천하는 
            믿음의 공동체입니다. 함께 예배하고 성장하는 <strong>우리가교회</strong>에 오신 것을 환영합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="예배"
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">예배 안내</h3>
              <p className="text-gray-600 mb-4">
                매주 주일 예배와 수요 예배에 여러분을 초대합니다. 
                함께 하나님을 예배하는 시간이 되길 기도합니다.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/worship" className="flex items-center justify-center">
                  <span>더 알아보기</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/df891b93-4409-4342-9596-12ad883524d6.png" 
                alt="목회자 소개"
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">목회자 소개</h3>
              <p className="text-gray-600 mb-4">
                김은광 목사님과 백승유 목사님이 이끄는 <strong>우리가교회</strong>의 
                목회 비전과 사역을 소개합니다.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/about" className="flex items-center justify-center">
                  <span>더 알아보기</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/cd1e037a-46ef-48f2-889c-674d09d43a91.png" 
                alt="교회 일정"
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">교회 일정</h3>
              <p className="text-gray-600 mb-4">
                <strong>우리가교회</strong>의 다양한 일정과 행사에 대한 정보를 
                확인하고 함께 참여해 주세요.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/events" className="flex items-center justify-center">
                  <span>더 알아보기</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section className="bg-church-light-gray py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">최근 설교</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-2xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/4q2rZqlWotg"
              title="우리가교회 YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="bg-white">
              <a 
                href="https://www.youtube.com/@WoorigaChurchLA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Youtube className="mr-2 h-5 w-5" />
                <span>YouTube 채널 방문하기</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="relative py-20 bg-cover bg-center text-white" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(110, 89, 165, 0.9), rgba(110, 89, 165, 0.9)), url('https://images.unsplash.com/photo-1602353245433-a80ca0499a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="container max-w-4xl mx-auto text-center p-4">
          <img 
            src="/lovable-uploads/2e188386-b03d-4b8e-b3a6-8586bceeaccd.png"
            alt="우리가교회" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">함께 예배하고 성장해요</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            우리가교회는 언제나 여러분을 환영합니다. 
            함께 하나님을 알아가고 믿음 안에서 성장하는 공동체가 되길 원합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-church-gold hover:bg-amber-600 text-white">
              <Link to="/location">오시는 길</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-church-navy">
              <Link to="/contact">연락하기</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
