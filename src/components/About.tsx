import Section from "@/shared/Section";
import { PhoneAndAccessories } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";

const About = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
        <PhoneAndAccessories className="h-80 w-full md:h-auto md:max-w-lg" />
        <div>
          <Subtitle>Akash Moradiya</Subtitle>
          <h3 className="mt-6 text-4xl text-slate-950">
            Professional Web Designer
          </h3>
          <p className="mt-4 text-slate-600">
            Ability to put themselves in the merchant&apos;s shoes. It is meant
            to partner on the long run, and work as an extension of the
            merchant&apos;s team.
          </p>
          <Button variant="contained" className="mt-8">
            About Me
          </Button>
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
