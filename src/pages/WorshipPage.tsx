import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, MapPin, ArrowRight } from "lucide-react";

const WorshipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#6E59A5] text-white">
        <div className="container max-w-6xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
              <Calendar className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4"><strong>우리가교회</strong> 예배 안내</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            <strong>우리가교회</strong>의 예배 시간과 장소를 안내해 드립니다
          </p>
        </div>
      </section>

      {/* Worship Times Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-church-navy mb-4">예배 시간</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              <strong>우리가교회</strong>는 매주 다양한 예배를 통해 하나님을 경배하고 
              성도들이 영적으로 성장할 수 있는 기회를 제공합니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-church-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">주일 예배</h3>
                  <p className="text-gray-600 mb-1">주일예배 9:00am(1부),11:00am(2부)</p>
                  <p className="text-gray-600">
                    온 가족이 함께 드리는 예배로, 찬양과 말씀을 통해 
                    하나님의 은혜를 경험하는 시간입니다.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-church-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">주일학교</h3>
                  <p className="text-gray-600 mb-1">11:00am</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-church-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">수요성경공부</h3>
                  <p className="text-gray-600 mb-1">7:30pm - 문의요망</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-church-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">금요기도회</h3>
                  <p className="text-gray-600 mb-1">7:30pm</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-church-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">젊은이 공동체 모임</h3>
                  <p className="text-gray-600 mb-1">주일 1:00pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/eb3107ca-04a4-4e84-8a70-c2459cbcaf31.png" 
              alt="예배 모습"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            
            <div className="bg-church-light-gray p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-church-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold">예배 장소</p>
                  <p>(구)에퀴터블/(현)cbb 은행 빌딩</p>
                  <p>3435 Wilshire Blvd, Suite 570 (5층)</p>
                  <p>Los Angeles, CA 90010</p>
                  <div className="mt-2">
                    <p className="font-bold">파킹:</p>
                    <p>-에퀴터블 빌딩 파킹 free</p>
                    <p>교회에서 밸리데이션을 받으시면 됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Style Section */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">예배 특징</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              우리가교회는 전통과 현대가 조화롭게 어우러진 예배를 통해 모든 세대가 함께 하나님을 경배합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">찬양</h3>
                <p className="text-gray-600 mb-4">
                  전통 찬송가와 현대 찬양을 통해 모든 세대가 마음을 다해 하나님께 찬양을 올려드립니다.
                </p>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/lovable-uploads/396fbe41-6d53-4c48-b10b-7778546b90da.png" 
                    alt="찬양"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">말씀</h3>
                <p className="text-gray-600 mb-4">
                  성경에 충실한 깊이 있는 말씀 선포를 통해 일상생활에 적용할 수 있는 실제적인 가르침을 전합니다.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="말씀"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">기도</h3>
                <p className="text-gray-600 mb-4">
                  개인과 공동체를 위한 중보기도를 통해 하나님과의 친밀한 교제를 경험하며 영적 성장을 이루어 갑니다.
                </p>
                <img 
                  src="/lovable-uploads/dd97f985-89e6-4a96-8ae1-2a1377f6a8de.png" 
                  alt="기도"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Worship */}
      <section className="py-16 bg-[#6E59A5] text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">온라인 예배</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              현장 예배에 참석하지 못하는 성도들을 위해 
              온라인으로도 예배를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">실시간 스트리밍</h3>
              <p className="mb-4 opacity-90">
                모든 주일 예배는 YouTube 채널을 통해 실시간으로 
                스트리밍되며, 이후에도 다시 볼 수 있습니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-church-gold mr-2 mt-1" />
                  <span>주일 예배: 매주 일요일 오전 11시</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-church-gold mr-2 mt-1" />
                  <span>수요 예배: 매주 수요일 저녁 7시 30분</span>
                </li>
              </ul>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/channel/UC6aIZAZw2jti4vvLvyyPNjA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md inline-flex items-center transition-all"
                >
                  <span>YouTube 채널</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="aspect-square w-full max-w-[600px] mx-auto overflow-hidden shadow-lg rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU6aIZAZw2jti4vvLvyyPNjA"
                title="우리가 교회 YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorshipPage;
