import { Link } from "@/i18n/navigation";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
  isRotate?: boolean;
  className?: string;
};

const CustomLink = ({ href, label, icon, isRotate=false, className }: Props) => {
    const locale = useLocale();
  return (
    <Link
      href={href}
      className={cn("bg-primary  text-white p-2 h-12 flex items-center gap-2 rounded-full hover:gap-3 transition-all duration-300", className)}
    >
      <span className="size-8 bg-white text-primary rounded-full flex items-center justify-center">
        {icon}
      </span>
      <span className="text-sm font-semibold">{label}</span>
      {locale === "en" ? (
        <HiOutlineArrowRight className={`size-5 ${isRotate && "-rotate-45"}`} />
      ) : (
        <HiOutlineArrowLeft className={`size-5 ${isRotate && "rotate-45"}`} />
      )}
    </Link>
  );
};

export default CustomLink;
