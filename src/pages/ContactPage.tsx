
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import emailjs from 'emailjs-com';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailjsConfig, setEmailjsConfig] = useState({
    serviceId: "",
    templateId: "",
    userId: "",
    configured: false
  });

  // Check if Email.js is configured
  useEffect(() => {
    const savedConfig = localStorage.getItem('emailjsConfig');
    if (savedConfig) {
      try {
        const config = JSON.parse(savedConfig);
        setEmailjsConfig({
          serviceId: config.serviceId,
          templateId: config.templateId,
          userId: config.userId,
          configured: true
        });
      } catch (error) {
        console.error("Failed to parse saved EmailJS config", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailjsConfig(prev => ({ ...prev, [name]: value }));
  };

  const saveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const { serviceId, templateId, userId } = emailjsConfig;
    
    if (!serviceId || !templateId || !userId) {
      toast({
        title: "설정 오류",
        description: "모든 EmailJS 설정 필드를 채워주세요.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem('emailjsConfig', JSON.stringify({
      serviceId,
      templateId,
      userId
    }));
    
    setEmailjsConfig(prev => ({ ...prev, configured: true }));
    
    toast({
      title: "설정이 저장되었습니다",
      description: "이메일 설정이 성공적으로 저장되었습니다.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailjsConfig.configured) {
      toast({
        title: "EmailJS가 설정되지 않았습니다",
        description: "메시지를 받으려면 EmailJS를 설정하세요.",
        variant: "destructive"
      });
      return;
    }
    
    console.log("Form submitted:", formData);
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
      
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.userId
      );
      
      toast({
        title: "메시지가 전송되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "메시지 전송 실패",
        description: "메시지를 보내는 중 오류가 발생했습니다. 나중에 다시 시도하세요.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#6E59A5] text-white">
        <div className="container max-w-6xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">연락처</h1>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            <strong>우리가교회</strong>에 문의하실 내용이 있으시면 언제든지 연락 주세요
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
              <p className="text-church-navy font-medium text-lg">(323) 610-6989</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">이메일</h3>
              <p className="text-church-navy font-medium text-lg">woorigachurch.la@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-church-navy/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-church-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">주소</h3>
              <p className="text-church-navy font-medium">3435 Wilshire Blvd, Suite 570 (5층)</p>
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
            
            {/* EmailJS Configuration Form */}
            {!emailjsConfig.configured && (
              <Card className="mb-6 border-yellow-300 bg-yellow-50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-yellow-800 mb-2">EmailJS 설정</h3>
                  <p className="text-sm text-yellow-700 mb-4">
                    이메일을 받으려면 EmailJS 계정을 설정하세요. <a href="https://www.emailjs.com/docs/sdk/installation/" target="_blank" rel="noopener noreferrer" className="underline">EmailJS 문서 확인하기</a>
                  </p>
                  <form onSubmit={saveConfig} className="space-y-3">
                    <div>
                      <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700 mb-1">
                        Service ID
                      </label>
                      <Input
                        id="serviceId"
                        name="serviceId"
                        value={emailjsConfig.serviceId}
                        onChange={handleConfigChange}
                        required
                        placeholder="예: service_xxxxxxx"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="templateId" className="block text-sm font-medium text-gray-700 mb-1">
                        Template ID
                      </label>
                      <Input
                        id="templateId"
                        name="templateId"
                        value={emailjsConfig.templateId}
                        onChange={handleConfigChange}
                        required
                        placeholder="예: template_xxxxxxx"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                        User ID (Public Key)
                      </label>
                      <Input
                        id="userId"
                        name="userId"
                        value={emailjsConfig.userId}
                        onChange={handleConfigChange}
                        required
                        placeholder="예: user_xxxxxxxxx"
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      설정 저장
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {/* Contact Form */}
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
              
              <Button 
                type="submit" 
                className="bg-church-navy hover:bg-blue-900"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    전송 중...
                  </>
                ) : (
                  "메시지 보내기"
                )}
              </Button>
            </form>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.858336605234!2d-118.30894742426193!3d34.06120727343767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b883af6bdfad%3A0x4e80285596ac0b86!2s3435%20Wilshire%20Blvd%20Suite%20570%2C%20Los%20Angeles%2C%20CA%2090010!5e0!3m2!1sen!2sus!4v1716456720064!5m2!1sen!2sus"
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

      <Footer />
    </div>
  );
};

export default ContactPage;
