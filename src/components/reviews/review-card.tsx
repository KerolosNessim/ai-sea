import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  const t  = useTranslations("reviews");
  return (
    <div className="bg-background p-10 rounded-4xl shadow-lg flex flex-col gap-8 h-full">
      <div className="flex items-center gap-4 justify-between">
        <Image src="/team.png" alt="member" width={50} height={50} />
        <p className="text-primary font-bold">10 / 10 / 2026</p>
      </div>
      <p className="text-gris font-medium text-xl leading-loose">
        {t("reviewBody")}
      </p>
      <div className="flex flex-col  mt-auto">
        <h3 className="font-bold text-2xl">{t("reviewPerson")}</h3>
        <p className="text-lg ">—AI Engineer</p>
      </div>
    </div>
  );
};

export default ReviewCard;
