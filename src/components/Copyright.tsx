import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";

const Copyright: FC<ComponentProps<"p">> = ({ className, ...props }) => {
  return (
    <p
      className={cn(
        "text-center leading-loose text-muted-foreground",
        className,
      )}
      {...props}
    >
      Copyright &copy; {new Date().getFullYear()} Akash.
      All&nbsp;Rights&nbsp;Reserved.
    </p>
  );
};

export default Copyright;
