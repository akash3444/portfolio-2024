import { NorthStartIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("block hover:no-underline", className)}>
      <h2 className="flex items-start gap-2 text-2xl font-semibold text-foreground">
        <NorthStartIcon className="mt-0.5 h-6 w-6 align-baseline text-primary" />
        Akash
      </h2>
    </Link>
  );
};

export default Logo;
