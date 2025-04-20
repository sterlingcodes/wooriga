
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "성경 공부 모임",
      date: "2025년 4월 24일",
      time: "저녁 7:00",
      location: "교회 소예배실",
      description: "요한복음을 함께 공부하는 성경 공부 모임입니다. 모든 성도님들의 참여를 환영합니다."
    },
    {
      id: 2,
      title: "청년부 수련회",
      date: "2025년 5월 10일 - 12일",
      time: "금요일 오후 - 일요일 오후",
      location: "산타바바라 수양관",
      description: "믿음 안에서 성장하고 교제하는 청년부 수련회입니다. 함께 하나님을 만나는 시간이 될 것입니다."
    },
    {
      id: 3,
      title: "어버이날 특별 예배",
      date: "2025년 5월 11일",
      time: "오전 11:00",
      location: "교회 본당",
      description: "부모님들을 위한 특별 예배와 감사 행사가 준비되어 있습니다."
    },
    {
      id: 4,
      title: "선교 바자회",
      date: "2025년 5월 18일",
      time: "오후 1:00 - 5:00",
      location: "교회 주차장",
      description: "선교 사역을 위한 기금 마련 바자회입니다. 다양한 음식과 물품이 준비됩니다."
    }
  ];

  // Sample regular weekly events
  const weeklyEvents = [
    {
      day: "주일",
      events: [
        { time: "9:00am(1부), 11:00am(2부)", title: "주일예배" },
        { time: "11:00am", title: "Sunday School" },
        { time: "1:00pm", title: "점심 식사" },
        { time: "1:00pm", title: "소그룹" }
      ]
    },
    {
      day: "수요일",
      events: [
        { time: "7:30pm", title: "수요성경공부" }
      ]
    },
    {
      day: "금요일",
      events: [
        { time: "7:30pm", title: "금요기도회" },
        { time: "7:30pm", title: "Sunday School" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-church-navy text-white">
        <div className="container max-w-6xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
              <Calendar className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">교회 일정</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            <strong>우리가 교회</strong>의 예정된 행사와 모임을 확인하세요
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">다가오는 행사</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>우리가 교회</strong>의 특별 행사와 모임에 여러분을 초대합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="bg-white shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-church-navy/10 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-church-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-church-gold font-medium mb-1">{event.date}</p>
                    <p className="text-gray-600 mb-1">{event.time}</p>
                    <p className="text-gray-600 mb-3">{event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">정기 일정</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>우리가 교회</strong>의 매주 정기적으로 진행되는 모임 일정입니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-church-navy mb-4">주일</h3>
                <ul className="space-y-3">
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">주일예배</p>
                    <p className="text-gray-500 text-sm">9:00am(1부), 11:00am(2부)</p>
                  </li>
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">Sunday School</p>
                    <p className="text-gray-500 text-sm">11:00am</p>
                  </li>
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">점심 식사</p>
                    <p className="text-gray-500 text-sm">1:00pm</p>
                  </li>
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">소그룹</p>
                    <p className="text-gray-500 text-sm">1:00pm</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-church-navy mb-4">수요일</h3>
                <ul className="space-y-3">
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">수요성경공부</p>
                    <p className="text-gray-500 text-sm">7:30pm</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-church-navy mb-4">금요일</h3>
                <ul className="space-y-3">
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">금요기도회</p>
                    <p className="text-gray-500 text-sm">7:30pm</p>
                  </li>
                  <li className="border-l-2 border-church-gold pl-3">
                    <p className="font-medium">Sunday School</p>
                    <p className="text-gray-500 text-sm">7:30pm</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Church Calendar */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-church-navy mb-4">교회 달력</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            우리 GA 교회의 행사와 모임을 달력에서 확인하세요
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=woorigachurch%40gmail.com&ctz=America%2FLos_Angeles" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
            title="Church Calendar"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
