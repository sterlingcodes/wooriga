
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Book, Church, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
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
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1481142889578-dda440dacfe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="container max-w-4xl mx-auto text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            우리 GA 교회
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            하나님의 사랑으로 섬기는 공동체
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-church-navy hover:bg-blue-900">
              <Link to="/worship">예배 정보</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-church-navy">
              <Link to="/about">교회 소개</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-black to-transparent">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center text-white">
                <Calendar className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">주일 예배</p>
                  <p className="text-sm">매주 일요일 오전 11시</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Book className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">수요 예배</p>
                  <p className="text-sm">매주 수요일 저녁 7시 30분</p>
                </div>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-6 w-6 mr-3 text-church-gold" />
                <div>
                  <p className="font-bold">교회 위치</p>
                  <p className="text-sm">3240 Wilshire Blvd, Los Angeles</p>
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
            우리 GA 교회는 하나님의 사랑을 전하고 예수 그리스도의 복음을 실천하는 
            믿음의 공동체입니다. 함께 예배하고 성장하는 우리 교회에 오신 것을 환영합니다.
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
                src="https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="목회자"
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">목회자 소개</h3>
              <p className="text-gray-600 mb-4">
                김은광 목사님과 백승유 목사님이 이끄는 우리 GA 교회의 
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
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="교회 일정"
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">교회 일정</h3>
              <p className="text-gray-600 mb-4">
                우리 GA 교회의 다양한 일정과 행사에 대한 정보를 
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
          
          <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UU6aIZAZw2jti4vvLvyyPNjA"
              title="우리 GA 교회 YouTube Channel"
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
            우리 GA 교회는 언제나 여러분을 환영합니다. 
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
