import Section from "@/shared/Section";
import { VersionControl } from "./Abstracts";
import {
  NextIcon,
  NextUiIcon,
  ReactIcon,
  ReduxIcon,
  ShadCnUiIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";
import Subtitle from "./Typography";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
        <VersionControl className="w-full shrink-0 md:w-1/2 md:md:max-w-lg" />
        <div>
          <Subtitle>Akash Moradiya</Subtitle>
          <h3 className="mt-6 text-4xl text-slate-950">
            Professional Web Developer
          </h3>
          <p className="mt-4 text-[17px] text-base leading-relaxed text-slate-600">
            I excel at transforming wireframes into polished, responsive web
            interfaces, leveraging modern UI libraries such as Tailwind CSS and
            Shadcn UI. My expertise also includes integrating APIs to ensure
            seamless and efficient web application functionality. Dedicated to
            delivering high-quality, scalable solutions, I am committed to
            enhancing user experiences through innovative web technologies.
          </p>

          <div className="mt-6">
            <h6 className="mb-2 text-lg font-semibold text-slate-950">
              My Tech Stack
            </h6>
            <div className="flex items-center gap-4 text-red-500">
              <ReactIcon />
              <NextIcon />
              <TypeScriptIcon />
              <TailwindIcon />
              <ShadCnUiIcon />
              <NextUiIcon />
              <ReduxIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 divide-y divide-slate-300 rounded-lg border border-slate-300 md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="px-7 py-12">
          <h4 className="text-4xl text-slate-950">15+</h4>
          <h5 className="mt-3 text-lg font-medium text-slate-700">
            Project completed
          </h5>
        </div>
        <div className="px-7 py-12">
          <h4 className="text-4xl text-slate-950">2.5+</h4>
          <h5 className="mt-3 text-lg font-medium text-slate-700">
            Years of experience
          </h5>
        </div>
        <div className="px-7 py-12">
          <h4 className="text-4xl text-slate-950">100%</h4>
          <h5 className="mt-3 text-lg font-medium text-slate-700">
            Client satisfaction
          </h5>
        </div>
      </div>
    </Section>
  );
};

export default About;
