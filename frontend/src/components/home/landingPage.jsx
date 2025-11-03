import React, { useState, useEffect } from 'react';
import { Bus, MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AbyTicketLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Looking to save more on your bus ticket?",
      description: "Whether you're traveling across Rwanda for business, visiting family, or exploring our beautiful country, we offer reliable and comfortable bus services to all major destinations.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80",
      gradient: "from-primary-900/70 via-primary-800/60 to-black/80"
    },
    {
      title: "Travel in Comfort & Style",
      description: "Experience premium comfort with our modern fleet of buses featuring reclining seats, air conditioning, and onboard entertainment for a journey as enjoyable as your destination.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1600&q=80",
      gradient: "from-primary-900/70 via-primary-800/60 to-black/80"
    },
    {
      title: "Explore Rwanda's Beauty",
      description: "From the bustling streets of Kigali to the serene landscapes of Musanze, discover every corner of Rwanda with our extensive network connecting all major cities and attractions.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1600&q=80",
      gradient: "from-green-900/70 via-green-800/60 to-black/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images with Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`}></div>
        </div>
      ))}

      {/* Animated Left Sidebar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary-500 via-primary-500 to-green-500 animate-pulse"></div>
      
      <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-4">
        <div className="w-1 h-20 bg-gradient-to-b from-primary-500 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="w-1 h-32 bg-gradient-to-b from-primary-500 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-1 h-24 bg-gradient-to-b from-green-500 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Color Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-60 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-400 to-green-400 text-sm tracking-[0.4em] uppercase font-bold">
            ABY TICKET
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Welcome Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
              <span className="text-yellow-400 text-xl animate-pulse">✦</span>
              <span className="text-white text-sm font-medium">Welcome To Aby Ticket</span>
            </div>
          </div>

          {/* Slide Content */}
          <div className="transition-all duration-700 ease-in-out">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-6 leading-tight max-w-5xl mx-auto animate-fade-in">
              {slides[currentSlide].title}
            </h1>

            <p className="text-gray-200 text-base md:text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-600 to-green-600 hover:from-primary-700 hover:via-primary-700 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transform">
              Book A Ticket
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </button>
            
            <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform">
              Learn More
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-gradient-to-r from-primary-500 via-primary-500 to-green-500' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}