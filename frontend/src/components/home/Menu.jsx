import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Bus, Star, Clock, ArrowRight } from 'lucide-react';

const popularAgencies = [
  "Kigali Coach", "Kigali Safaris", "Virunga Express", "Kuvu Belt",
  "Nile Safaris", "Horizon Express", "Fidelity Express", "RITCO Express"
];

const popularRoutes = [
  { from: "Kigali", to: "Musanze", agency: "Virunga Express", time: "2h 30m", popular: true },
  { from: "Kigali", to: "Rubavu", agency: "Kigali Coach", time: "3h 15m", popular: true },
  { from: "Kigali", to: "Nyanza", agency: "Horizon Express", time: "2h 00m" },
  { from: "Rubavu", to: "Musanze", agency: "Kuvu Belt", time: "1h 45m" },
  { from: "Kigali", to: "Huye", agency: "RITCO Express", time: "2h 30m", popular: true },
  { from: "Kigali", to: "Nyamata", agency: "Fidelity Express", time: "45m" },
];

export default function AbyTicketLocations() {
  const { t } = useTranslation();

  return (
    <div id="our-locations" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Background */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4e98198f35f5?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')`,
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* Header */}
        <div className="relative z-10 text-center pt-20 pb-12 px-4">
          <p className="text-sm md:text-base font-medium text-primary-400 tracking-wider mb-2">
            {t('locations.subtitle')}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('locations.title')}
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            {t('locations.description')}
          </p>
        </div>
      </div>

      {/* Popular Agencies */}
      <div className="bg-white py-10 border-b">
        <div className="max-w-8xl mx-auto px-4 md:px-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Bus className="w-5 h-5 text-primary-600" />
            {t('locations.popularAgencies')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {popularAgencies.map((agency) => (
              <span
                key={agency}
                className="px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm font-medium border border-primary-200"
              >
                {agency}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Routes Grid */}
      <div className="max-w-8xl mx-auto px-4 py-16 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary-600" />
            {t('locations.popularRoutes')}
          </h2>
          <button className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition">
            {t('locations.viewAll')} <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">{route.from}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition" />
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{route.to}</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Bus className="w-4 h-4" /> {route.agency}
                    </span>
                    {route.popular && (
                      <span className="flex items-center gap-1 text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-current" /> {t('locations.popular')}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {route.time} {t('locations.duration')}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <button className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl hover:from-primary-600 hover:to-primary-700 transition transform hover:scale-105">
                    {t('locations.bookNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition">
            {t('locations.viewAll')} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('locations.ctaTitle')}
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            {t('locations.ctaDesc')}
          </p>
          <button className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {t('locations.exploreRoutes')}
          </button>
        </div>
      </div>
    </div>
  );
}
