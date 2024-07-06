import Section from "@/shared/Section";
import { Mail } from "./Abstracts";
import Subtitle from "./Typography";
import Button from "@/shared/Button";
import Link from "next/link";

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
        <Link href="#contact">
          <Button variant="contained" className="mt-6">
            Hire Me
          </Button>
        </Link>
      </div>
      <div className="items-center md:flex">
        <p className="text-slate-700">
          Boost your business with expert digital solutions. Let&apos;s
          accelerate your growth together.
        </p>
        <Mail className="w-full" />
      </div>
    </Section>
  );
};

export default Contact;
