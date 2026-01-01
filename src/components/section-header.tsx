import { cn } from "@/lib/utils";
import React from "react";

type props = {
  title: string;
  subtitle: string;
  description: string;
  variant?: "default" | "center";
  children?: React.ReactNode;
};

const SectionHeader = ({
  title,
  subtitle,
  description,
  variant="center",
  children,
}: props) => {
  return (
    <div
      className={cn(
        "space-y-4 ",
        variant === "center" && "text-center",
        variant === "default" && "text-start",
        "max-xl:text-center relative"
      )}
    >
      <h3 className="font-bold max-xl:text-sm">
        {subtitle}
      </h3>
      <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold">
        {title}
        
      </h2>
      <p className="text-gris font-medium max-xl:text-sm">
        {description}
      </p>
      {children ?? null}
    </div>
  );
};

export default SectionHeader;
