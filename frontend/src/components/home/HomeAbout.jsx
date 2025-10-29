import React from 'react';
import { ArrowUpRight, Smartphone, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Images */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" opacity="0.9"/>
                  <circle cx="50" cy="50" r="8" fill="white"/>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 z-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800">
                  <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Main Images Container */}
            <div className="relative flex items-center justify-center">
              {/* Top Circle Image */}
              <div className="absolute top-0 left-0 w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
                <img 
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=600&q=80" 
                  alt="Happy passenger in bus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Circle Image */}
              <div className="relative mt-48 ml-32 w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
                  alt="Professional bus service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-2xl">✦</span>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your trusted partner in<br />reliable bus travel
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed">
                At Aby Ticket, we connect Rwanda through safe, comfortable, and affordable bus services. 
                With modern buses and professional drivers, we ensure your journey across Rwanda is smooth and enjoyable.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-blue-600" strokeWidth={2} />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">Easy Booking Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We have optimized the booking process so that our clients can experience the easiest and the safest service
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-orange-600" strokeWidth={2} />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">Convenient Pick-Up & Return Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We have optimized the booking process so that our clients can experience the easiest and the safest service
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30">
                Contact Us
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 group-hover:bg-blue-800 transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}