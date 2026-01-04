import { useTranslations } from "next-intl";
import React from "react";
import SectionHeader from "./section-header";
import Image from "next/image";
import CustomLink from "./custom-link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Selutions = () => {
  const t = useTranslations("selutions");

  return (
    <section className="container space-y-10">
      <SectionHeader
        title={t("title")}
        description={t("description")}
        subtitle={t("subtitle")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        <div className="relative lg:col-span-3 bg-background lg:p-10 p-10 rounded-4xl flex flex-col lg:gap-20">
          <Image src="/s-icon-1.svg" alt="icon" width={50} height={50} />
          <Image
            src="/sol-1.png"
            alt="icon"
            width={500}
            height={500}
            className="absolute top-4 end-4 w-90 max-lg:hidden"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{t.raw("cards")[0].title}</h3>
            <p className="text-gris font-medium  ">
              {t.raw("cards")[0].description}
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-2 bg-background lg:p-10 p-10 rounded-4xl flex flex-col lg:gap-20">
          <Image src="/s-icon-2.svg" alt="icon" width={50} height={50} />
          <Image
            src="/sol-2.png"
            alt="icon"
            width={500}
            height={500}
            className="absolute top-1 end-1 w-50 max-lg:hidden"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{t.raw("cards")[1].title}</h3>
            <p className="text-gris font-medium  ">
              {t.raw("cards")[1].description}
            </p>
          </div>
        </div>
        <div className=" lg:col-span-2 bg-background lg:p-10 p-10 rounded-4xl flex flex-col lg:gap-20">
          <Image src="/s-icon-3.svg" alt="icon" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{t.raw("cards")[2].title}</h3>
            <p className="text-gris font-medium  ">
              {t.raw("cards")[2].description}
            </p>
          </div>
        </div>
        <div className=" lg:col-span-2 bg-background lg:p-10 p-10 rounded-4xl flex flex-col lg:gap-20">
          <Image src="/s-icon-4.svg" alt="icon" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{t.raw("cards")[4].title}</h3>
            <p className="text-gris font-medium  ">
              {t.raw("cards")[4].description}
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 bg-background lg:p-10 p-10 rounded-4xl flex flex-col lg:gap-20 overflow-hidden">
          <Image src="/s-icon-5.svg" alt="icon" width={50} height={50} />
          <Image
            src="/phone.png"
            alt="icon"
            width={500}
            height={500}
            className="absolute  end-10 w-96 max-lg:hidden "
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{t.raw("cards")[3].title}</h3>
            <p className="text-gris font-medium  ">
              {t.raw("cards")[3].description}
            </p>
          </div>
        </div>
      </div>
      <CustomLink href={"/"} label={t("btn")} icon={<HiBars3BottomRight />} className="w-fit mx-auto" />
    </section>
  );
};

export default Selutions;
