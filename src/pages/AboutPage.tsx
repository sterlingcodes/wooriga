import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Book, ArrowRight, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
              <Church className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">교회 소개</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-center">
            <h2 className="text-3xl font-bold text-church-navy mb-4"><strong>우리가교회</strong>에 오신 것을 환영합니다</h2>
            <div className="w-20 h-1 bg-church-gold mb-6 mx-auto"></div>
            <p className="text-lg text-gray-600 mb-6">
              <strong>우리가교회</strong>는 로스앤젤레스 지역 사회에 하나님의 사랑을 전하고, 예수 그리스도의 복음을 실천하기 위해 설립되었습니다.
              저희 교회는 모든 사람을 환영하며, 함께 예배하고, 배우며, 성장하는 공동체를 만들어가고자 합니다.
            </p>
            <p className="text-lg text-gray-600">
              <strong>우리가교회</strong>는 다양한 배경과 문화를 가진 사람들이 모여 함께 예배하고 교제하며, 서로를 격려하고 지지하는 따뜻한 공동체입니다.
              <strong>우리가교회</strong>는 하나님의 말씀을 배우고 실천하며, 지역 사회와 세상을 변화시키는 데 헌신하고 있습니다.
            </p>
          </div>
          <div>
            <img
              src="/lovable-uploads/d62fc2cd-4f8a-441c-9122-80db6b721f31.png"
              alt="Church Welcome"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-container bg-church-light-gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">우리의 사명과 비전</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>우리가교회</strong>는 하나님의 사랑을 전하고 예수 그리스도의 복음을 실천하며, 지역 사회와 세상을 변화시키는 데 헌신합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2">지역 사회 섬김</h3>
              <p className="text-gray-600">
                <strong>우리가교회</strong>는 지역 사회의 필요를 채우고, 어려운 이웃을 돕는 데 최선을 다하고 있습니다.
                다양한 봉사 활동과 구제 프로그램을 통해 사랑을 실천합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2">다음 세대 양육</h3>
              <p className="text-gray-600">
                <strong>우리가교회</strong>는 다음 세대가 믿음 안에서 성장하도록 돕고 있습니다.
                어린이와 청소년을 위한 다양한 프로그램과 교육을 제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2">선교</h3>
              <p className="text-gray-600">
                <strong>우리가교회</strong>는 국내외 선교를 통해 복음을 전하고 있습니다.
                선교사님들을 지원하고, 단기 선교 프로그램을 운영하며,
                세계 곳곳에 하나님의 사랑을 전합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">목회자 소개</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>우리가교회</strong>를 이끄시는 목사님들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pastor 1 */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">김은광 목사 (대한예수교 장로회 합동)</h3>
                <p className="text-gray-600">
                  김은광 목사님은 <strong>우리가교회</strong>의 목사님으로, 깊이 있는 설교와 따뜻한 마음으로 성도들을 정성껏 섬기고 계십니다. 
                  성경에 충실한 가르침과 진실된 신앙 생활로 교회 공동체를 이끌어 가고 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pastor 2 */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="mb-4">
                <img
                  src="/lovable-uploads/2990febd-d68b-4e49-9cfb-5208c033a9e8.png"
                  alt="백승유 목사"
                  className="w-48 h-auto mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2">백승유 목사 (Southwestern Baptist)</h3>
                <p className="text-gray-600">
                  백승유 목사님은 <strong>우리가교회</strong>의 목사님으로, 은혜로운 예배 인도와 찬양 리더십으로 성도들의 예배를 풍성하게 이끌고 계십니다. 
                  젊은 세대를 위한 사역에 헌신하시며, 새로운 아이디어와 열정적인 찬양으로 교회의 영적 분위기를 고양시키고 계십니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Serving Team Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">섬기는 분</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto text-gray-600">
          <p className="mb-4">
            정희경 전도사(새가족), 김폴 선교사(선교,시설),<br />
            박크리스틴 집사(주일학교 디렉터)<br />
            박종호, 김기전, 김윤성, ​이창록 장로<br />
            후원선교: 임태호/이선화 선교사(태국). ​미​주복음방송
          </p>
        </div>
      </section>

      {/* Join Us Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(110, 89, 165, 0.9), rgba(110, 89, 165, 0.9)), url('https://images.unsplash.com/photo-1559825436-299b93e85c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className="container max-w-4xl mx-auto text-center p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><strong>우리가교회</strong>와 함께하세요</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            <strong>우리가교회</strong>는 언제나 여러분을 환영합니다. 함께 예배하고, 배우며, 성장하는 공동체에 참여하세요.
          </p>
          <Button asChild size="lg" className="bg-church-gold hover:bg-amber-600 text-white">
            <Link to="/contact">문의하기 <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
