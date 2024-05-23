import { cn } from "@/utils/lib";
import { ComponentProps, FC } from "react";

const Copyright: FC<ComponentProps<"p">> = ({ className, ...props }) => {
  return (
    <p
      className={cn("text-center leading-loose text-slate-300", className)}
      {...props}
    >
      Copyright &copy; {new Date().getFullYear()} Akash.
      All&nbsp;Rights&nbsp;Reserved.
    </p>
  );
};

export default Copyright;
