import React from 'react';
import { Play } from 'lucide-react';

export default function VideoHeroSection() {
  const companies = [
    'EBENEZER EXPRESS LTD',
    'GICUMBI TRANSPORT COOPERATIVE',
    'KIVU BELT EXPRESS LTD',
    'TRIPARTITE TOURS LTD',
    'SELECT EXPRESS AGENCY LTD',
    'SHALOM TRANSPORTATION LIMITED',
    'JALI TRANSPORT Ltd',
    'ROYAL EXPRESS',
    'KIGALI BUS SERVICES LTD',
    'LA COLOMBE EXPRESS LTD',
    'YAHOO CAR EXPRESS LTD',
    'NYABUGOGO TC',
    'KAYONZA T C',
    'MUSANZE T C',
    'NYAGATARE T C',
    'NGOMA T C',
    'MUHANGA T C',
    'HUYE T C',
    'RUSIZI T C',
    'STAR EXPRESS LTD',
    'DIFFERENT EXPRESS LTD',
    'RUBAVU T C',
    'RITCO LTD',
    'RUHIRE EXPRESS LTD',
    'INDONYI EXPRESS',
    'KIGALI COACH TOURS & TRAVEL LTD',
    'CAPITAL LTD',
    'FIDELITY EXPRESS LTD',
    'CITY EXPRESS LTD',
    'EXCEL TRAVEL & TOURS AGENCY LTD',
    'VOLCANO LTD',
    'HORIZON EXPRESS LTD',
    'STELLA EXPRESS LTD',
    'MATUNDA EXPRESS LTD',
    'OMEGA LTD',
    'VIRUNGA EXPRESS LTD',
    'ALPHA EXPRESS COMPANY LTD',
    'INTERNATIONAL EXPRESS LTD',
    'EA BUS & TRAVEL LIMITED',
    'MASH BUS SERVICES LTD',
    'TRINITY TRANSPORTERS & DISTRIBUTORS CO.LTD',
    'SIMBA COACH',
    'MODERN COAST'
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop"
          alt="Bus on scenic road"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Top Label */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <span className="text-orange-500 text-xl">✱</span>
          <span className="text-orange-500 font-semibold text-sm md:text-base tracking-wider uppercase">
            Watch Full Video
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-12 max-w-5xl animate-slide-up">
          Discover the ease and<br />
          convenience of renting with Us
        </h1>

        {/* Play Button */}
        <button className="group relative w-20 h-20 md:w-24 md:h-24 mb-20 animate-pulse-slow">
          <div className="absolute inset-0 bg-orange-600 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-full h-full bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white" />
          </div>
        </button>

        {/* Companies Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-6 border-t border-white/10">
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="inline-flex items-center mx-8 text-white font-semibold text-sm md:text-base tracking-wide"
                >
                  {company}
                  <span className="mx-8 text-orange-500">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}