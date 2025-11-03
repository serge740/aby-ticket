import React, { useState } from 'react';
import {
  Bus, Ticket, CreditCard, Shield, Clock, Package, MessageSquare,
  ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Star
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';

const FAQPage = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = t('faqPage.sections', { returnObjects: true });

  const sectionIcons = {
    'Ticket': <Ticket className="w-6 h-6" />,
    'CreditCard': <CreditCard className="w-6 h-6" />,
    'Bus': <Bus className="w-6 h-6" />,
    'Package': <Package className="w-6 h-6" />,
    'MessageSquare': <MessageSquare className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header title={t('faqPage.header.title')} path={t('faqPage.header.path')} />

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-6 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
            <Bus className="w-4 h-4 text-primary-600" />
            <span className="text-primary-600 font-semibold text-xs uppercase tracking-widest">
              {t('faqPage.hero.badge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('faqPage.hero.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t('faqPage.hero.description')}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            {t('faqPage.hero.support')}
          </p>
        </div>
      </section>

      {/* FAQ Sections - 2 Column Grid */}
      <section className="px-4 md:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  mx-auto">
          {faqSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-6">
              {/* Section Header */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-sm">
                  {sectionIcons[section.icon] || <Bus className="w-6 h-6" />}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {section.questions.map((q, qIdx) => {
                  const globalIndex = sectionIdx * 100 + qIdx;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={qIdx}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition-shadow duration-200"
                    >
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full px-5 py-4 text-left flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start gap-2.5 flex-1">
                          <span className="text-primary-600 font-bold text-sm mt-0.5">
                            {q.number}.
                          </span>
                          <h3 className="font-medium text-gray-900 text-sm md:text-base leading-snug">
                            {q.question}
                          </h3>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 border-t border-gray-100">
                          <div className="pt-3 text-xs md:text-sm text-gray-600 space-y-2.5">
                            {q.answer.map((part, i) => {
                              if (part.type === 'text') {
                                return <p key={i} className="leading-relaxed">{part.content}</p>;
                              }
                              if (part.type === 'list') {
                                return (
                                  <ul key={i} className="space-y-1.5 ml-3">
                                    {part.items.map((item, j) => (
                                      <li key={j} className="flex items-start gap-2">
                                        <Star className="w-3.5 h-3.5 text-primary-600 mt-0.5 flex-shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                );
                              }
                              if (part.type === 'steps') {
                                return (
                                  <ol key={i} className="space-y-1.5 ml-3 list-decimal list-inside">
                                    {part.steps.map((step, j) => (
                                      <li key={j} className="pl-1 leading-snug">{step}</li>
                                    ))}
                                  </ol>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-4 py-14 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <MessageCircle className="w-14 h-14 mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t('faqPage.cta.title')}
          </h2>
          <p className="text-sm md:text-base mb-7 text-primary-100 max-w-xl mx-auto">
            {t('faqPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+250788123456"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all"
            >
              <Phone className="w-4 h-4" />
              {t('faqPage.cta.call')}
            </a>
            <a
              href="mailto:support@abyticket.rw"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              {t('faqPage.cta.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;