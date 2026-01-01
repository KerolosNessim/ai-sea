import { ChevronDown } from 'lucide-react';
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

type Props = {
    title: string;
}
const SocialLinks = ({ title }: Props) => {
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
  return (
    <div className="xl:flex hidden flex-col items-center gap-6  absolute top-1/2 -translate-y-1/2 end-0 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className=" font-bold -rotate-z-90">{title}</p>
        <ChevronDown />
      </div>
      {/* icons */}
      <div className="flex flex-col gap-2">
        {icons.map((icon) => (
          <a
            key={icon.name}
            href="#"
            className="size-12 bg-[#1b1b1c] hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center"
          >
            <icon.icon size={20} className="-rotate-z-90" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks