import React, { useState } from 'react';
import { Bus, MapPin, CreditCard, Shield, Clock, Headphones, ArrowRight, Sparkles } from 'lucide-react';
import TestimonialsSlider from './testimony';

const services = [
  {
    title: 'Easy Online Booking',
    icon: CreditCard,
    description: 'Book your bus tickets online in seconds with our simple and secure booking platform. No queues, no hassle.',
  },
  {
    title: 'Real-Time Bus Tracking',
    icon: MapPin,
    description: 'Track your bus location in real-time and get accurate arrival time updates directly on your phone.',
  },
  {
    title: 'Safe & Comfortable Buses',
    icon: Shield,
    description: 'Travel with peace of mind in our modern, well-maintained buses equipped with safety features and comfortable seating.',
  },
  {
    title: 'Flexible Schedules',
    icon: Clock,
    description: 'Multiple daily departures to fit your schedule. Choose from morning, afternoon, or evening trips across Rwanda.',
  },
  {
    title: '24/7 Customer Support',
    icon: Headphones,
    description: 'Our dedicated support team is available round the clock to assist you with bookings, changes, or any travel queries.',
  },
  {
    title: 'Nationwide Coverage',
    icon: Bus,
    description: 'Extensive route network connecting all major cities and towns across Rwanda with reliable and punctual service.',
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-16 w-full overflow-hidden">
      {/* Animated Background Elements */}


      <div className="  mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-whtie mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Your Journey, Our
            <br />
            <span className="text-primary-600">Priority</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From booking to arrival, we deliver excellence in every aspect of your travel experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl border border-primary-100/50 overflow-hidden">
                  {/* Spotlight Effect */}
                  {/* {isHovered && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.1), transparent 40%)`,
                      }}
                    ></div>
                  )} */}

                  {/* Gradient Orb */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br from-primary-500 to-primary-600"></div>

                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-gradient-to-br from-primary-500 to-primary-600">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary-600">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300 text-primary-600">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-full opacity-10 rounded-tl-full bg-gradient-to-tl from-primary-500 to-primary-600"></div>
                  </div>
                </div>

                {/* Floating Animation on Hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl transition-all duration-500 group-hover:scale-105" style={{ background: isHovered ? 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.2))' : '' }}></div>
              </div>
            );
          })}
        </div>

<TestimonialsSlider />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Your Ticket Now
            </button>
            <button className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300">
              View All Routes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}