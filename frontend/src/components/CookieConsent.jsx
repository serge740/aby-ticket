import React, { useState } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check localStorage on mount
  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      setIsVisible(false);
      if (consent !== 'accepted') {
        try {
          const savedPrefs = JSON.parse(consent);
          setPreferences(savedPrefs);
        } catch {
          // Invalid JSON, treat as declined
        }
      }
    }
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50"
        aria-label={t('cookieConsent.settingsLabel')}
      >
        <Cookie size={24} />
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 ">
      <div className=" p-5 w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Cookie className="text-primary-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {t('cookieConsent.title')}
                </h2>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={t('cookieConsent.closeLabel')}
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              {t('cookieConsent.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('cookieConsent.acceptAll')}
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                {t('cookieConsent.rejectAll')}
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors"
              >
                <Settings size={18} />
                {t('cookieConsent.customize')}
              </button>
            </div>
            <a
              href="/privacy"
              className="inline-block mt-4 text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              {t('cookieConsent.policyLink')}
            </a>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('cookieConsent.settingsTitle')}
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={t('cookieConsent.closeSettingsLabel')}
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('cookieConsent.preferences.necessary.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('cookieConsent.preferences.necessary.description')}
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('cookieConsent.preferences.analytics.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('cookieConsent.preferences.analytics.description')}
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('analytics')}
                  className="ml-4"
                  aria-label={t('cookieConsent.preferences.analytics.toggleLabel')}
                >
                  <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.analytics ? 'bg-primary-600 justify-end' : 'bg-gray-300 justify-start'
                  } px-1`}>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('cookieConsent.preferences.marketing.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('cookieConsent.preferences.marketing.description')}
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('marketing')}
                  className="ml-4"
                  aria-label={t('cookieConsent.preferences.marketing.toggleLabel')}
                >
                  <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.marketing ? 'bg-primary-600 justify-end' : 'bg-gray-300 justify-start'
                  } px-1`}>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('cookieConsent.savePreferences')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                {t('cookieConsent.acceptAll')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}