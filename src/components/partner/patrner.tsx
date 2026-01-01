import { useTranslations } from "next-intl";
import SectionHeader from "../section-header";
import { Marquee } from "../ui/marquee";
import PartnerCard from "./partner-card";

const Partner = () => {
  const t = useTranslations("partner");
  const partnerData = [
    "/partner-1.svg",
    "/partner-2.svg",
    "/partner-3.svg",
    "/partner-4.svg",
    "/partner-5.svg",
    "/partner-6.svg",
  ];
  return (
    <section className=" space-y-10">
      <div className="container">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          description={t("description")}
        />
      </div>
      <div dir="ltr">
        <Marquee  pauseOnHover className="[--duration:120s] ">
          {partnerData.map((partner) => (
            <PartnerCard key={partner} img={partner} />
          ))}
        </Marquee>
        <Marquee reverse  pauseOnHover className="[--duration:120s] ">
          {partnerData.map((partner) => (
            <PartnerCard key={partner} img={partner} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partner;
