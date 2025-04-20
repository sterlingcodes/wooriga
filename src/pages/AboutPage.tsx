
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Church, Info } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-church-navy text-white">
        <div className="container max-w-6xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">교회 소개</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            우리 GA 교회는 하나님의 말씀과 사랑으로 섬기는 교회입니다
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-church-navy mb-4">교회 비전</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <p className="text-lg text-gray-600 mb-4">
              우리 GA 교회는 하나님의 말씀을 바탕으로 믿음의 공동체를 세우고, 
              지역 사회와 세계를 향한 예수 그리스도의 사랑을 전하는 사명을 감당합니다.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              모든 성도가 예수 그리스도 안에서 영적으로 성장하고, 
              하나님의 나라를 위해 헌신하는 신앙 공동체가 되는 것이 우리의 비전입니다.
            </p>
            <div className="flex items-center mt-6">
              <Church className="h-8 w-8 text-church-navy mr-3" />
              <div>
                <h3 className="text-xl font-bold">우리 GA 교회</h3>
                <p className="text-gray-500">Woori GA Church</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="교회 비전"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">우리의 핵심 가치</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              우리 GA 교회는 다음과 같은 핵심 가치를 바탕으로 하나님을 예배하고 섬깁니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">말씀 중심</h3>
                <p className="text-gray-600">
                  하나님의 말씀을 성경 그대로 배우고 가르치며, 
                  말씀에 기초한 삶을 살아가는 교회입니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">공동체 중심</h3>
                <p className="text-gray-600">
                  서로 사랑하고 섬기며, 함께 성장하는 
                  그리스도의 몸 된 공동체를 이루어 갑니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Church className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">선교 중심</h3>
                <p className="text-gray-600">
                  예수님의 지상 명령에 따라 복음을 전하고, 
                  지역 사회와 열방을 향한 선교적 사명을 감당합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">교회 연혁</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            우리 GA 교회가 걸어온 하나님의 인도하심의 발자취입니다
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-church-navy pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-church-gold rounded-full -left-[10px] top-0"></div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-1">교회 설립</h3>
              <p className="text-gray-500 mb-3">2018년</p>
              <p className="text-gray-600">
                김은광 목사님의 리더십 아래 LA 한인타운에서 우리 GA 교회가 설립되었습니다.
                소수의 성도들과 함께 첫 예배를 드렸습니다.
              </p>
            </div>
          </div>
          
          <div className="relative border-l-4 border-church-navy pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-church-gold rounded-full -left-[10px] top-0"></div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-1">교회 성장과 발전</h3>
              <p className="text-gray-500 mb-3">2019년 - 2020년</p>
              <p className="text-gray-600">
                지역 사회 섬김과 말씀 중심의 예배를 통해 교회가 성장하였습니다.
                다양한 사역과 프로그램이 시작되었습니다.
              </p>
            </div>
          </div>
          
          <div className="relative border-l-4 border-church-navy pl-8">
            <div className="absolute w-4 h-4 bg-church-gold rounded-full -left-[10px] top-0"></div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-1">현재</h3>
              <p className="text-gray-500 mb-3">2021년 - 현재</p>
              <p className="text-gray-600">
                백승유 목사님이 합류하며 더욱 풍성한 사역이 이루어지고 있습니다.
                온라인 예배와 대면 예배를 병행하며 교회의 영역을 확장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastors */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">목회자 소개</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              우리 GA 교회를 섬기는 목회자들을 소개합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="김은광 목사"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2">김은광 목사</h3>
                  <p className="text-church-gold mb-4">담임 목사</p>
                  <p className="text-gray-600 mb-3">
                    하나님의 말씀과 은혜로 성도들을 섬기는 김은광 목사님은 
                    우리 GA 교회의 비전과 목회 철학을 이끌고 있습니다.
                  </p>
                  <div className="flex items-center mt-4">
                    <Info className="h-5 w-5 text-church-navy mr-2" />
                    <p className="text-gray-500">신학 박사 (Fuller Theological Seminary)</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="백승유 목사"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2">백승유 목사</h3>
                  <p className="text-church-gold mb-4">부교역자</p>
                  <p className="text-gray-600 mb-3">
                    젊은 세대와 다음 세대를 위한 사역을 담당하고 있는 백승유 목사님은 
                    열정적인 예배와 교육 사역을 이끌고 있습니다.
                  </p>
                  <div className="flex items-center mt-4">
                    <Info className="h-5 w-5 text-church-navy mr-2" />
                    <p className="text-gray-500">신학 석사 (Talbot School of Theology)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
