import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, PropsWithChildren } from "react";

export const Subtitle: FC<PropsWithChildren<ComponentProps<"h6">>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn("block uppercase tracking-[3px] text-primary", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Subtitle;
