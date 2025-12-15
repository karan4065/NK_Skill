import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // ✅ Check token on load
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Our CEO', id: 'ceo' },
    { label: 'Services', id: 'services' },
    { label: 'Success Stories', id: 'stories' },
    { label: 'Our Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div
            className="flex-shrink-0 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <h1 className={`text-2xl md:text-3xl font-bold ${
              isScrolled ? 'text-purple-600' : 'text-white'
            }`}>
              <span className="text-purple-600">NK</span>
              <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
                SkillEdge
              </span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-1 py-2 text-sm font-medium ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* ✅ Auth Buttons */}
            <div className="hidden lg:flex items-center ml-6 space-x-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50 transition font-medium"
                >
                  Logout
                </button>
              ) : (
                <>
                  <a
                    href="/login"
                    className={`px-4 py-2 rounded-full border ${
                      isScrolled
                        ? 'text-gray-700 border-gray-200 hover:bg-gray-100'
                        : 'text-white border-white/30 hover:bg-white/10'
                    }`}
                  >
                    Login
                  </a>
                  <a
                    href="/admin"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
                  >
                    Admin Login
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 shadow-xl rounded-b-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {item.label}
                </button>
              ))}

              {/* ✅ Mobile Auth Buttons */}
              <div className="pt-3 flex flex-col gap-3">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 rounded-lg border border-red-500 text-red-500"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="w-full text-center px-4 py-3 rounded-lg border border-gray-300"
                    >
                      Login
                    </a>
                    <a
                      href="/adminlogin"
                      className="w-full text-center px-4 py-3 rounded-lg bg-purple-600 text-white"
                    >
                      Admin Login
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
