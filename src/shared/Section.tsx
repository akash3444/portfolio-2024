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
  ...props
}) => {
  return (
    <Component
      className={cn({
        "bg-background": background === "light",
        "bg-background dark": background === "dark",
        [background]: background !== "light" && background !== "dark",
      })}
      {...props}
    >
      <div className={cn("mx-auto max-w-6xl px-6 py-14 md:py-20", className)}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
