import React, { useState } from "react";
import { Bus, Users, Award, Heart, MapPin, Clock, Shield, Star, TrendingUp, CheckCircle } from "lucide-react";
import Header from "../../components/header";
import TestimonialsSlider from "../../components/home/testimony";
import VideoHeroSection from "../../components/home/MeetPeopleSection";
import image1 from '../../assets/bus/image1.jpg'
import image2 from '../../assets/bus/image1.jpeg'
import image3 from '../../assets/bus/image3.jpg'

export default function AbyTicketAboutPage() {
  const [activeTab, setActiveTab] = useState('vision');

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "We adhere to Rwanda's strict road safety standards with regular vehicle inspections, professional drivers trained in defensive driving, and real-time GPS monitoring for all journeys."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Punctual Service",
      description: "Our schedules are designed with Rwanda's traffic patterns in mind, ensuring on-time departures from key hubs like Nyabugogo Bus Station in Kigali."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Focus",
      description: "24/7 support in Kinyarwanda, English, and French, with amenities like comfortable seating and Wi-Fi on select routes."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sustainable Innovation",
      description: "Pioneering electric bus trials in partnership with Rwanda's green transport initiatives, reducing emissions on popular routes."
    }
  ];

  const handleDisplayImage = () => {
    switch (activeTab) {
      case 'vision':
        return image3;
      case 'approach':
        return image1;
      case 'mission':
        return image2;
      default:
        return image3;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header path={'About Us'} title={'About Us'} />

      {/* Vision Mission Section */}
      <div className="px-4 md:px-12 py-16 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary-600 text-2xl">✱</span>
              <p className="text-primary-600 text-base font-semibold uppercase tracking-wider">
                Our Story
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Connecting Rwanda's Communities<br />Through Reliable Bus Travel
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
                    Leading Rwanda's Transport Revolution
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Founded in 2018, Aby Ticket envisions a Rwanda where seamless, sustainable bus travel connects every corner of the country. Aligned with Vision 2050, we aim to integrate cutting-edge technology like intelligent transportation systems and electric vehicles to make inter-city travel efficient, eco-friendly, and accessible for all Rwandans and visitors.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Nationwide coverage serving over 50,000 passengers monthly</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Pioneering green initiatives with electric bus pilots on Kigali-Musanze routes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Digital innovation for real-time tracking and contactless payments</p>
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
                    Safe, Affordable Journeys Across Rwanda
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our mission is to provide reliable public bus services that bridge Rwanda's urban and rural areas. Regulated by RURA, we operate extensive routes from Kigali to destinations like Musanze for Volcano National Park visits, Rubavu on Lake Kivu, and Huye in the south, ensuring safe and punctual travel for commuters, tourists, and families.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Road Safety Compliance</h5>
                        <p className="text-gray-700">Adhering to RTDA standards with axle load controls and regular safety audits.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Extensive Network</h5>
                        <p className="text-gray-700">Covering all provinces with scheduled services to major towns and border points.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Heart className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Community-Oriented</h5>
                        <p className="text-gray-700">Affordable fares and partnerships with local cooperatives for inclusive transport.</p>
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
                    Blending Tech with Rwandan Hospitality
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We combine Rwanda's renowned efficiency with modern innovations. Our fleet of over 40 buses features data-driven route planning inspired by Kigali's smart transport systems, ensuring optimal schedules while our staff provides warm, professional service rooted in Umuganda community spirit.
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
                  src={handleDisplayImage()}
                  alt={`Illustration for ${activeTab}`}
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
              As a proud Rwandan company, we're dedicated to elevating public transport standards with safety, innovation, and nationwide connectivity.
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
        <div className=" mx-auto bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Bus className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore Rwanda?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers using Aby Ticket for safe journeys to Rwanda's stunning destinations, from Kigali's vibrant streets to the misty mountains of Musanze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book A Ticket Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Explore Routes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};