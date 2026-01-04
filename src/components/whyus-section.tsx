import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import CustomLink from "./custom-link";
import { useTranslations } from "next-intl";

const WhyUsSection = () => {
  const t = useTranslations("whyus");
  return (
    <section className="container flex items-center gap-20  max-lg:flex-col max-lg:gap-10 ">
      <Image
        src="/hero.png"
        alt="blue-shadow"
        width={500}
        height={500}
        className="rounded-4xl lg:w-1/2 w-full  lg:h-[60vh] h-[40vh] object-cover"
      />
      {/* content */}
      <div className="space-y-3 relative max-lg:text-center">
        <Image
          src="/yellow-shadow.svg"
          alt="yellow-shadow"
          width={150}
          height={150}
          className="absolute top-0 start-0"
        />
        <p className="font-semibold text-xs">{t("subtitle")}</p>
        <h2 className="font-bold text-2xl">{t("title")}</h2>
        <p className="text-gris">{t("description")}</p>
        <CustomLink
          href=""
          label={t("btn")}
          icon={<RiUserLine />}
          isRotate
          className="w-fit max-lg:mx-auto "
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
