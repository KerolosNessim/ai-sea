import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import CustomLink from "../custom-link";
import SectionHeader from "../section-header";
import TeamSecrch from "./team-secrch";
import TeamCard from "./team-card";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useTranslations } from "next-intl";

const TeamSlider = () => {
  const locale = useLocale();
  const  t = useTranslations("team");
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: `${locale === "en" ? "ltr" : "rtl"}`,
      }}
      className="space-y-10"
    >
      {/* header */}
      <div className=" container  flex items-center justify-between max-xl:flex-col">
        {/* header */}
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          variant="default"
        >
          <Image
            src="/marker.svg"
            alt="marker"
            width={180}
            height={62}
            className="absolute top-1/2 end-[15%] -translate-y-1/2 -z-10 max-xl:hidden"
          />
        </SectionHeader>
        {/* slider */}
        <div className="flex items-center gap-2 max-md:flex-col max-xl:gap-4">
          <CustomLink
            href="/"
            label={t("btn")}
            icon={<RiUserLine />}
            isRotate={true}
          />
          <TeamSecrch placeholder={t("search")} />
          <div
            className={cn("flex gap-2", locale === "ar" && "flex-row-reverse")}
          >
            <CarouselPrevious className="translate-0 static size-12 bg-[#F2F2F2] hover:bg-primary hover:text-white " />
            <CarouselNext className="translate-0 static size-12 bg-[#F2F2F2] hover:bg-primary hover:text-white " />
          </div>
        </div>
      </div>
      {/* slider */}
      <CarouselContent className="container  mx-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="xl:basis-1/5 md:basis-1/3 basis-[70%] first:pr-0"
          >
            <TeamCard  profile={t("profile")}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* button */}
      <div>
        <CustomLink
        href="/"
        label={t("more")}
        icon={<HiMiniBars3CenterLeft />}
        className="mx-auto w-fit "
      />
    </div>
    </Carousel>
  );
};

export default TeamSlider;
