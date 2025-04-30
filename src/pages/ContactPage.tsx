
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
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
        
        <div className="rounded-lg overflow-hidden shadow-lg h-[500px] mb-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.858336605234!2d-118.30894742426193!3d34.06120727343767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b883af6bdfad%3A0x4e80285596ac0b86!2s3435%20Wilshire%20Blvd%20Suite%20570%2C%20Los%20Angeles%2C%20CA%2090010!5e0!3m2!1sen!2sus!4v1716456720064!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location Map"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
