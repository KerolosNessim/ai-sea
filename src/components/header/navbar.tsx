"use client"
import { Link } from "@/i18n/navigation";
import { Activity, CircleDollarSign, LockKeyhole, MailMinus, Menu, Pentagon, ShieldBan, Tag } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import SearchDialog from "./search-dialog";
import LocaleSwitcher from "./local-swithcer";
import NavbarSheet from "./navbar-sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const t = useTranslations()
  const locale = useLocale()
  const NAVLINKS = [
    {
      href: "/",
      label: t("navlinks.home"),
      Icon: Pentagon,
    },
    {
      href: "/solutions",
      label: t("navlinks.solutions"),
      Icon: Menu,
    },
    {
      href: "/",
      label: t("navlinks.sea"),
      Icon: Tag,
    },
    {
      href: "/",
      label: t("navlinks.tech"),
      Icon: LockKeyhole,
    },
    {
      href: "/packages",
      label: t("navlinks.packages"),
      Icon: CircleDollarSign,
    },
    {
      href: "/",
      label: t("navlinks.about"),
      Icon: Activity,
    },
    {
      href: "/",
      label: t("navlinks.contact"),
      Icon: MailMinus,
    },
  ];
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* lable */}
      <div className="flex items-center justify-center gap-2 font-semibold  bg-white p-2">
        <ShieldBan  size={16} fill="#5e5e5e" />
        <p className="text-primary">{t("navlinks.lable.title")}</p>
        <Link href="/" className="text-secondary">
          {t("navlinks.lable.btn")}
        </Link>
      </div>
      {/* nav */}
      <div className={cn("bg-transparent py-4 ",isScroll && "bg-black")}>
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={150}/>
          </Link>
          {/* nav */}
          <nav className=" max-xl:hidden">
            <ul className="flex items-center gap-6">
              {NAVLINKS.map((navlink,index) => (
                <li key={index}>
                  <Link href={navlink.href} className="flex items-center gap-1 text-sm font-semibold text-white hover:text-accent transition-colors duration-300 ">
                    <navlink.Icon size={16} />
                    <span>{navlink.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* search */}
          <div className="flex items-center gap-2">
          <SearchDialog  title={t("navlinks.search.title")} placeholder={t("navlinks.search.placeholder")}/>
            <LocaleSwitcher />
            <NavbarSheet links={NAVLINKS} locale={locale}/>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Navbar