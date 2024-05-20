import Button from "@/shared/Button";
import Input from "@/shared/Input";
import Section from "@/shared/Section";
import Textarea from "@/shared/Textarea";
import React from "react";
import Subtitle from "./Typography";
import { MailIcon } from "./Icons";

const ContactMe = () => {
  return (
    <Section
      background="dark"
      className="flex flex-col gap-14 md:flex-row md:items-center"
    >
      <div className="space-y-4 rounded-lg bg-white px-7 py-12">
        <h4 className="text-3xl font-bold text-slate-950">Get In Touch</h4>
        <Input placeholder="Your Email" fullWidth />
        <Input placeholder="Subject" fullWidth />
        <Textarea placeholder="Message" rows={3} fullWidth />
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </div>
      <div>
        <Subtitle>Contact</Subtitle>
        <h3 className="mt-4 text-4xl">Contact Me</h3>
        <p className="mt-4 text-slate-300">
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
              <MailIcon />
            </div>
            <span>akashmoradiya3444@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
              <MailIcon />
            </div>
            <span>akashmoradiya3444@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
              <MailIcon />
            </div>
            <span>akashmoradiya3444@gmail.com</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
