import React, { useState } from "react";
import { Bus, Users, Award, Heart, MapPin, Clock, Shield, Star, TrendingUp, CheckCircle } from "lucide-react";
import Header from "../../components/header";
import TestimonialsSlider from "../../components/home/testimony";
import VideoHeroSection from "../../components/home/MeetPeopleSection";

export default function AbyTicketAboutPage() {
  const [activeTab, setActiveTab] = useState('vision');

  const stats = [
    {
      icon: <Award className="w-12 h-12 text-primary-600" />,
      number: "5+",
      label: "Years",
      subtitle: "Serving Rwanda"
    },
    {
      icon: <Bus className="w-12 h-12 text-primary-600" />,
      number: "50+",
      label: "Bus Routes",
      subtitle: "Across Rwanda"
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      number: "100k+",
      label: "Happy Travelers",
      subtitle: "Safe journeys"
    },
    {
      icon: <Star className="w-12 h-12 text-primary-600" />,
      number: "4.8",
      label: "Rating",
      subtitle: "Customer satisfaction"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Your safety is our priority with modern, well-maintained buses and professional drivers."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Service",
      description: "Reliable schedules and punctual departures to get you where you need to be."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Care",
      description: "Dedicated support team ready to assist you 24/7 with your travel needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Easy online booking and digital tickets for a seamless travel experience."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header path={'About Us'} title={'About Us'} />

      {/* Stats Section */}
      <div className="relative -mt-20 px-4 md:px-12 pb-16 z-30">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>

                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-600">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Mission Section */}
      <div className="px-4 md:px-12 py-16 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary-600 text-2xl">✱</span>
              <p className="text-primary-600 text-base font-semibold uppercase tracking-wider">
                Vision Mission
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Driving excellence and innovation<br />in bus travel services
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab('approach')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'approach'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              Our Approach
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {activeTab === 'vision' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">✱</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">Our Vision</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    Pioneering excellence in<br />bus travel services
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the bus travel process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Our customers are our top priority</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Quality is at the heart of everything we do</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Every vehicle meets the highest standards</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">✱</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">Our Mission</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    Connecting Rwanda,<br />One Journey at a Time
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    At Aby Ticket, our mission is to provide safe, comfortable, and reliable bus transportation services across Rwanda. We're committed to making travel accessible to everyone while maintaining the highest standards of customer service and vehicle maintenance.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Safe Travel</h5>
                        <p className="text-gray-700">Professional drivers and well-maintained buses ensure your safety.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Wide Coverage</h5>
                        <p className="text-gray-700">Extensive routes connecting major cities and towns across Rwanda.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Heart className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Customer First</h5>
                        <p className="text-gray-700">Dedicated support and comfortable travel experience for all passengers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">✱</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">Our Approach</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    Technology Meets<br />Traditional Service
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We combine modern technology with traditional hospitality to create the best travel experience. Our digital booking platform makes reservations easy, while our experienced team ensures every journey is comfortable and safe.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <div key={index} className="p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                        <div className="w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center text-white mb-3">
                          {value.icon}
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h5>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
                  alt="Modern bus"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-4 md:px-12 py-16 bg-gray-50">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">Aby Ticket?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your journey across Rwanda comfortable, safe, and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <VideoHeroSection />
      <TestimonialsSlider />

      {/* CTA Section */}
      <div className="px-4 md:px-12 py-16 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Bus className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Travel with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your next journey with Aby Ticket and experience comfortable, reliable bus travel across Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book A Ticket Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View Routes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
};