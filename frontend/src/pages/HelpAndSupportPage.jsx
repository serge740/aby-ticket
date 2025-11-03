import React from 'react';
import {
  HelpCircle, Phone, Mail, MapPin, Clock, MessageCircle, 
  Globe, Car, CreditCard, Bus, Check, ChevronRight, Star,Smartphone,FileText
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';

const HelpAndSupportPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const faqs = t('helpSupportPage.faqs', { returnObjects: true });
  const contact = t('helpSupportPage.contact', { returnObjects: true });
  const channels = t('helpSupportPage.channels', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header title={t('helpSupportPage.header.title')} path={t('helpSupportPage.header.path')} />

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-10 md:py-14">
        <div className=" mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <HelpCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold text-xs uppercase tracking-widest">
              {t('helpSupportPage.hero.badge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('helpSupportPage.hero.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('helpSupportPage.hero.description')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-16 pb-16">
        <div className=" mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
            {t('helpSupportPage.faqSection.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {faq.icon === 'bus' && <Bus className="w-5 h-5 text-primary-600" />}
                    {faq.icon === 'phone' && <Smartphone className="w-5 h-5 text-primary-600" />}
                    {faq.icon === 'credit' && <CreditCard className="w-5 h-5 text-primary-600" />}
                    {faq.icon === 'car' && <Car className="w-5 h-5 text-primary-600" />}
                    {faq.icon === 'track' && <MapPin className="w-5 h-5 text-primary-600" />}
                    {faq.icon === 'cancel' && <Clock className="w-5 h-5 text-primary-600" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                    {faq.question}
                  </h3>
                </div>

                <div className="text-sm text-gray-600 space-y-2.5 ml-13">
                  {faq.answer.map((part, i) => {
                    if (part.type === 'text') {
                      return <p key={i} className="leading-relaxed">{part.content}</p>;
                    }
                    if (part.type === 'list') {
                      return (
                        <ul key={i} className="space-y-1.5">
                          {part.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (part.type === 'steps') {
                      return (
                        <ol key={i} className="space-y-1.5 list-decimal list-inside">
                          {part.steps.map((step, j) => (
                            <li key={j} className="pl-1">{step}</li>
                          ))}
                        </ol>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 md:px-16 py-16 bg-primary-50">
        <div className=" mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
            {contact.title}
          </h2>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <p className="text-base text-gray-600 mb-8 max-w-2xl">
              {contact.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call / WhatsApp</div>
                  <div className="text-primary-600">{contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-primary-600">{contact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
                <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Office</div>
                  <div className="text-gray-600">{contact.office}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
                <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-600">{contact.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support Channels */}
      <section className="px-4 md:px-16 py-16">
        <div className=" mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
            {channels.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.items.map((channel, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {channel.icon === 'chat' && <MessageCircle className="w-7 h-7 text-primary-600" />}
                  {channel.icon === 'email' && <Mail className="w-7 h-7 text-primary-600" />}
                  {channel.icon === 'phone' && <Phone className="w-7 h-7 text-primary-600" />}
                  {channel.icon === 'article' && <FileText className="w-7 h-7 text-primary-600" />}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{channel.title}</h3>
                <p className="text-xs text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="px-4 md:px-16 py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className=" mx-auto text-center text-white">
          <Star className="w-14 h-14 mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t('helpSupportPage.feedback.title')}
          </h2>
          <p className="text-sm md:text-base mb-6 text-primary-100 max-w-xl mx-auto">
            {t('helpSupportPage.feedback.description')}
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-all"
          >
            {t('helpSupportPage.feedback.cta')}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HelpAndSupportPage;