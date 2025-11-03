import React from 'react';
import {
  Globe, Smartphone, Car, Building2, MessageCircle, Phone, Mail, Check, ChevronRight,
  Ticket
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import image1 from '../assets/bus/image1.jpg'
import image2 from '../assets/bus/image1.jpeg'
import image3 from '../assets/bus/image3.jpg'

const HowToBookPage = () => {
  const { t } = useTranslation();

  const steps = t('howToBookPage.steps', { returnObjects: true });
  const support = t('howToBookPage.support', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header title={t('howToBookPage.header.title')} path={t('howToBookPage.header.path')} />

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-10 md:py-14">
        <div className=" mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
            <Ticket className="w-5 h-5 text-primary-600" />
            <span className="text-primary-600 font-semibold text-xs uppercase tracking-widest">
              {t('howToBookPage.hero.badge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('howToBookPage.hero.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howToBookPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Booking Methods */}
      <section className="px-4 md:px-16 pb-16">
        <div className=" mx-auto space-y-16">

          {/* 1. Online Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {steps[0].title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-6">{steps[0].subtitle}</p>

                <ol className="space-y-3 mb-6">
                  {steps[0].list.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="font-bold text-primary-600 mt-0.5">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="flex flex-wrap gap-3">
                  {steps[0].features.map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
                <img src={image1} className='max-h-[41vh] rounded-lg w-full object-cover' alt="" />
            </div>
          </div>

          {/* 2. USSD Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {steps[1].title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-6">{steps[1].subtitle}</p>

                <ol className="space-y-3 mb-6">
                  {steps[1].list.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="font-bold text-primary-600 mt-0.5">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="flex flex-wrap gap-3">
                  {steps[1].features.map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-1 flex justify-center">
              <img src={image2} className='max-h-[37vh] rounded-lg w-full object-cover' alt="" />
            </div>
          </div>

          {/* 3. Private Ride */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                    <Car className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {steps[2].title}
                  </h2>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  {steps[2].list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {steps[2].features.map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
             <img src={image3} className='max-h-[30vh] rounded-lg w-full object-cover' alt="" />
            </div>
          </div>

          {/* 4. Corporate */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <div className=" mx-auto text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">
                  {steps[3].title}
                </h2>
              </div>
              <p className="text-sm md:text-base mb-6 text-primary-100 max-w-2xl mx-auto md:mx-0">
                {steps[3].description}
              </p>
              <ul className="space-y-2 mb-8 text-sm max-w-xl mx-auto md:mx-0">
                {steps[3].list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:corporate@abyticket.rw"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-bold text-sm hover:bg-gray-100 transition-all"
              >
                {steps[3].cta}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Support CTA */}
      <section className="px-4 py-14 bg-gray-100">
        <div className=" mx-auto text-center">
          <MessageCircle className="w-14 h-14 text-primary-600 mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {support.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href={`tel:${support.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full font-semibold text-sm hover:bg-primary-700 transition-all"
            >
              <Phone className="w-4 h-4" />
              {support.call}
            </a>
            <a
              href={`mailto:${support.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-800 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all"
            >
              <Mail className="w-4 h-4" />
              {support.emailText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToBookPage;