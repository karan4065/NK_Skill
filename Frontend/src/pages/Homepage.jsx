import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Ceo from './Ceo';
import Service from './Service';
import SuccessStories from './SuccessStories ';
import CoreTeam from './CoreTeam';

export default function Homepage() {
  const [activeNav, setActiveNav] = useState('home');

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
  };

  const handleScrollDown = () => {
    scrollToSection('about');
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-10 md:pt-32 pb-20 md:pb-40 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-120 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:ml-24 ml-0 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-purple-500/30 backdrop-blur-md rounded-full text-purple-100 text-sm font-semibold border border-purple-400/50 animate-in fade-in scale-95 duration-700">
                    ✨ Welcome to NK SkillEdge
                  </span>
                </div>

                <h1 className="text-5xl mt-2 md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  <span className="inline-block animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                    Empowering 
                  </span>{' '}
                  <br />
                  <span className="inline-block animate-in fade-in slide-in-from-right-4 duration-700 delay-300 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                   Skills for a 
                  </span>{' '}
                  <br />
                  <span className="inline-block animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                 Better Future
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-xl animate-in fade-in duration-700 delay-700">
                  Empowering students through practical training, industry exposure, and real-world learning. Join our youth-led initiative bridging the gap between education and employability.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in fade-in duration-700 delay-1000">
                <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 transform hover:scale-105 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Our Programs
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 md:px-10 md:py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 active:scale-95">
                  <span className="flex items-center justify-center gap-2">
                    Join Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Illustration Placeholder */}
            <div className="hidden lg:flex justify-center items-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative w-full max-w-md h-96 rounded-3xl overflow-hidden group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-pink-500/30 rounded-3xl p-1">
                  <div className="absolute inset-1 bg-black/20 rounded-3xl backdrop-blur-md"></div>
                </div>

                {/* Content wrapper */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-white/10 flex items-center justify-center group/image">
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover/image:from-cyan-500/20 group-hover/image:to-purple-500/20 transition-all duration-500"></div>

                  {/* Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Professional learning and skill development" 
                    className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500 opacity-90 group-hover/image:opacity-100"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-4 -left-2 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-20 md:mt-10">
            <button 
              onClick={handleScrollDown}
              className="relative group flex flex-col items-center gap-3 transition-all duration-500 transform hover:scale-110 active:scale-95 "
            >
              {/* Background gradient on hover */}
           
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <p className="text-purple-200 text-xs md:text-sm font-semibold tracking-wider group-hover:text-white  duration-300 uppercase">Scroll to explore</p>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white animate-bounce duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-full"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">NK SkillEdge?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive training and real-world experience to transform your career trajectory
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: '🎯',
                title: 'Practical Training',
                description: 'Hands-on learning experiences designed for real-world application and immediate impact.',
                color: 'from-purple-600 to-purple-400',
              },
              {
                icon: '🌟',
                title: 'Industry Exposure',
                description: 'Connect with professionals and learn directly from industry leaders and experts.',
                color: 'from-pink-600 to-pink-400',
              },
              {
                icon: '📈',
                title: 'Career Growth',
                description: 'Build in-demand skills that lead to employment opportunities and career advancement.',
                color: 'from-cyan-600 to-cyan-400',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full p-8 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
               

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ceo">
        <div className=''>
            <Ceo/>
        </div>
      </section>

       <section id="services">
        <div className=''>
            <Service/>
        </div>
      </section>

      <section id="stories">
        <div className=''>
            <SuccessStories/>
        </div>
      </section>

       <section id="team">
        <div className=''>
            <CoreTeam/>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Your Future?
              </span>
            </h3>
            
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who are already shaping their futures with NK SkillEdge. Take the first step towards your dream career today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in duration-700 delay-300">
            <button className="group relative px-10 py-4 md:px-14 md:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 transform hover:scale-110 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-10 py-4 md:px-14 md:py-5 border-2 border-white/50 text-white font-bold rounded-full hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-110 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 md:py-10 border-t border-gray-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 animate-in fade-in duration-700">
            {/* Brand Column */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">
                <span className="text-purple-500">NK</span>SkillEdge
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                Shaping skills, building futures through practical training and real-world learning.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/people/NK-SkillEdge/pfbid02T44HacS8mQFMyebcpsCf6gEvE1qikFsSueRGagSt2ncbxDiV9DSoDxcc3JLfpcBfl/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-sm">f</span>
                </a>
                <a href="https://x.com/NSkilledge/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="https://www.linkedin.com/in/nk-skilledge-b615bb39a/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-1 group">
                      <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text group-hover:block hidden">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Programs</h5>
              <ul className="space-y-2 text-sm">
                {['Skill Training', 'Industry Mentorship', 'Career Coaching', 'Job Placement'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-1 group">
                      <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text group-hover:block hidden">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Get in Touch</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">📧</span>
                  <a href="mailto:hmendhe72@gmail.com" className="text-gray-500 hover:text-purple-400 transition-colors">
                    hmendhe72@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">📱</span>
                  <a href="tel:+917498784109" className="text-gray-500 hover:text-purple-400 transition-colors">
                    7498784109 / 9699406946
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-2 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-600">
              &copy; 2024 NK SkillEdge. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
