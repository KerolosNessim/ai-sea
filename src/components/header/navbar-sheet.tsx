import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { Menu, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

type link={
    href:string,
    label:string,
    Icon:LucideIcon
}
type NavbarSheetProps = {
  links: link[]
  locale:string
}
const NavbarSheet = ({links,locale}:NavbarSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-gris size-10 rounded-full xl:hidden ">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={locale === "ar" ? "right" : "left"}>
        <SheetHeader>
          <SheetTitle >            
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={150}
              className="bg-black mx-auto p-6 rounded-xl"
            />
          </Link>
          </SheetTitle>
          <SheetDescription asChild>
            <ul className="flex flex-col gap-4 mt-6 items-center">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors duration-300">
                    <link.Icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
