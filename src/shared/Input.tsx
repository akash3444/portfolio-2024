import { cn } from "@/utils/lib";
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  fullWidth?: boolean;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, fullWidth, error, ...props },
  ref,
) => {
  return (
    <div>
      <input
        ref={ref}
        className={cn(
          "h-12 rounded border px-3 py-1 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500",
          { "w-full": fullWidth },
          { "focus:ring-destructive": !!error },
          className,
        )}
        {...props}
      />
      {!!error && (
        <span className="text-destructive mt-1.5 inline-block text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default forwardRef(Input);
