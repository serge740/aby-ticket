import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Bus } from 'lucide-react';

const busCompanies = [
  'EBENEZER EXPRESS LTD', 'GICUMBI TRANSPORT COOP', 'KIVU BELT EXPRESS',
  'TRIPARTITE TOURS', 'SELECT EXPRESS', 'SHALOM TRANSPORT', 'JALI TRANSPORT',
  'ROYAL EXPRESS', 'KIGALI BUS SERVICES', 'LA COLOMBE EXPRESS', 'YAHOO CAR',
  'NYABUGOGO TC', 'KAYONZA TC', 'MUSANZE TC', 'NYAGATARE TC', 'NGOMA TC',
  'MUHANGA TC', 'HUYE TC', 'RUSIZI TC', 'STAR EXPRESS', 'DIFFERENT EXPRESS',
  'RUBAVU TC', 'RITCO LTD', 'RUHIRE EXPRESS', 'INDONYI EXPRESS', 'KIGALI COACH',
  'CAPITAL LTD', 'FIDELITY EXPRESS', 'CITY EXPRESS', 'EXCEL TRAVEL', 'VOLCANO LTD',
  'HORIZON EXPRESS', 'STELLA EXPRESS', 'MATUNDA EXPRESS', 'OMEGA LTD',
  'VIRUNGA EXPRESS', 'ALPHA EXPRESS', 'INTERNATIONAL EXPRESS', 'EA BUS & TRAVEL',
  'MASH BUS SERVICES', 'TRINITY TRANSPORTERS', 'SIMBA COACH', 'MODERN COAST'
];

// Duplicate for seamless marquee
const duplicatedCompanies = [...busCompanies, ...busCompanies];

export default function VideoHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        {/* Replace with actual video later */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop')`,
            filter: 'brightness(0.7)',
          }}
        />
        {/* Dark + Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Top Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 border border-primary-400/50 rounded-full text-primary-300 text-xs md:text-sm font-medium tracking-wider">
            <Bus className="w-4 h-4" />
            {t('hero.watchVideo')}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 max-w-5xl animate-slide-up">
          {t('hero.title')}
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-12 animate-fade-in-delay">
          {t('hero.subtitle')}
        </p>

        {/* Play Button */}
        <button
          onClick={() => alert('Video player coming soon!')} // Replace with modal/video
          className="group relative w-20 h-20 md:w-24 md:h-24 mb-16 animate-pulse-slow"
          aria-label="Play video"
        >
          <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-full h-full bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white" />
          </div>
        </button>

        {/* Marquee: Trusted Partners */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md py-5 border-t border-white/10">
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="inline-flex items-center mx-6 text-white/90 font-medium text-sm md:text-base tracking-wide"
                >
                  {company}
                  <span className="mx-6 text-primary-500">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s both; }

        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delay { animation: fade-in-delay 1s ease-out 0.6s both; }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}