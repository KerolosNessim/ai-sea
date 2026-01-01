"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaPlus, FaTimes, FaWhatsapp } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { Button } from "./ui/button";
import { div } from "motion/react-client";
import Image from "next/image";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: SiGooglemeet,
      link: "#",
      label: "meet",
      color: "text-blue-500",
    },
    {
      icon: FaWhatsapp,
      link: "#",
      label: "whatsapp",
      color: "text-green-500",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                <Image src="/avatar.jpg" alt="logo" width={100} height={100} className="rounded-full size-14" />
              </motion.div>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1b1b1c]  rounded-full size-14  flex items-center justify-center hover:scale-110 transition-transform"
                  title={s.label}
                >
                  <s.icon size={20} className={s?.color} />
                </motion.a>
              ))}
            </>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setOpen(!open)}
          className="bg-white text-secondary hover:bg-secondary hover:text-white size-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {open ? <FaTimes /> : <FaPlus />}
        </Button>
      </div>
    </div>
  );
}
