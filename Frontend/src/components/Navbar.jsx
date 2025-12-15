import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      // Calculate navbar height (80px for md:h-20, 64px for h-16)
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
            <h1 className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${
              isScrolled ? 'text-purple-600' : 'text-white'
            }`}>
              <span className="text-purple-600">NK</span>
              <span className={`transition-all duration-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                SkillEdge
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
                    isScrolled
                      ? 'text-gray-700'
                      : 'text-white'
                  }`}
                >
                  <span className={`relative z-10 block transition-all duration-300 ${
                    activeNav === item.id 
                      ? (isScrolled ? 'text-purple-600 font-semibold' : 'text-white font-semibold')
                      : (isScrolled ? 'group-hover:text-purple-600' : 'group-hover:text-purple-300')
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out ${
                      activeNav === item.id
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </div>
            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex items-center ml-6 space-x-3">
              <a
                href="/login"
                className={`px-4 py-2 rounded-full border transition duration-300 font-medium ${isScrolled ? 'text-gray-700 border-gray-200 hover:bg-gray-100' : 'text-white border-white/30 hover:bg-white/10'}`}
              >
                Login
              </a>
              <a
                href="/admin"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition duration-300"
              >
                Admin Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100/50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'animate-in fade-in slide-in-from-top-4' : 'animate-out fade-out slide-out-to-top-4'
          }`}>
            <div className={`bg-white/95 backdrop-blur-md border-t ${
              isScrolled ? 'border-gray-200' : 'border-gray-300/30'
            } rounded-b-2xl shadow-xl`}>
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-1 ${
                      activeNav === item.id
                        ? 'bg-purple-100 text-purple-600 border-l-4 border-purple-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {activeNav === item.id && <div className="w-2 h-2 bg-purple-600 rounded-full"></div>}
                    </span>
                  </button>
                ))}

                {/* Auth Buttons (Mobile) */}
                <div className="pt-3 flex flex-col gap-3">
                  <a
                    href="/login"
                    className="block w-full text-center px-4 py-3 rounded-lg font-medium bg-white/10 border border-white/20 text-gray-800 hover:bg-white/20 transition-all duration-300"
                  >
                    Login
                  </a>
                  <a
                    href="/admin"
                    className="block w-full text-center px-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition-all duration-300"
                  >
                    Admin Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
