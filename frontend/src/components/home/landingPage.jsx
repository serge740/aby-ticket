import React, { useState, useEffect } from 'react';

export default function AbyTicketHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop',
      title: 'Travel Across Rwanda',
      subtitle: 'Comfortable & Safe Bus Services'
    },
    {
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&h=1080&fit=crop',
      title: 'Book Your Journey',
      subtitle: 'Fast, Easy & Reliable Booking'
    },
    {
      image: 'https://images.unsplash.com/photo-1581262177000-8c2c6e7d4f6f?w=1920&h=1080&fit=crop',
      title: 'Explore Rwanda',
      subtitle: 'Connect Cities with Comfort'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                scale: index === currentSlide ? 1.15 : 1,
                animation: index === currentSlide ? 'kenBurns 6000ms ease-out' : 'none'
              }}
            >
              {/* Dark Overlay - stronger on the right to make left text more visible */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content - Left Aligned */}
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto h-full px-6 md:px-12 lg:px-20">
          <div className="flex items-center h-full max-w-2xl">
            <div className="text-left">
              {/* Small Heading */}
              <p className="text-green-400 text-sm md:text-base mb-4 font-semibold tracking-wider uppercase animate-fadeIn">
                Travel Made Easy
              </p>
              
              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ENJOY YOUR
              </h1>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                JOURNEY <span className="text-green-500">TODAY</span>
              </h1>

              {/* Promotion Badge */}
              <div className="mb-8 inline-flex items-center gap-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-l-lg">
                  <p className="text-white text-base md:text-lg font-medium">Book Now. Get</p>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-r-lg relative">
                  <p className="text-white text-xl md:text-2xl font-bold">10% OFF</p>
                  <div className="absolute right-0 top-0 bottom-0 w-0 h-0 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-l-[16px] border-l-emerald-600 translate-x-full md:border-t-[28px] md:border-b-[28px] md:border-l-[20px]"></div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-white text-lg mb-2">Starting From</p>
                <p className="text-green-400 text-4xl md:text-5xl font-bold">RWF 3,500</p>
              </div>

              {/* Contact Info with Icon */}
              <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 inline-flex">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white/70 text-sm">Call Us Now</p>
                    <p className="text-green-400 text-xl md:text-2xl font-bold">+250 788 123 456</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => window.location.href = '#book-ticket'}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-500 hover:to-emerald-500 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Ticket Now
                </button>
                <button 
                  onClick={() => window.location.href = '#routes'}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-base md:text-lg"
                >
                  View Routes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2  flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-green-500 w-12'
                : 'bg-white/50 hover:bg-white/75 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-green-500/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}