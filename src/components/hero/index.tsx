import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSerch from "./hero-serch";
import SocialLinks from "./social-links";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className=' bg-[url("/hero.png")] h-svh bg-cover bg-center text-white'>
      <div className=" relative container flex flex-col justify-center items-start  h-full ">
        {/* main content */}
        <div className="flex flex-col xl:gap-6 gap-4 max-md:text-center">
          <h3 className="font-bold">{t("subtitle")}</h3>
          <h1 className="xl:text-5xl md:text-4xl text-3xl  font-bold xl:whitespace-pre-line xl:leading-20">
            {t("title")}
          </h1>
          <p className="text-lg text-[#BCBCBC] font-medium">
            {t("description")}
          </p>
          <HeroSerch search={t("search")} />
        </div>

        {/* reviews */}
        <div className=" flex items-center max-md:justify-center max-md:flex-col gap-4 self-end max-md:self-center absolute bottom-10    ">
          {/* reviews*/}
          <div className="flex items-center gap-2">
            <Image src="/reviews.png" alt="reviews" width={80} height={80} />
            <p className="text-sm font-medium">{t("reviews")}</p>
          </div>
          {/* rate */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star size={20} fill="#F0A400" stroke="#F0A400" />
              <span className=" font-bold">4.9</span>
            </div>
            <p className="text-sm font-medium">{t("rate")}</p>
          </div>
        </div>

        {/* follow */}
        <SocialLinks title={t("follow")} />
      </div>
    </section>
  );
};

export default Hero;
