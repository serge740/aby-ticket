import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock,
  Send, ArrowUp, Globe, ChevronDown
} from 'lucide-react';
import { changeLanguage } from '../i18n';
import Logo from '../assets/bus/logo.png';
import { NavLink } from 'react-router-dom';

export default function ModernAbyTicketFooter() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'rw', name: 'Kinyarwanda', flag: 'RW' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Footer Links with Labels & Paths
  const footerLinks = [
    { path: '/', translationKey: 'footer.home' },
    { path: '/about-us', translationKey: 'footer.aboutUs' },
    { path: '/help', translationKey: 'footer.help' },
    { path: '/faq', translationKey: 'footer.faq' },
    { path: '/how-to-book', translationKey: 'footer.howtoBook' },
    // { path: '/destinations', translationKey: 'footer.destinations' },
    // { path: '/contact-us', translationKey: 'footer.contact' }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10">
        {/* Main Footer Grid */}
        <div className="max-w-8xl mx-auto px-6 py-16 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <div className="space-y-6">
              <NavLink to="/" className="flex items-center">
                <img src={Logo} alt="AbyTicket Logo" className="h-16 w-24 object-cover scale-125 object-cover" />
              </NavLink>
              <p className="text-gray-400 leading-relaxed text-sm">{t('footer.tagline')}</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: 'https://facebook.com/abyticket' },
                  { icon: Twitter, href: 'https://twitter.com/abyticket' },
                  { icon: Instagram, href: 'https://instagram.com/abyticket' },
                  { icon: Mail, href: 'mailto:info@abyticket.rw' }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 hover:border-transparent hover:scale-110 transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                     
                      className={({ isActive }) =>
`text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group ${isActive ? 'text-primary-400 !translate-x-0' : ''}`
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {t(link.translationKey)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                {t('footer.mainOffice')}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">{t('footer.address')}</p>
                    <a href="https://maps.google.com/?q=KN+4+Ave,+Kigali" target="_blank" rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm inline-flex items-center gap-1 transition-colors">
                      {t('footer.viewMap')} →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all">
                    <Phone className="w-5 h-5 text-primary-400" />
                  </div>
                  <a href="tel:+250792888980" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.phone')}
                  </a>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-400">{t('footer.weekdays')}</p>
                    <p className="text-gray-400">{t('footer.weekends')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                {t('footer.newsletter')}
              </h4>
              <p className="text-gray-400 text-sm mb-4">{t('footer.newsletterDesc')}</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all text-sm"
                  required
                />
                <button type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              {t('footer.copyright')} <span className="text-primary-400">{t('footer.abyTicket')}</span> - {t('footer.allRights')}
            </p>
            <div className="flex items-center gap-6">
              <NavLink
                to="/privacy"
                className={({ isActive }) => `text-gray-500 hover:text-primary-400 transition-colors text-sm ${isActive ? 'text-primary-400' : ''}`}
              >
                {t('footer.privacyPolicy')}
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) => `text-gray-500 hover:text-primary-400 transition-colors text-sm ${isActive ? 'text-primary-400' : ''}`}
              >
                {t('footer.terms')}
              </NavLink>

              {/* Language Selector */}
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm">
                  <Globe className="w-4 h-4 text-primary-400" />
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                {langOpen && (
                  <div className="absolute bottom-full mb-2 right-0 bg-slate-900 border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[180px]">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { changeLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left text-sm ${i18n.language === lang.code ? 'bg-white/10 text-primary-400' : 'text-gray-400'}`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300 z-50 group flex items-center justify-center"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}

