import { NorthStartIcon } from "@/components/Icons";
import { cn } from "@/utils/lib";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("block hover:no-underline", className)}>
      <h2 className="flex items-start gap-2 text-2xl font-semibold">
        <NorthStartIcon className="mt-0.5 h-6 w-6 align-baseline text-red-500" />
        Akash
      </h2>
    </Link>
  );
};

export default Logo;
