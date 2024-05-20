import Section from "@/shared/Section";
import { Mail } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";

const Contact = () => {
  return (
    <Section
      className="flex flex-col gap-16 bg-red-100 pt-32 md:flex-row md:items-center md:justify-between md:py-14"
      background="bg-red-100"
    >
      <div>
        <Subtitle>Get started</Subtitle>
        <h5 className="mt-4 text-3xl font-bold text-slate-950">
          I Help Companies Move Faster
        </h5>
        <Button variant="contained" className="mt-6">
          Contact Me
        </Button>
      </div>
      <div className="items-center md:flex">
        <p className="text-slate-700">
          Put themselves in the merchant&apos;s shoes. It is meant to partner on
          the long run.
        </p>
        <Mail className="w-full" />
      </div>
    </Section>
  );
};

export default Contact;
