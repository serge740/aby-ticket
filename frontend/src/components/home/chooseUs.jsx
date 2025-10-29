import React from 'react';
import { ArrowRight, ArrowUpRight, Bus, Briefcase, Plane, UserCircle } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Bus Rental With Driver",
      description: "Enhance your travel experience with additional options.",
      icon: Bus,
      featured: true
    },
    {
      id: 2,
      title: "Business Bus Rental",
      description: "Enhance your travel experience with additional options.",
      icon: Briefcase,
      featured: false
    },
    {
      id: 3,
      title: "Airport Transfer",
      description: "Enhance your travel experience with additional options.",
      icon: Plane,
      featured: false
    },
    {
      id: 4,
      title: "Chauffeur Services",
      description: "Enhance your travel experience with additional options.",
      icon: UserCircle,
      featured: false
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-600 text-2xl">✦</span>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Explore our wide range of<br />rental services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                rounded-3xl p-8 transition-all duration-300 hover:scale-105
                
                  hover:bg-gradient-to-br hover:from-green-600 to-green-500 hover:text-white hover:shadow-xl hover:shadow-green-600/30
                bg-white text-gray-900 shadow-lg 
                
              `}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                 hover:bg-green-700/30 bg-gray-100
              `}>
                <service.icon 
                  className={'hover:text-white text-gray-900'} 
                  size={32} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className={`
                text-xl font-bold mb-3
                 hover:text-white' text-gray-900'}
              `}>
                {service.title}
              </h3>
              
              <p className={`
                text-sm leading-relaxed mb-8
                 hover:text-white/90 text-gray-600'}
              `}>
                {service.description}
              </p>

              {/* Arrow Button */}
              <button className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                
                   hover:bg-green-800 
                 bg-green-600  text-white
                
              `}>
                {service.featured ? (
                  <ArrowRight size={20} strokeWidth={2.5} />
                ) : (
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Description and CTA */}
        <div className="text-center space-y-8">
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            Discover our range of bus rental services designed to meet all your travel needs.<br />
            From a diverse fleet of vehicles to flexible rental plans.
          </p>

          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-green-600/30">
            View All Service
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 group-hover:bg-green-800 transition-colors">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}