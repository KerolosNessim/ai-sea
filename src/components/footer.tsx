import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaApple, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const icons = [
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
  },
  {
    name: "tiktok",
    icon: FaTiktok,
  },
];
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className=" py-10 relative space-y-10 mt-20">
      {/* blue shadow */}
      <Image
        src="/blue-shadow.svg"
        alt="shadow"
        width={300}
        height={300}
        className="absolute top-0 start-0"
      />
      {/* links */}
      <div className="container flex justify-between flex-wrap gap-4">
        {/* servises */}
        <div className="flex flex-col gap-4 border-e-2 grow ">
          <FooterHeader title={t("services.title")} />
          <ul className="flex flex-col gap-2">
            {(t.raw("services.list") as string[]).map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ul>
        </div>
        {/* links */}
        <div className="flex flex-col gap-4 border-e-2 grow">
          <FooterHeader title={t("links.title")} />
          <ul className="flex flex-col gap-2">
            {(t.raw("links.list") as string[]).map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ul>
        </div>
        {/* about */}
        <div className="flex flex-col gap-4 border-e-2 grow">
          <FooterHeader title={t("about.title")} />
          <ul className="flex flex-col gap-2">
            {(t.raw("about.list") as string[]).map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ul>
        </div>
        {/*   social */}
        <div className="flex flex-col gap-4 border-e-2 grow">
          <FooterHeader title={t("social.title")} />
          <ul className="flex flex-col gap-2">
            {(t.raw("social.list") as string[]).map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ul>
          <div className="flex gap-2">
            {icons.map((icon) => (
              <a
                key={icon.name}
                href="#"
                className="size-12 text-white bg-secondary hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center"
              >
                <icon.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        {/* app */}
        <div className="flex flex-col gap-4 grow">
          <FooterHeader title={t("app.title")} />
          <ul className="flex flex-col gap-2">
            {(t.raw("app.list") as string[]).map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ul>
          <div className="flex flex-col gap-2 ">
            <button
              dir="ltr"
              className=" p-3 flex items-center gap-2 text-white bg-blue-950 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              <FaApple className="size-8" />
              <div className="text-start">
                <p className="font-bold text-[8px]">download on The</p>
                <p className="font-bold ">App Store</p>
              </div>
            </button>
            <button
              dir="ltr"
              className="p-3 flex items-center gap-2 text-white bg-primary rounded-full hover:bg-secondary transition-colors duration-300"
            >
              <FaGoogle className="size-8" />
              <div className="text-start">
                <p className="font-bold text-[8px]">download on The</p>
                <p className="font-bold ">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* content  */}
      <div className="container py-10 border-t-2 flex items-center justify-between flex-wrap gap-4">
        <div>
          <Image
            src="/logo-footer.svg"
            alt="logo"
            width={500}
            height={500}
            className="w-45"
          />
          <p className="text-primary font-bold xl:max-w-[350px] leading-loose">
            {t("discroption")}
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <ul>
            <ListItem title={t("payment")} />
          </ul>
          <Image src="/payment.svg" alt="payment" width={500} height={500} />
        </div>
      </div>
      {/* copy */}
      <div className="container pt-10 border-t-2 flex items-center justify-between flex-wrap gap-4 text-gris font-semibold">
        <Link href={"/"} className="block">
          {t("terms")}
        </Link>
        <p className="text-bold">
          {t("copy")}
        </p>
        <Link href={"/"} className="block">
          {t("privacy")}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

const FooterHeader = ({ title }: { title: string }) => {
  return (
    <h2 className="font-bold text-primary lg:text-2xl text-lg  after:w-8 after:block after:h-1 after:rounded-full after:bg-accent after:mt-2  ">
      {title}
    </h2>
  );
};

const ListItem = ({ title }: { title: string }) => {
  return (
    <li className="font-semibold text-gris flex items-center gap-1 hover:text-primary">
      <ChevronLeft size={16} />
      <Link href={"/"} className="block">
        {title}
      </Link>
    </li>
  );
};
