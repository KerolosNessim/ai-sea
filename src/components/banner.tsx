import { useTranslations } from 'next-intl';
import { RiUserLine } from 'react-icons/ri';
import CustomLinkLight from './custom-link-light';

const Banner = () => {
  const t = useTranslations("banner");
  return (
    <div className="rounded-4xl bg-[linear-gradient(101.29deg,#274A90_0%,#000000_122.01%)] xl:p-20 p-12 text-white">
      <div className="space-y-4 text-center">
      <h3 className="font-bold max-xl:text-sm">{t("subtitle")}</h3>
      <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold">{t("title")}</h2>
      <p className="font-medium max-xl:text-sm xl:max-w-lg xl:leading-loose xl:mx-auto">{t("description")}</p>
      </div>
      <CustomLinkLight
        href="/"
        label={t("btn")}
        icon={<RiUserLine />}
        isRotate
        className="w-fit mt-10 mx-auto"
      />
    </div>
  );
}

export default Banner