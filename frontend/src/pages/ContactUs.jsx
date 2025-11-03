import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowUpRight, Twitter, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Header from '../components/header';
import { useTranslation } from 'react-i18next';

export default function AbyTicketContact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contactPage.form.errors.name');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contactPage.form.errors.email');
    if (!formData.subject) newErrors.subject = t('contactPage.form.errors.subject');
    if (!formData.message.trim()) newErrors.message = t('contactPage.form.errors.message');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title={t('contactPage.header.title')} path={t('contactPage.header.path')} />

      {/* Main Content */}
      <div className="px-4 py-14 md:py-16">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-gray-600 text-sm tracking-[0.35em] uppercase font-semibold">
            {t('contactPage.logo')}
          </div>
        </div>

        {/* Welcome Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 border border-primary-200">
            <span className="text-primary-600 text-xl">Star</span>
            <span className="text-primary-600 text-sm font-medium">{t('contactPage.badge')}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-gray-900 text-3xl md:text-5xl font-bold text-center mb-10 leading-tight">
          {t('contactPage.heading')}
        </h1>

        {/* Contact Cards & Form */}
        <div className=" px-4 md:px-12 mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-1">{t('contactPage.cards.phone.title')}</h3>
              <p className="text-gray-600 text-sm mb-2">{t('contactPage.cards.phone.subtitle')}</p>
              <a href="tel:+250788123456" className="text-primary-600 hover:text-primary-700 font-medium text-base">
                {t('contactPage.cards.phone.number')}
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-1">{t('contactPage.cards.email.title')}</h3>
              <p className="text-gray-600 text-sm mb-2">{t('contactPage.cards.email.subtitle')}</p>
              <a href="mailto:info@abyticket.rw" className="text-primary-600 hover:text-primary-700 font-medium text-base">
                {t('contactPage.cards.email.address')}
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-1">{t('contactPage.cards.location.title')}</h3>
              <p className="text-gray-600 text-sm mb-2">{t('contactPage.cards.location.subtitle')}</p>
              <p className="text-primary-600 font-medium text-base">
                {t('contactPage.cards.location.address')}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://x.com/abyticket" className="text-primary-600 hover:text-primary-700 transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://facebook.com/abyticket" className="text-primary-600 hover:text-primary-700 transition-colors">
              <Facebook size={28} />
            </a>
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{t('contactPage.form.title')}</h2>
                  <p className="text-gray-600 text-sm">{t('contactPage.form.subtitle')}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-gray-700 font-medium text-sm">
                    {t('contactPage.form.labels.name')} *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('contactPage.form.placeholders.name')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-gray-700 font-medium text-sm">
                    {t('contactPage.form.labels.email')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contactPage.form.placeholders.email')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-gray-700 font-medium text-sm">
                    {t('contactPage.form.labels.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t('contactPage.form.placeholders.phone')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <input type="hidden" name="subject" value={formData.subject || 'General Inquiry'} />

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-gray-700 font-medium text-sm">
                    {t('contactPage.form.labels.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t('contactPage.form.placeholders.message')}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium text-base rounded-full transition-all shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.send')}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-700 group-hover:bg-primary-800">
                      <Send size={16} />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-base rounded-full transition-all"
                  >
                    {t('contactPage.form.back')}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>
                </div>
                {success && <p className="text-green-600 text-sm mt-3">{t('contactPage.form.success')}</p>}
              </form>
            </div>

            {/* Map */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={28} />
                  <div>
                    <h3 className="text-xl font-bold">{t('contactPage.map.title')}</h3>
                    <p className="text-primary-100 text-sm">{t('contactPage.map.subtitle')}</p>
                  </div>
                </div>
              </div>
              <div className="h-96 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.508!2d30.058888!3d-1.950057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca67bffffffff%3A0x7b0a5d6b0a0b0a0b!2sKN%204%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1727600000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contactPage.map.iframeTitle')}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-primary-600" size={28} />
              <h3 className="text-gray-900 text-xl font-bold">{t('contactPage.hours.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {t('contactPage.hours.days', { returnObjects: true }).map((day, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-300 last:border-b-0">
                  <span className="text-sm">{day.day}</span>
                  <span className="text-primary-600 font-medium text-sm">{day.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}