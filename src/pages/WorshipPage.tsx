
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Calendar } from "lucide-react";

const WorshipPage = () => {
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
              <Book className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">예배 안내</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            우리 GA 교회의 예배 시간과 설교 영상을 확인하세요
          </p>
        </div>
      </section>

      {/* Worship Times */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">예배 시간</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하나님께 영광을 돌리는 예배에 여러분을 초대합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">주일 예배</h3>
              <div className="text-center">
                <p className="text-gray-700 font-medium">매주 일요일</p>
                <p className="text-church-navy font-bold text-lg">오전 11:00</p>
                <p className="text-gray-500 mt-2">온라인 및 대면</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">수요 예배</h3>
              <div className="text-center">
                <p className="text-gray-700 font-medium">매주 수요일</p>
                <p className="text-church-navy font-bold text-lg">저녁 7:30</p>
                <p className="text-gray-500 mt-2">온라인 및 대면</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">청년부 예배</h3>
              <div className="text-center">
                <p className="text-gray-700 font-medium">매주 금요일</p>
                <p className="text-church-navy font-bold text-lg">저녁 8:00</p>
                <p className="text-gray-500 mt-2">온라인 및 대면</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">최근 설교</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              우리 GA 교회의 최근 설교 영상을 시청하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU6aIZAZw2jti4vvLvyyPNjA"
                title="우리 GA 교회 YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-church-navy mb-4">설교 시리즈</h3>
              <p className="text-gray-600 mb-6">
                우리 GA 교회는 매주 하나님의 말씀을 중심으로 한 설교를 통해 
                성도들의 영적 성장을 돕고 있습니다. 지난 설교를 통해 받은 
                은혜와 감동을 다시 한번 경험해 보세요.
              </p>
              <p className="text-gray-600 mb-6">
                모든 설교는 유튜브 채널을 통해 제공되며, 언제 어디서나 
                하나님의 말씀을 들을 수 있습니다.
              </p>
              <div>
                <a 
                  href="https://www.youtube.com/channel/UC6aIZAZw2jti4vvLvyyPNjA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-church-navy hover:text-church-gold transition-all font-medium"
                >
                  <span>더 많은 설교 보기</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Guide */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">예배 안내</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            우리 GA 교회의 예배에 처음 참석하시는 분들을 위한 안내입니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-church-navy mb-4">예배 순서</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                <div>
                  <p className="font-medium">찬양</p>
                  <p className="text-gray-600">하나님께 영광을 돌리는 찬양으로 예배를 시작합니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                <div>
                  <p className="font-medium">대표 기도</p>
                  <p className="text-gray-600">교회와 성도들을 위한 대표 기도 시간입니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                <div>
                  <p className="font-medium">성경 봉독</p>
                  <p className="text-gray-600">함께 하나님의 말씀을 읽는 시간입니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">4</div>
                <div>
                  <p className="font-medium">설교</p>
                  <p className="text-gray-600">목사님의 말씀 선포를 통해 하나님의 뜻을 배웁니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">5</div>
                <div>
                  <p className="font-medium">헌금</p>
                  <p className="text-gray-600">하나님께 감사의 마음을 표현하는 시간입니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-church-navy text-white flex items-center justify-center text-sm mr-3 mt-0.5">6</div>
                <div>
                  <p className="font-medium">축도</p>
                  <p className="text-gray-600">하나님의 축복으로 예배를 마칩니다</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-church-navy mb-4">새가족 안내</h3>
            <p className="text-gray-600 mb-4">
              우리 GA 교회에 처음 방문하시는 분들을 진심으로 환영합니다. 
              예배 후 로비에 마련된 새가족 안내 데스크에서 교회에 대한 
              자세한 정보를 얻으실 수 있습니다.
            </p>
            <p className="text-gray-600 mb-4">
              온라인으로 예배에 참석하시는 분들은 YouTube 라이브 채팅을 통해 
              문의하시면 친절히 안내해 드립니다.
            </p>
            <div className="bg-church-light-gray p-4 rounded-lg">
              <h4 className="font-medium mb-2">문의사항</h4>
              <p className="text-gray-600">
                전화: (213) 675-6303<br />
                이메일: woorigachurch@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorshipPage;
