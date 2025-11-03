import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 py-6 px-4 md:py-24">
      <div className="mx-auto max-w-8xl md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Bus Image */}
          <div className="relative order-2 lg:order-1 lg:h-[700px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop"
                alt={t('faq.busAlt')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-8 left-8 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-600 text-xl">✱</span>
                <span className="text-primary-600 font-bold text-sm md:text-base tracking-wide uppercase">
                  {t('faq.subtitle')}
                </span>
              </div>
              <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                {t('faq.title')}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {activeIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-primary-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-900" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
