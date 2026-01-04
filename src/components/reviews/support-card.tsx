import { Link } from "@/i18n/navigation";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useLocale } from "next-intl";
import { SiGooglemeet } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SupportCard = () => {
  const locale = useLocale();
  const t = useTranslations("reviews");
  const socials = [
    {
      icon: SiGooglemeet,
      link: "#",
      label: "meet",
      color: "text-blue-500",
    },
    {
      icon: FaWhatsapp,
      link: "#",
      label: "whatsapp",
      color: "text-green-500",
    },
  ];
  return (
    <div className="bg-[linear-gradient(101.29deg,#274A90_0%,#000000_122.01%)] lg:p-10 p-6 rounded-4xl h-full text-white flex flex-col lg:justify-between max-lg:gap-6">
      <div className="flex items-center justify-between">
        <BiMessageRoundedDetail size={36} />
        <Link
          href="/"
          className="bg-white text-primary p-2 flex items-center gap-2 rounded-full hover:gap-3 transition-all duration-300"
        >
          <span className="text-sm font-semibold">{t("btn")}</span>
          {locale === "en" ? (
            <HiOutlineArrowRight className="size-4 -rotate-45" />
          ) : (
            <HiOutlineArrowLeft className="size-4 rotate-45" />
          )}
        </Link>
      </div>
      <div className="flex lg:items-end justify-between lg:flex-row flex-col max-lg:items-center max-lg:gap-4">
        <div className="flex flex-col gap-4  max-lg:text-center">
          <p className="text-sm font-medium">{t("contentSubTitle")}</p>
          <h2 className="text-3xl font-bold">
            {t("contentTitle")}
          </h2>
          <p className="text-sm font-medium leading-loose">
            {t("contentDescription")}
            <br />
            {t("contentDescription2")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full size-12"
          />
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              className="bg-white/20  rounded-full size-12  flex items-center justify-center hover:scale-110 transition-transform"
              title={s.label}
            >
              <s.icon size={20} className={s?.color} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SupportCard;
