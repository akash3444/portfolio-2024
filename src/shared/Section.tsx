import { cn } from "@/utils/lib";
import React, { ComponentProps, ElementType, FC, ReactNode } from "react";

interface SectionProps extends ComponentProps<"section"> {
  background?: "light" | "dark" | string;
  children?: ReactNode;
  component?: ElementType;
}

const Section: FC<SectionProps> = ({
  background = "light",
  className,
  children,
  component: Component = "section",
}) => {
  return (
    <Component
      className={cn({
        "bg-red-50": background === "light",
        "bg-slate-950": background === "dark",
        [background]: background !== "light" && background !== "dark",
      })}
    >
      <div className={cn("mx-auto max-w-6xl px-6 py-14 md:py-20", className)}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
