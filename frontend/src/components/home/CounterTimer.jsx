import React, { useState, useEffect } from 'react';

export default function AbyComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        
        if (hours < 0) {
          hours = 23;
          days--;
        }
        
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden flex items-center">
      {/* Animated Background Stars/Dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-16 animate-float">
        <div className="w-16 h-16 bg-emerald-400 rounded-full opacity-30 blur-xl"></div>
      </div>

      <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-green-400 rounded-full opacity-40 blur-lg"></div>
      </div>

      <div className="absolute bottom-24 left-24 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-teal-400 rounded-full opacity-30 blur-xl"></div>
      </div>

      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-14 h-14 bg-emerald-500 rounded-full opacity-40 blur-lg"></div>
      </div>

      <div className="absolute top-1/2 left-32 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-12 h-12 bg-green-300 rounded-full opacity-30 blur-lg"></div>
      </div>

      <div className="absolute bottom-1/3 right-48 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="w-10 h-10 bg-teal-300 rounded-full opacity-40 blur-lg"></div>
      </div>

      {/* Decorative Bus Icon Top Right */}
      <div className="absolute top-12 right-12 opacity-10">
        <svg className="w-32 h-32 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bus Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 to-green-500/40 blur-3xl rounded-full animate-pulse"></div>
              
              {/* Bus Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/30">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=800&fit=crop"
                  alt="New Route Bus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-primary-500 p-6 rounded-2xl shadow-2xl rotate-12 animate-bounce">
                <p className="text-white font-bold text-2xl">NEW</p>
                <p className="text-white text-sm">Route</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Coming Soon Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-emerald-400"></div>
              <p className="text-emerald-400 text-lg md:text-xl font-medium italic">Coming Soon</p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">NEW ROUTE TO</span>
              <br />
              <span className="text-emerald-400">NYUNGWE </span>
              <span className="text-white">FOREST</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl">
              Explore Rwanda! Book Your Next Adventure Journey.
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              {/* Days */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 mb-2 border-2 border-emerald-400/40 shadow-lg">
                  <span className="text-emerald-400 text-4xl md:text-5xl font-bold">
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <p className="text-white/70 text-sm md:text-base font-semibold">Days</p>
              </div>

              <span className="text-emerald-400 text-3xl md:text-4xl font-bold">:</span>

              {/* Hours */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 mb-2 border-2 border-emerald-400/40 shadow-lg">
                  <span className="text-emerald-400 text-4xl md:text-5xl font-bold">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <p className="text-white/70 text-sm md:text-base font-semibold">Hours</p>
              </div>

              <span className="text-emerald-400 text-3xl md:text-4xl font-bold">:</span>

              {/* Minutes */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 mb-2 border-2 border-emerald-400/40 shadow-lg">
                  <span className="text-emerald-400 text-4xl md:text-5xl font-bold">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <p className="text-white/70 text-sm md:text-base font-semibold">Minutes</p>
              </div>

              <span className="text-emerald-400 text-3xl md:text-4xl font-bold">:</span>

              {/* Seconds */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 mb-2 border-2 border-emerald-400/40 shadow-lg">
                  <span className="text-emerald-400 text-4xl md:text-5xl font-bold">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <p className="text-white/70 text-sm md:text-base font-semibold">Seconds</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Pre-Book Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-emerald-400 hover:bg-emerald-400/20 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Route Info */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
                <p className="text-emerald-400 text-2xl font-bold">250km</p>
                <p className="text-white/70 text-sm">Distance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
                <p className="text-emerald-400 text-2xl font-bold">4.5hrs</p>
                <p className="text-white/70 text-sm">Duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
                <p className="text-emerald-400 text-2xl font-bold">VIP</p>
                <p className="text-white/70 text-sm">Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(10deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}