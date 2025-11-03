// FILE: components/BookingProcess.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Smartphone, Monitor, Phone, CheckCircle2 } from 'lucide-react';
import Image from '../../assets/bus/hero_thumb_2.png'

export default function BookingProcess() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(0);

  const accordionItems = [
    {
      key: 'choose',
      icon: CheckCircle2,
      number: '01'
    },
    {
      key: 'book',
      icon: Smartphone,
      number: '02'
    },
    {
      key: 'travel',
      icon: CheckCircle2,
      number: '03'
    }
  ];

  const bookingMethods = [
    { icon: Monitor, label: 'Website', color: 'bg-primary-100 text-primary-600' },
    { icon: Smartphone, label: 'Mobile App', color: 'bg-green-100 text-green-600' },
    { icon: Phone, label: '*334#', color: 'bg-purple-100 text-purple-600' }
  ];

  const toggleAccordion = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-primary-50/30 min-h-screen flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-8xl px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
              <span className="text-primary-700 font-semibold text-sm uppercase tracking-wider">
                {t('bookingProcess.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {t('bookingProcess.title')}
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t('bookingProcess.subtitle')}
            </p>

            {/* Booking Methods */}
            <div className="flex flex-wrap gap-3 mb-10">
              {bookingMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-xl ${method.color} font-semibold text-sm`}>
                    <Icon className="w-4 h-4" />
                    <span>{method.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Accordion */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              {accordionItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center gap-4 p-6 text-left hover:bg-slate-50 transition-colors"
                    >
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
                        activeItem === index 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {item.number}
                      </div>
                      
                      {/* Title */}
                      <span className={`flex-1 text-xl font-bold transition-colors ${
                        activeItem === index ? 'text-primary-600' : 'text-slate-900'
                      }`}>
                        {t(`bookingProcess.steps.${item.key}.title`)}
                      </span>
                      
                      {/* Icon */}
                      {activeItem === index ? (
                        <ChevronUp className="w-6 h-6 text-primary-600 transition-transform flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-slate-400 transition-transform flex-shrink-0" />
                      )}
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pl-20 text-slate-600 leading-relaxed">
                        {t(`bookingProcess.steps.${item.key}.content`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[720px]">
                <img 
                  src={Image}
                  alt="Bus booking experience"
                  className="w-full h-[100%] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 max-w-xs z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">
                      {t('bookingProcess.trustBadge.title').split(' ')[0]}
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                      {t('bookingProcess.trustBadge.title').split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">
                  {t('bookingProcess.trustBadge.subtitle')}
                </p>
                
                <div className="flex items-center -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Passenger"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img 
                      src="https://randomuser.me/api/portraits/men/45.jpg" 
                      alt="Passenger"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Passenger"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    +99K
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}