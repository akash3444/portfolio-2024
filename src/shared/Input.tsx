import { cn } from "@/utils/lib";
import React, { ComponentProps, FC } from "react";

interface InputProps extends ComponentProps<"input"> {
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({ className, fullWidth, ...props }) => {
  return (
    <input
      className={cn(
        "h-12 rounded border px-3 py-1 focus:outline-none focus:ring-2",
        { "w-full": fullWidth },
        className,
      )}
      {...props}
    />
  );
};

export default Input;
