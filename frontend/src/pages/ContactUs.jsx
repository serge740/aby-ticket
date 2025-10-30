import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowUpRight, Twitter, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Header from '../components/header';

export default function AbyTicketContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    // Optional phone validation: if provided, basic check for Rwandan format (starts with +250 and 12 chars total)
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Replace with your EmailJS credentials
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log('Success:', result.text);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, (error) => {
        console.log('Error:', error.text);
        // Handle error, e.g., setErrorMessage
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title="Contact Us" path="contact" />
      
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
        
        {/* Subheading - Improved for Rwanda-specific transportation context */}
        <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Have questions about bus bookings across Rwanda's beautiful landscapes? Need assistance with your inter-city journey from Kigali to Musanze or beyond?<br />
          Our dedicated team is here to support your travel needs 24/7, ensuring smooth and reliable transportation anywhere in Rwanda.
        </p>
        
        {/* Contact Cards & Form Container */}
        <div className=" px-4 md:px-8 lg:px-16 mx-auto">
          
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
          
          {/* Social Links - New Addition */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://x.com/abyticket" className="text-primary-600 hover:text-primary-700 transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://facebook.com/abyticket" className="text-primary-600 hover:text-primary-700 transition-colors">
              <Facebook size={28} />
            </a>
            {/* Add more as needed, e.g., Instagram, WhatsApp */}
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
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    aria-required="true"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-semibold text-sm">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    aria-required="true"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                {/* Phone - Masking removed, now a regular input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-semibold text-sm">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+250788123456"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
                
                {/* Subject */}
                <div className="space-y-2" hidden>
                  <label htmlFor="subject" className="text-gray-700 font-semibold text-sm">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3  bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none cursor-pointer"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    aria-required="true"
                  >
                   
                    <option value="booking" selected>Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-700 font-semibold text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    aria-required="true"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-700 group-hover:bg-primary-800 transition-colors">
                      <Send size={16} />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-full transition-all duration-300"
                  >
                    Back to Home
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>
                </div>
                {success && <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>}
              </form>
            </div>
            
            {/* Map Section - Updated with real embed for approximate location */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.508!2d30.058888!3d-1.950057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca67bffffffff%3A0x7b0a5d6b0a0b0a0b!2sKN%204%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1727600000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aby Ticket Office Location in Kigali, Rwanda"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Operating Hours - Fixed last border */}
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
              <div className="flex justify-between items-center py-2 border-b border-gray-300 md:border-b-0">
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