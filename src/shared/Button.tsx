import { cn } from "@/utils/lib";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, FC } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 py-2.5 px-6 font-medium",
  {
    variants: {
      variant: {
        contained: "rounded bg-red-500 hover:bg-red-600 transition-colors",
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant }), {
        "w-full": fullWidth,
        "pointer-events-none select-none opacity-50": props.disabled,
      })}
      {...props}
    />
  );
};

export default Button;
