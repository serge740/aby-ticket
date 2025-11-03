import React, { useState } from 'react';
import { Bus, MapPin, CreditCard, Shield, Clock, Headphones, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: t('servicesPage.services.onlineBooking.title'),
      subtitle: t('servicesPage.services.onlineBooking.subtitle'),
      icon: CreditCard,
      description: t('servicesPage.services.onlineBooking.description'),
      features: t('servicesPage.services.onlineBooking.features', { returnObjects: true }),
    },
    {
      title: t('servicesPage.services.interCityCar.title'),
      subtitle: t('servicesPage.services.interCityCar.subtitle'),
      icon: Bus,
      description: t('servicesPage.services.interCityCar.description'),
      features: t('servicesPage.services.interCityCar.features', { returnObjects: true }),
    },
    {
      title: t('servicesPage.services.carRental.title'),
      subtitle: t('servicesPage.services.carRental.subtitle'),
      icon: Shield,
      description: t('servicesPage.services.carRental.description'),
      features: t('servicesPage.services.carRental.features', { returnObjects: true }),
    },
    {
      title: t('servicesPage.services.ussdBooking.title'),
      subtitle: t('servicesPage.services.ussdBooking.subtitle'),
      icon: Headphones,
      description: t('servicesPage.services.ussdBooking.description'),
      features: t('servicesPage.services.ussdBooking.features', { returnObjects: true }),
    },
    {
      title: t('servicesPage.services.realTimeTracking.title'),
      subtitle: t('servicesPage.services.realTimeTracking.subtitle'),
      icon: MapPin,
      description: t('servicesPage.services.realTimeTracking.description'),
      features: t('servicesPage.services.realTimeTracking.features', { returnObjects: true }),
    },
    {
      title: t('servicesPage.services.corporateSolutions.title'),
      subtitle: t('servicesPage.services.corporateSolutions.subtitle'),
      icon: Clock,
      description: t('servicesPage.services.corporateSolutions.description'),
      features: t('servicesPage.services.corporateSolutions.features', { returnObjects: true }),
    },
  ];

  const testimonials = t('servicesPage.testimonials', { returnObjects: true });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-8 w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10 px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
              {t('servicesPage.header.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            {t('servicesPage.header.title')}
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {t('servicesPage.header.highlight')}
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-8xl mx-auto leading-relaxed">
            {t('servicesPage.header.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-full bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-primary-200">
                  {/* Icon Container */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm mb-5">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <button className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:gap-3 transition-all duration-300 text-sm group">
                      <span>{t('servicesPage.services.learnMore')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%)',
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {t('servicesPage.testimonialsSection.title')}
              </h3>
              <p className="text-primary-100">
                {t('servicesPage.testimonialsSection.subtitle')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-primary-100 text-sm">{testimonials[currentTestimonial].role}</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-primary-300">Star</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial ? 'bg-white w-8' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}