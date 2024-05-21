import React from "react";
import { DesktopIcon, PlusIcon, TerminalIcon } from "./Icons";
import Button from "@/shared/Button";
import Link from "next/link";
import Section from "@/shared/Section";
import Subtitle from "./Typography";

const services = [
  {
    name: "UI to Web",
    icon: DesktopIcon,
    description:
      "Transforming wireframes into dynamic web interfaces and developing websites using React.js/Next.js, along with UI libraries like Tailwind CSS and Shadcn UI.",
  },
  {
    name: "Development",
    icon: TerminalIcon,
    description:
      "Specializing in React.js and Next.js, I build robust, responsive web applications that perform seamlessly across devices. Let's turn your ideas into reality with top-notch code.",
  },
];

const Services = () => {
  return (
    <Section id="services">
      <Subtitle className="text-center">Services</Subtitle>
      <h3 className="mt-6 text-center text-4xl text-slate-950">
        How I Can Help You
      </h3>

      <div className="mt-10 divide-y divide-slate-300 rounded-lg border border-slate-300 md:flex md:divide-x md:divide-y-0">
        {services.map(({ name, icon: Icon, description }) => (
          <div key={name} className="px-7 py-12">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white">
                <Icon />
              </div>
              <h4 className="text-2xl font-semibold text-slate-950">{name}</h4>
            </div>
            <p className="mt-6 leading-7 text-slate-700">{description}</p>

            <Button className="mt-4 px-0 text-red-600">
              <PlusIcon className="h-5 w-5" />
              Learn More
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-slate-900">
        Want more services? <Link href="#">Explore Now</Link>
      </p>
    </Section>
  );
};

export default Services;
