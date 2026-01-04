import React from "react";
import SectionHeader from "./section-header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CustomLinkLight from "./custom-link-light";
import { RiUserLine } from "react-icons/ri";

const AppSection = () => {
  const t = useTranslations("app-section");
  return (
    <section className="space-y-10">
      <SectionHeader
        title={t("title")}
        subtitle={t("subtitle")}
        description={t("description")}
      />

      <div className=" rounded-4xl bg-[linear-gradient(101.29deg,#274A90_0%,#000000_122.01%)]">
        <div className="relative container h-[70vh] text-white flex items-center justify-between">
          {/* main content */}
          <div className="py-12 h-full flex flex-col justify-between ">
            <div className={"space-y-4   "}>
              <h3 className="font-bold max-xl:text-sm">
                {t("content.subtitle")}
              </h3>
              <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold">
                {t("content.title")}
              </h2>
              <p className="text-gris font-medium max-xl:text-sm">
                {t("content.description1")}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className=" xl:text-5xl md:text-4xl text-3xl whitespace-pre-line leading-relaxed">
                {t("content.description1")}
              </h3>
              <p>{t("content.description2")}</p>
            </div>
          </div>
          {/* image */}
          <div className="relative w-1/2 h-full overflow-hidden max-xl:hidden">
            <Image
              src="/iPhone.png"
              alt="app-section"
              fill
              className="w-[400px] absolute object-bottom "
            />
            <Image
              src="/iPhone.png"
              alt="app-section"
              fill
              className="w-[500px] object-bottom absolute translate-x-40 translate-y-40 "
            />
          </div>
          {/* button */}
          <CustomLinkLight
            href="/"
            label={t("content.btn")}
            icon={<RiUserLine />}
            isRotate
            className="absolute top-12 xl:end-0 md:end-6 end-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
