import Section from "@/shared/Section";
import { AbstractHelpBuild, PhoneAndAccessories } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";

const HelpBuildProject = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-20">
        <AbstractHelpBuild className="h-80 w-full md:h-auto md:max-w-lg" />
        <div>
          <Subtitle>Akash Moradiya</Subtitle>
          <h3 className="mt-6 text-4xl text-slate-950">
            Help To Build Your Dream Project
          </h3>
          <p className="mt-4 text-slate-600">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <Button variant="contained" className="mt-8">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HelpBuildProject;
