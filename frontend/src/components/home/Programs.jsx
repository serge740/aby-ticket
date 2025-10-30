import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function AbyBookingSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const galleryImages = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581262177000-8c2c6e7d4f6f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1609198092357-f04e0d3d3589?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % (galleryImages.length * 2));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 px-4">
      <div className="mx-auto">
        {/* Gallery Strip */}
        <div className="relative mb-16 overflow-hidden rounded-3xl shadow-2xl">
          <div 
            className="flex transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${(scrollPosition * 100) / galleryImages.length}%)`
            }}
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-56 overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Large Bus Image */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary-200 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-2xl"></div>
            
            {/* Single Large Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=800&fit=crop"
                alt="Modern Bus"
                className="w-full h-[60vh] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Booking Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-primary-600 to-primary-600 px-6 py-3 rounded-full shadow-lg animate-pulse">
                <p className="text-white font-bold text-lg">Easy Booking</p>
              </div>
              
              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <p className="text-white font-bold text-xl mb-1">24/7 Service</p>
                  <p className="text-white/80 text-sm">Book Anytime, Anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <p className="text-primary-600 italic text-lg md:text-xl font-semibold">
                Easy Booking
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Book Your Ticket</span>
              <br />
              <span className="text-primary-600">On Right Time & Place</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Aby Ticket is Rwanda's leading bus booking platform, connecting travelers across the country with safe, comfortable, and reliable transport services. Book your journey with confidence and travel in comfort.
            </p>

            {/* Booking Contact Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                {/* Phone Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>

                {/* Contact Info */}
                <div>
                  <p className="text-gray-600 text-sm mb-1">Book Your Ticket</p>
                  <a href="tel:+250788123456" className="text-primary-600 text-2xl font-bold hover:text-primary-700 transition-colors">
                    +250 788 123 456
                  </a>
                </div>
              </div>

              {/* Book Button */}
              <button className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Book Now
              </button>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">On-Time Service</p>
                  <p className="text-sm text-gray-600">Always punctual</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Safe Travel</p>
                  <p className="text-sm text-gray-600">Certified drivers</p>
                </div>
              </div>
            </div>

            {/* Extra Info Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-gradient-to-br from-primary-50 to-primary-50 rounded-xl p-4 text-center border border-primary-100">
                <p className="text-2xl font-bold text-primary-600 mb-1">50+</p>
                <p className="text-xs text-gray-600">Routes</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-50 rounded-xl p-4 text-center border border-primary-100">
                <p className="text-2xl font-bold text-primary-600 mb-1">24/7</p>
                <p className="text-xs text-gray-600">Support</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-50 rounded-xl p-4 text-center border border-primary-100">
                <p className="text-2xl font-bold text-primary-600 mb-1">5k+</p>
                <p className="text-xs text-gray-600">Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}