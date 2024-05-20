import { cn } from "@/utils/lib";
import React, { ComponentProps, FC, PropsWithChildren } from "react";

export const Subtitle: FC<PropsWithChildren<ComponentProps<"h6">>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h6
      className={cn("uppercase tracking-[3px] text-red-500", className)}
      {...props}
    >
      {children}
    </h6>
  );
};

export default Subtitle;
