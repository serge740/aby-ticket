import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";

export default function TopBar({ onLanguageChange }) {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
    { code: "rw", name: "Kinyarwanda", flag: "RW" },
  ];

  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    onLanguageChange?.(code);
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white text-sm shadow-md">
      <div className="max-w-8xl mx-auto px-4 md:px-12 py-2">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex gap-1.5 text-xs lg:text-sm">
            <span className="flex items-center gap-1.5 ">
              <span className="opacity-90">{t("email")}:</span>
              <a href="mailto:info@abyticket.com" className="hover:underline font-medium">
                info@abyticket.com
              </a>
            </span>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <span className="opacity-90">{t("phone")}:</span>
              <a href="tel:+250792888980" className="hover:underline font-medium">
                +250 792888980
              </a>
            </span>
          </div>

          {/* Center: Ads sentence */}
          <div className="text-center flex-1 text-sm font-medium">
            🎉 Get 20% off on your first booking! 🎉
          </div>

          {/* Right: Language Dropdown + Social */}
          <div className="flex items-center justify-end gap-4">
            {/* Language Dropdown */}
            <div className="relative inline-block">
              <select
                value={selectedLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-white/20 hover:bg-white/30 text-white pl-8 pr-9 py-1 rounded-lg text-sm appearance-none cursor-pointer transition-all backdrop-blur-sm font-medium focus:outline-none"
                style={{ border: "none" }}
              >
                {languages.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-primary-700 text-white flex items-center gap-2"
                  >
                    <ReactCountryFlag
                      countryCode={lang.flag}
                      svg
                      style={{ width: "16px", height: "12px", marginRight: "8px" }}
                    />
                    {lang.name}
                  </option>
                ))}
              </select>
              {/* Language Icon */}
              <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2">
                <Globe size={12} className="text-white" />
              </div>
              {/* Flag icon */}
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <ReactCountryFlag
                  countryCode={languages.find((l) => l.code === selectedLang)?.flag}
                  svg
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/30">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform hover:text-pink-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-3">
          {/* Row 1: Contact Info */}
          <div className="flex flex-col gap-1.5 text-xs">
            <span>
              <span className="opacity-90">{t("email")}:</span>{" "}
              <a href="mailto:info@abyticket.com" className="hover:underline font-medium">
                info@abyticket.com
              </a>
            </span>
            <span>
              <span className="opacity-90">{t("phone")}:</span>{" "}
              <a href="tel:+250788123456" className="hover:underline font-medium">
                +250 788 123 456
              </a>
            </span>
          </div>

          {/* Row 2: Ads sentence */}
          <div className="text-center text-xs font-medium">
            🎉 Get 20% off on your first booking! 🎉
          </div>

          {/* Row 3: Language + Social */}
          <div className="flex items-center justify-between gap-3">
            {/* Language Dropdown */}
            <div className="relative inline-block flex-shrink-0">
              <select
                value={selectedLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-white/20 hover:bg-white/30 text-white pl-7 pr-8 py-1.5 rounded-lg text-xs appearance-none cursor-pointer transition-all backdrop-blur-sm font-medium focus:outline-none"
                style={{ border: "none" }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-primary-700 text-white">
                    {lang.name}
                  </option>
                ))}
              </select>
              {/* Language Icon */}
              <div className="pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2">
                <Globe size={14} className="text-white" />
              </div>
              {/* Flag icon */}
              <div className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2">
                <ReactCountryFlag
                  countryCode={languages.find((l) => l.code === selectedLang)?.flag}
                  svg
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform hover:text-pink-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform hover:text-primary-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
