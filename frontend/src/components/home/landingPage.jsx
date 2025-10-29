import React, { useState } from 'react';
import { Bus, MapPin, Calendar, Search, ArrowUpRight } from 'lucide-react';

export default function AbyTicketLanding() {
  const [formData, setFormData] = useState({
    busType: '',
    departureLocation: '',
    departureDate: '',
    arrivalLocation: '',
    returnDate: ''
  });

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image from Unsplash */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
      </div>

   
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <div className="text-gray-400 text-sm tracking-[0.4em] uppercase font-semibold">
            ABY TICKET
          </div>
        </div>

        {/* Welcome Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 backdrop-blur-sm">
            <span className="text-blue-400 text-xl">✦</span>
            <span className="text-blue-400 text-sm font-medium">Welcome To Aby Ticket</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-6 leading-tight max-w-5xl">
          Looking to save more on<br />your bus ticket?
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-base md:text-lg text-center max-w-3xl mb-10 leading-relaxed">
          Whether you're traveling across Rwanda for business, visiting family, or exploring our beautiful country,<br />
          we offer reliable and comfortable bus services to all major destinations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-20">
          <button className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30">
            Book A Ticket
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 group-hover:bg-blue-800 transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-all duration-300 shadow-lg">
            Learn More
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-7xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              
              {/* Bus Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  <Bus size={20} />
                  Bus Type
                </label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                  value={formData.busType}
                  onChange={(e) => setFormData({...formData, busType: e.target.value})}
                >
                  <option value="">Choose Bus Type</option>
                  <option value="express">Express</option>
                  <option value="luxury">Luxury</option>
                  <option value="standard">Standard</option>
                  <option value="vip">VIP</option>
                </select>
              </div>

              {/* Departure Location */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  <MapPin size={20} />
                  Departure Location
                </label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                  value={formData.departureLocation}
                  onChange={(e) => setFormData({...formData, departureLocation: e.target.value})}
                >
                  <option value="">From Location</option>
                  <option value="kigali">Kigali</option>
                  <option value="musanze">Musanze</option>
                  <option value="huye">Huye</option>
                  <option value="rubavu">Rubavu</option>
                  <option value="muhanga">Muhanga</option>
                </select>
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  <Calendar size={20} />
                  Departure Date
                </label>
                <input 
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.departureDate}
                  onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                />
              </div>

              {/* Arrival Location */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  <MapPin size={20} />
                  Arrival Location
                </label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                  value={formData.arrivalLocation}
                  onChange={(e) => setFormData({...formData, arrivalLocation: e.target.value})}
                >
                  <option value="">To Location</option>
                  <option value="kigali">Kigali</option>
                  <option value="musanze">Musanze</option>
                  <option value="huye">Huye</option>
                  <option value="rubavu">Rubavu</option>
                  <option value="muhanga">Muhanga</option>
                </select>
              </div>

              {/* Return Date with Search Button */}
              <div className="flex items-end gap-3">
                <div className="space-y-2 flex-1">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                    <Calendar size={20} />
                    Return Date
                  </label>
                  <input 
                    type="date"
                    placeholder="mm/dd/yyyy"
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                  />
                </div>
                
                {/* Search Button */}
                <button className="w-14 h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-lg shadow-blue-600/30">
                  <Search size={24} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}