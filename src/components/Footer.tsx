import { Link } from "react-router-dom";
import { Church, Phone, Mail, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-navy text-white py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Church className="h-8 w-8 mr-2" />
              <div>
                <h3 className="text-xl font-bold">우리가 교회</h3>
                <p className="text-xs opacity-75">WOORIGA CHURCH</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              하나님의 사랑으로 세상을 섬기는 우리가 교회에 오신 것을 환영합니다.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/channel/UC6aIZAZw2jti4vvLvyyPNjA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-church-gold transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all">홈</Link>
              </li>
              <li>
                <Link to="/worship" className="text-gray-300 hover:text-white transition-all">예배</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all">교회소개</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-all">교회일정</Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-300 hover:text-white transition-all">오시는길</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all">연락처</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-church-gold" />
                <div>
                  <p>(구)에퀴터블/(현)cbb 은행 빌딩</p>
                  <p className="text-gray-300">3435 Wilshire Blvd, Suite 570 (5층)</p>
                  <p className="text-gray-300">Los Angeles, CA 90010</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-church-gold" />
                <p>(323) 610-6989</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-church-gold" />
                <p>woorigachurch.la@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} 우리가 교회 (WOORIGA CHURCH). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
