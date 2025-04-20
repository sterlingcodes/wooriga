
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "메시지가 전송되었습니다",
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-church-navy text-white">
        <div className="container max-w-6xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">연락처</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            우리 GA 교회에 문의하실 내용이 있으시면 언제든지 연락 주세요
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">전화</h3>
              <p className="text-gray-600 mb-2">궁금한 점이 있으시면 전화주세요</p>
              <p className="text-church-navy font-medium text-lg">(213) 675-6303</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">이메일</h3>
              <p className="text-gray-600 mb-2">이메일로 문의해 주세요</p>
              <p className="text-church-navy font-medium text-lg">woorigachurch@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">주소</h3>
              <p className="text-gray-600 mb-2">우리 교회를, 방문해 주세요</p>
              <p className="text-church-navy font-medium">3240 Wilshire Blvd</p>
              <p className="text-church-navy font-medium">Los Angeles, CA 90010</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-church-navy mb-4">문의하기</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <p className="text-gray-600 mb-6">
              질문이나 의견이 있으시면 이 양식을 작성하여 보내주세요. 
              빠른 시일 내에 답변 드리겠습니다.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  전화번호
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  메시지
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="bg-church-navy hover:bg-blue-900">
                메시지 보내기
              </Button>
            </form>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8583366052336!2d-118.30894742426193!3d34.06120727343767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b883af6bdfad%3A0x4e80285596ac0b86!2s3240%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090010!5e0!3m2!1sen!2sus!4v1716456720064!5m2!1sen!2sus" 
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
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-church-light-gray">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-church-navy mb-4">교회 사무실 운영 시간</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              우리 GA 교회 사무실 운영 시간을 확인하세요
            </p>
          </div>
          
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">월요일</span>
                <span>오전 9:00 - 오후 5:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">화요일</span>
                <span>오전 9:00 - 오후 5:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">수요일</span>
                <span>오전 9:00 - 오후 8:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">목요일</span>
                <span>오전 9:00 - 오후 5:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">금요일</span>
                <span>오전 9:00 - 오후 8:00</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="font-medium">토요일</span>
                <span>오전 10:00 - 오후 2:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">일요일</span>
                <span>오전 9:00 - 오후 1:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
