import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Car } from "lucide-react";

const LocationPage = () => {
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
              <MapPin className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">오시는 길</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            우리 GA 교회를 찾아오시는 방법을 안내해 드립니다
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-church-navy mb-4">오시는 길</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            
            <div className="mb-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-church-gold mr-3 mt-1" />
                <div>
                  <p className="font-bold text-lg">우리가 교회</p>
                  <p>(구)에퀴터블/(현)cbb 은행 빌딩</p>
                  <p>3435 Wilshire Blvd, Suite 570 (5층)</p>
                  <p>Los Angeles, CA 90010</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">주차 안내</h3>
                <p className="text-gray-600 mb-2">
                  에퀴터블 빌딩 파킹 free
                </p>
                <p className="text-gray-600">
                  교회에서 밸리데이션을 받으시면 됩니다.
                </p>
              </div>

              
              <div>
                <h3 className="text-xl font-bold mb-3">대중교통 이용 시</h3>
                <p className="text-gray-600 mb-2">
                  버스: 20, 206, 720 노선이 교회 앞에 정차합니다.
                </p>
                <p className="text-gray-600">
                  지하철: 퍼플 라인 Wilshire/Western 역에서 하차 후 도보 10분 거리에 있습니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">문의사항</h3>
                <p className="text-gray-600">
                  오시는 길에 대한 문의사항이 있으시면 연락 주세요.<br />
                  전화: (213) 675-6303
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-full">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.858336605234!2d-118.30894742426193!3d34.06120727343767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b883af6bdfad%3A0x4e80285596ac0b86!2s3435%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090010!5e0!3m2!1sen!2sus!4v1716456720064!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">찾아오시는 방법</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              다양한 방향에서 우리 GA 교회로 오시는 방법을 안내해 드립니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">북쪽에서 오실 경우</h3>
                <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                  <li>I-5 S 또는 US-101 S를 이용해 로스앤젤레스 방향으로 이동</li>
                  <li>I-10 W로 진입</li>
                  <li>Vermont Ave 출구로 나와 북쪽으로 이동</li>
                  <li>Wilshire Blvd에서 우회전</li>
                  <li>3240 Wilshire Blvd에 도착</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">남쪽에서 오실 경우</h3>
                <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                  <li>I-5 N 또는 I-405 N을 이용해 로스앤젤레스 방향으로 이동</li>
                  <li>I-10 E로 진입</li>
                  <li>Western Ave 출구로 나와 북쪽으로 이동</li>
                  <li>Wilshire Blvd에서 좌회전</li>
                  <li>3240 Wilshire Blvd에 도착</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-church-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">동/서쪽에서 오실 경우</h3>
                <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                  <li>I-10 E 또는 I-10 W를 이용해 로스앤젤레스 방향으로 이동</li>
                  <li>Olympic Blvd 출구로 나와 동쪽 또는 서쪽으로 이동</li>
                  <li>Vermont Ave 또는 Western Ave에서 북쪽으로 이동</li>
                  <li>Wilshire Blvd에서 회전</li>
                  <li>3240 Wilshire Blvd에 도착</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Surrounding Area */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">주변 환경</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            우리 GA 교회 주변의 편의 시설 및 랜드마크
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1594576722256-a3a60469254e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Koreatown LA"
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">한인타운 중심부</h3>
            <p className="text-gray-600">
              우리 GA 교회는 로스앤젤레스 한인타운의 중심부에 위치하고 있습니다. 
              다양한 한식당, 카페, 쇼핑센터가 도보 거리에 있어 편리합니다.
            </p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605145183243-58aef9133c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Wilshire Boulevard"
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">교통 편의성</h3>
            <p className="text-gray-600">
              Wilshire Boulevard의 중심에 위치해 대중교통 이용이 매우 편리합니다. 
              버스 정류장이 바로 앞에 있으며, 지하철역도 가까운 거리에 있습니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;
