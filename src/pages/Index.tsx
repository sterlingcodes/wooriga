import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Book, ArrowRight, Youtube, Church } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCross from "@/components/AnimatedCross";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1481142889578-dda440dacfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="hero-overlay" />
        <AnimatedCross />
        <div className="container max-w-4xl mx-auto text-center p-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            <strong>우리가 교회</strong>
          </h1>
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl whitespace-pre-line animate-fade-in drop-shadow-md leading-relaxed">
              {`하나님께서는 우리를 성전 삼아주시고,
성도라 부르셨습니다.
성도는 교회를 다니는 것이 아니라,
교회가 되어 가는 것입니다. 그래서 '우리가 교회' 입니다.
'우리가 교회'는 개혁주의 신앙을 기초로 건강한 교회를 꿈꾸는 공동체입니다.`}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mb-8">
            <Button asChild size="lg" className="bg-church-navy hover:bg-blue-900">
              <Link to="/worship">예배 정보</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-church-navy">
              <Link to="/about">교회 소개</Link>
            </Button>
          </div>
          
          <p className="text-2xl md:text-3xl font-serif italic text-church-gold animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            여호와로 인하여 기뻐하는 것이 너희의 힘이니라
          </p>
        </div>
        
        <div className={`absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-black to-transparent ${isMobile ? 'pb-16' : ''}`}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center text-white">
                <Calendar className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">주일 예배</p>
                  <p className="text-sm">1부 9:00am / 2부 11:00am</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Book className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">금요 기도회</p>
                  <p className="text-sm">매주 금요일 저녁 7:30</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Book className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">수요 성경공부</p>
                  <p className="text-sm">매주 수요일 7:30pm</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">교회 위치</p>
                  <p className="text-sm">3435 Wilshire Blvd, Suite 570<br />Los Angeles, CA 90010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">환영합니다</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>우리가 교회</strong>는 하나님의 사랑을 전하고 예수 그리스도의 복음을 실천하는 
            믿음의 공동체입니다. 함께 예배하고 성장하는 <strong>우리가 교회</strong>에 오신 것을 환영합니다.
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
                김은광 목사님과 백승유 목사님이 이끄는 <strong>우리가 교회</strong>의 
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
                <strong>우리가 교회</strong>의 다양한 일정과 행사에 대한 정보를 
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
              src="https://www.youtube.com/embed/videoseries?list=UU6aIZAZw2jti4vvLvyyPNjA"
              title="우리가 교회 YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="bg-white">
              <a 
                href="https://www.youtube.com/channel/UC6aIZAZw2jti4vvLvyyPNjA" 
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
          backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1602353245433-a80ca0499a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="container max-w-4xl mx-auto text-center p-4">
          <Church className="h-12 w-12 mx-auto mb-4 text-church-gold" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">함께 예배하고 성장해요</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            우리가 교회는 언제나 여러분을 환영합니다. 
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
