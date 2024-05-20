import Section from "@/shared/Section";
import React from "react";
import Subtitle from "./Typography";
import { FeaturesAbstract, GiftStartbust } from "./Abstracts";
import { CheckIcon } from "./Icons";

const Features = () => {
  return (
    <Section
      background="dark"
      className="relative flex flex-col gap-14 pb-32 md:flex-row-reverse md:items-center md:justify-between md:gap-20 md:pb-48 md:pt-32"
    >
      <FeaturesAbstract className="h-80 w-full md:h-auto md:max-w-md" />
      <div className="md:max-w-sm">
        <Subtitle>Features</Subtitle>
        <h3 className="mt-6 text-4xl">Give Your Site A New Look</h3>
        <p className="mt-4">
          Service range including technical skills, design, business
          understanding.
        </p>

        <ul className="mt-8 space-y-4 text-slate-300">
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Range including technical skills
          </li>
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Business understanding
          </li>
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Partner on the long run
          </li>
        </ul>
      </div>

      <GiftStartbust className="absolute bottom-0 left-6 translate-y-1/2 text-red-500 xl:left-0" />
    </Section>
  );
};

export default Features;
