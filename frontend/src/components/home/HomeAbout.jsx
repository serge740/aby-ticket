import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { value: '50K+', label: t('about.stats.passengers') },
    { value: '15+', label: t('about.stats.routes') },
    { value: '98%', label: t('about.stats.satisfaction') },
    { value: '24/7', label: t('about.stats.support') }
  ];

  const features = [
    {
      icon: Shield,
      title: t('about.features.safety.title'),
      description: t('about.features.safety.description')
    },
    {
      icon: Clock,
      title: t('about.features.punctuality.title'),
      description: t('about.features.punctuality.description')
    },
    {
      icon: Users,
      title: t('about.features.comfort.title'),
      description: t('about.features.comfort.description')
    }
  ];

  const highlights = [
    t('about.highlights.modern'),
    t('about.highlights.drivers'),
    t('about.highlights.tracking'),
    t('about.highlights.support')
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-50 py-24 px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-8xl mx-auto relative z-10 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wider">
              {t('about.badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side - Visual Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-700">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" 
                  alt="Modern bus interior"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-sm text-slate-600">{t('about.rating')}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">{t('about.ratingDescription')}</p>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=400&q=80" 
                alt="Bus exterior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {t('about.whyChoose')}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('about.description')}
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-105">
                {t('about.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {t('about.commitment')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}