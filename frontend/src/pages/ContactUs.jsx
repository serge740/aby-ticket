import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import Header from '../components/header';

export default function AbyTicketContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title={"Contact Us"} path={"contact"} />
      
      {/* Main Content */}
      <div className="px-4 py-16">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-gray-600 text-sm tracking-[0.4em] uppercase font-semibold">
            ABY TICKET
          </div>
        </div>

        {/* Welcome Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 border border-primary-200">
            <span className="text-primary-600 text-xl">✦</span>
            <span className="text-primary-600 text-sm font-medium">Get In Touch</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-gray-900 text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
          We'd love to hear<br />from you
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Have questions about your booking? Need assistance with your journey?<br />
          Our team is here to help you 24/7.
        </p>

        {/* Contact Cards & Form Container */}
        <div className=" px-16 mx-auto">
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Sun from 6am to 10pm</p>
              <a href="tel:+250788123456" className="text-primary-600 hover:text-primary-700 font-medium">
                +250 788 123 456
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">We'll respond within 24 hours</p>
              <a href="mailto:info@abyticket.rw" className="text-primary-600 hover:text-primary-700 font-medium">
                info@abyticket.rw
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">Come say hello at our office</p>
              <p className="text-primary-600 font-medium">
                Kigali, Rwanda<br />
                KN 4 Ave, Nyarugenge
              </p>
            </div>

          </div>

          {/* Two Column Layout: Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                  <p className="text-gray-600 text-sm">We'll get back to you soon</p>
                </div>
              </div>

              <div className="space-y-4">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    placeholder="+250 788 123 456"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm">
                    Subject *
                  </label>
                  <select 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none cursor-pointer"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm">
                    Message *
                  </label>
                  <textarea 
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button 
                    onClick={handleSubmit}
                    className="group flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30"
                  >
                    Send Message
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-700 group-hover:bg-primary-800 transition-colors">
                      <Send size={16} />
                    </div>
                  </button>

                  <button 
                    type="button"
                    className="group flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-full transition-all duration-300"
                  >
                    Back to Home
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={28} />
                  <div>
                    <h3 className="text-xl font-bold">Find Us in Rwanda</h3>
                    <p className="text-primary-100 text-sm">Our office location in Kigali</p>
                  </div>
                </div>
              </div>
              <div className="h-96 lg:h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.04695815147!2d30.01885405!3d-1.9440726999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe74e4a9e8a2fd69e!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rwanda Map Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Operating Hours */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-primary-600" size={28} />
              <h3 className="text-gray-900 text-2xl font-bold">Operating Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span>Monday - Friday</span>
                <span className="text-primary-600 font-semibold">6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span>Saturday</span>
                <span className="text-primary-600 font-semibold">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span>Sunday</span>
                <span className="text-primary-600 font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span>Emergency Support</span>
                <span className="text-primary-600 font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}