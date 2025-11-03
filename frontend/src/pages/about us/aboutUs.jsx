import React, { useState } from "react";
import { Bus, Users, Award, Heart, MapPin, Clock, Shield, Star, TrendingUp, CheckCircle } from "lucide-react";
import Header from "../../components/header";
import TestimonialsSlider from "../../components/home/testimony";
import VideoHeroSection from "../../components/home/MeetPeopleSection";
import { useTranslation } from "react-i18next";
import image1 from '../../assets/bus/image1.jpg'
import image2 from '../../assets/bus/image1.jpeg'
import image3 from '../../assets/bus/image3.jpg'

export default function AbyTicketAboutPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('vision');
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("aboutUsPage.values.safetyFirst.title"),
      description: t("aboutUsPage.values.safetyFirst.description"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("aboutUsPage.values.punctualService.title"),
      description: t("aboutUsPage.values.punctualService.description"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("aboutUsPage.values.customerFocus.title"),
      description: t("aboutUsPage.values.customerFocus.description"),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("aboutUsPage.values.sustainableInnovation.title"),
      description: t("aboutUsPage.values.sustainableInnovation.description"),
    }
  ];
  const handleDisplayImage = () => {
    switch (activeTab) {
      case 'vision':
        return image3;
      case 'approach':
        return image1;
      case 'mission':
        return image2;
      default:
        return image3;
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header path={t("aboutUsPage.header.path")} title={t("aboutUsPage.header.title")} />
      {/* Vision Mission Section */}
      <div className="px-4 md:px-12 py-16 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary-600 text-2xl">*</span>
              <p className="text-primary-600 text-base font-semibold uppercase tracking-wider">
                {t("aboutUsPage.ourStory")}
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t("aboutUsPage.connectingCommunities")}
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              {t("aboutUsPage.tabs.vision")}
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              {t("aboutUsPage.tabs.mission")}
            </button>
            <button
              onClick={() => setActiveTab('approach')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'approach'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
              }`}
            >
              {t("aboutUsPage.tabs.approach")}
            </button>
          </div>
          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {activeTab === 'vision' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">*</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">{t("aboutUsPage.vision.title")}</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("aboutUsPage.vision.heading")}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {t("aboutUsPage.vision.description")}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{t("aboutUsPage.vision.points.nationwide")}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{t("aboutUsPage.vision.points.greenInitiatives")}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{t("aboutUsPage.vision.points.digitalInnovation")}</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'mission' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">*</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">{t("aboutUsPage.mission.title")}</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("aboutUsPage.mission.heading")}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {t("aboutUsPage.mission.description")}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{t("aboutUsPage.mission.points.safetyCompliance.title")}</h5>
                        <p className="text-gray-700">{t("aboutUsPage.mission.points.safetyCompliance.description")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{t("aboutUsPage.mission.points.extensiveNetwork.title")}</h5>
                        <p className="text-gray-700">{t("aboutUsPage.mission.points.extensiveNetwork.description")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <Heart className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{t("aboutUsPage.mission.points.communityOriented.title")}</h5>
                        <p className="text-gray-700">{t("aboutUsPage.mission.points.communityOriented.description")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'approach' && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary-600 text-xl">*</span>
                    <h3 className="text-primary-600 font-semibold uppercase tracking-wider">{t("aboutUsPage.approach.title")}</h3>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("aboutUsPage.approach.heading")}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {t("aboutUsPage.approach.description")}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.slice(0,2).map((value, index) => (
                      <div key={index} className="p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                        <div className="w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center text-white mb-3">
                          {value.icon}
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h5>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={handleDisplayImage()}
                  alt={t("aboutUsPage.imageAlt", { tab: activeTab })}
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="px-4 md:px-12 py-16 bg-gray-50">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("aboutUsPage.whyChoose.heading")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("aboutUsPage.whyChoose.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VideoHeroSection />
      <TestimonialsSlider />
      {/* CTA Section */}
      <div className="px-4 md:px-12 py-16 bg-white">
        <div className=" mx-auto bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Bus className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("aboutUsPage.cta.heading")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("aboutUsPage.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {t("aboutUsPage.cta.bookNow")}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                {t("aboutUsPage.cta.exploreRoutes")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};