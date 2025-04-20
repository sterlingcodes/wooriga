
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Book, Users, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "홈", path: "/", icon: null },
    { name: "예배", path: "/worship", icon: <Book className="h-5 w-5" /> },
    { name: "교회소개", path: "/about", icon: <Users className="h-5 w-5" /> },
    { name: "교회일정", path: "/events", icon: <Calendar className="h-5 w-5" /> },
    { name: "오시는길", path: "/location", icon: <MapPin className="h-5 w-5" /> },
    { name: "연락처", path: "/contact", icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors ${isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/church-logo.png" className="h-12 w-12 mr-2" alt="우리가 교회" />
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? "text-church-navy" : "text-white drop-shadow-md"}`}>우리가 교회</h1>
              <p className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/90 drop-shadow-md"}`}>WOORIGA CHURCH</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-1 ${
                  isScrolled ? "text-gray-700 hover:text-church-navy" : "text-white hover:text-church-gold drop-shadow-md"
                } transition-colors font-medium`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className={isScrolled ? "text-gray-700" : "text-white"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon || <div className="w-5 h-5" />}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
