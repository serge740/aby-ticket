import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image1 from '../../assets/bus/slide1.jpg'
import Image2 from '../../assets/bus/sllde2.jpg'
import Image3 from '../../assets/bus/slide3.jpg'


export default function AbyTicketLanding() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t("slides.bookOnline.title"),
      description: t("slides.bookOnline.description"),
      image: Image1,
      gradient: "from-primary-900/70 via-primary-800/60 to-black/80"
    },
    {
      title: t("slides.trackBus.title"),
      description: t("slides.trackBus.description"),
      image: Image2,
      gradient: "from-primary-900/70 via-primary-800/60 to-black/80"
    },
    {
      title: t("slides.easyUse.title"),
      description: t("slides.easyUse.description"),
      image: Image3,
      gradient: "from-green-900/70 via-green-800/60 to-black/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`}></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-400 to-green-400 text-sm tracking-[0.4em] uppercase font-bold">
            ABY TICKET
          </div>
        </div>

        {/* Slide Content */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
              <span className="text-yellow-400 text-xl animate-pulse">✦</span>
              <span className="text-white text-sm font-medium">{t("welcome")}</span>
            </div>
          </div>

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
              {t("buttons.bookTicket")}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </button>

            <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform">
              {t("buttons.learnMore")}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:scale-110">
              <ChevronLeft size={20} />
            </button>

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

            <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:scale-110">
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
