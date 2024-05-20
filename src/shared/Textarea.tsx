import { cn } from "@/utils/lib";
import React, { ComponentProps, FC } from "react";

interface TextareaProps extends ComponentProps<"textarea"> {
  fullWidth?: boolean;
}

const Textarea: FC<TextareaProps> = ({ className, fullWidth, ...props }) => {
  return (
    <textarea
      className={cn(
        "rounded border p-3 focus:outline-none focus:ring-2",
        { "w-full": fullWidth },
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
