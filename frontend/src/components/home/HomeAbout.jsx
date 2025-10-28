import React from 'react';

export default function AbyTicketAbout() {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-16">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dynamic Grid Layout */}
          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-4 gap-4 h-[700px]">
              {/* Large Bus Image - Takes 2 columns, 2 rows */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=800&fit=crop"
                  alt="Modern bus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Card - 1 column, 2 rows */}
              <div className="col-span-1 row-span-2 bg-gradient-to-br from-emerald-600 to-green-500 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="text-white mb-3">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-4xl font-bold mb-1">5000+</h3>
                <p className="text-white text-sm font-medium text-center">Happy Travelers</p>
              </div>

              {/* Bus Interior - 2 columns, 2 rows */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
                  alt="Comfortable bus interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bus on Road - 1 column, 2 rows */}
              <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=800&fit=crop"
                  alt="Bus traveling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-400 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-2xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="text-gray-900 space-y-6">
            <div>
              <p className="text-sm md:text-base font-light tracking-wider mb-3 text-emerald-600 uppercase">
                About Aby Ticket
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Safe & Comfortable Travel At Great Prices, Only For{' '}
                <span className="text-emerald-600">Smart Travelers.</span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-600">
              <p className="text-base md:text-lg leading-relaxed">
                Aby Ticket is Rwanda's premier bus booking platform, connecting travelers to destinations across the country with comfort, safety, and reliability.
              </p>
             
              <p className="text-base md:text-lg leading-relaxed">
                We partner with the best bus operators in Rwanda, ensuring every journey meets our high standards for safety and comfort. Our modern fleet features comfortable seating, air conditioning, and professional drivers dedicated to your safety.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                More than just a booking service, we've created a seamless travel experience where families connect, business thrives, and every journey becomes hassle-free.
              </p>
            </div>

            {/* Feature Card */}
            <div className="flex items-start gap-4 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=200&fit=crop"
                    alt="VIP Bus Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 bg-emerald-600 text-white text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  VIP
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium VIP Service
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience luxury travel with extra legroom, Wi-Fi, and refreshments on select routes.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">50+</h4>
                <p className="text-sm text-gray-600 mt-1">Routes</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">24/7</h4>
                <p className="text-sm text-gray-600 mt-1">Support</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">100%</h4>
                <p className="text-sm text-gray-600 mt-1">Safe</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-transparent border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 font-medium text-base">
                View All Routes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}