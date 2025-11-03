import React from "react";
import { ArrowRight, ArrowUpRight, Bus, Monitor, Smartphone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("services.bookTicket"),
      description: t("services.bookTicketDesc"),
      icon: Bus,
      featured: true,
    },
    {
      id: 2,
      title: t("services.trackCar"),
      description: t("services.trackCarDesc"),
      icon: Monitor,
      featured: false,
    },
    {
      id: 3,
      title: t("services.onlineOfflineBooking"),
      description: t("services.onlineOfflineBookingDesc"),
      icon: Smartphone,
      featured: false,
    },
    {
      id: 4,
      title: t("services.ussdBooking"),
      description: t("services.ussdBookingDesc"),
      icon: MapPin,
      featured: false,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-8xl md:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary-600 text-2xl">🚍</span>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              {t("services.sectionTitle")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t("services.sectionHeader")}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            {t("services.sectionDescription")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                rounded-3xl p-8 transition-all duration-300 transform hover:scale-105
                bg-white shadow-lg hover:shadow-xl
                ${service.featured ? "border-2 border-primary-600" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gray-100 hover:bg-primary-600 transition-colors">
                <service.icon
                  className={`text-gray-900 hover:text-white`}
                  size={32}
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-8 text-gray-600">{service.description}</p>

              {/* Arrow Button */}
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                  ${service.featured ? "bg-primary-600 hover:bg-primary-700 text-white" : "bg-gray-200 hover:bg-primary-600 text-gray-800 hover:text-white"}`}
              >
                {service.featured ? (
                  <ArrowRight size={20} strokeWidth={2.5} />
                ) : (
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-8">
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            {t("services.bottomDescription")}
          </p>

          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30">
            {t("services.viewAll")}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700 group-hover:bg-primary-800 transition-colors">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
