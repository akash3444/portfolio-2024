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
        <h3 className="mt-6 text-4xl">Transform Your Online Presence</h3>
        <p className="mt-4">
          I offer a comprehensive range of services designed to elevate your
          website and provide a seamless user experience.
        </p>

        <ul className="mt-8 space-y-4 text-slate-300">
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Expert Technical Skills
          </li>
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Enhanced Performance
          </li>
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            Maintenance and Optimization
          </li>
        </ul>
      </div>

      <GiftStartbust className="absolute bottom-0 left-6 translate-y-1/2 text-red-500 xl:left-0" />
    </Section>
  );
};

export default Features;
