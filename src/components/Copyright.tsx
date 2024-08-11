import { cn } from "@/utils/lib";
import { ComponentProps, FC } from "react";

const Copyright: FC<ComponentProps<"p">> = ({ className, ...props }) => {
  return (
    <p
      className={cn(
        "text-muted-foreground text-center leading-loose",
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
