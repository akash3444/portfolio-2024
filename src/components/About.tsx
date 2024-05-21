import Section from "@/shared/Section";
import { PhoneAndAccessories } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";
import {
  NextIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
        <PhoneAndAccessories className="w-full shrink-0 md:w-1/2 md:md:max-w-lg" />
        <div>
          <Subtitle>Akash Moradiya</Subtitle>
          <h3 className="mt-6 text-4xl text-slate-950">
            Professional Web Designer
          </h3>
          <p className="mt-4 text-slate-600">
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
              <TypeScriptIcon />
              <ReactIcon />
              <NextIcon />
              <TailwindIcon />
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
