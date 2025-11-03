import React, { lazy, useEffect } from "react";
import Header from "../../components/header";
import { t } from "i18next";
// import { useLocation, useParams } from 'react-router-dom';
const ContentWriteServices = lazy(() =>
  import("../../components/home/contentWrite")
);

const ServicePage = () => {
  useEffect(() => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);
  return (
    <section className=" text-center min-h-screen">
      <Header title={t('servicesPage.header.badge')} path={t('servicesPage.header.badge')} />

      <div className="flex flex-col justify-center w-[100%]  items-center gap-10">
        <ContentWriteServices />
    
      </div>
</section>
  );
};

export default ServicePage;