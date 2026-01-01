"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "../ui/button";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = newLocale;
      router.push(segments.join("/"));
    });
  };

  return (
    <Button
      variant={"link"}
      onClick={toggleLocale}
      disabled={isPending}
      className="text-base  flex items-center gap-1! text-white font-semibold hover:text-accent hover:no-underline transition-colors duration-300"
    >
      {locale === "en" ? (
        <span>العربية</span>
      ) : (
        <span>English</span>
      )}
      <ArrowUpRight className="size-5"/>
    </Button>
  );
};

export default LocaleSwitcher;
