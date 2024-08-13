import { cn } from "@/lib/utils";
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

interface TextareaProps extends ComponentProps<"textarea"> {
  fullWidth?: boolean;
  error?: string;
}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { className, fullWidth, error, ...props },
  ref,
) => {
  return (
    <div>
      <textarea
        ref={ref}
        className={cn(
          "rounded border p-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500",
          { "w-full": fullWidth },
          { "focus:ring-destructive": !!error },
          className,
        )}
        {...props}
      />
      {!!error && (
        <span className="mt-1.5 inline-block text-sm text-destructive">
          {error}
        </span>
      )}
    </div>
  );
};

export default forwardRef(Textarea);
