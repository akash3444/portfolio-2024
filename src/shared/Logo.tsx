import { NorthStartIcon } from "@/components/Icons";
import React from "react";

const Logo = () => {
  return (
    <h2 className="flex items-start gap-2 text-2xl font-semibold">
      <NorthStartIcon className="mt-0.5 h-6 w-6 align-baseline text-red-500" />
      Akash
    </h2>
  );
};

export default Logo;
