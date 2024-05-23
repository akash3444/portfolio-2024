import Section from "@/shared/Section";
import { AbstractHelpBuild, PhoneAndAccessories } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";
import Link from "next/link";

const HelpBuildProject = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-20">
        <AbstractHelpBuild className="h-80 w-full md:h-auto md:max-w-lg" />
        <div>
          <Subtitle>Akash Moradiya</Subtitle>
          <h3 className="mt-6 text-4xl text-slate-950">
            Help Build Your Dream Project
          </h3>
          <p className="mt-4 text-slate-800">
            Transform your vision into reality with expert support and
            innovative solutions. As a specialized front-end engineer, I provide
            the expertise you need to bring your digital project to life.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-4 text-slate-800">
            <li>
              Custom-tailored strategies to meet your unique business goals.
            </li>
            <li>
              Leveraging React.js and Next.js for modern, responsive web
              applications.
            </li>
            <li>
              Ongoing collaboration and maintenance to ensure your
              project&apos;s success.
            </li>
          </ul>
          <Link href="#contact">
            <Button variant="contained" className="mt-8">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default HelpBuildProject;
