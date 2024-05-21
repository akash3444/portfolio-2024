import Button from "@/shared/Button";
import Input from "@/shared/Input";
import Section from "@/shared/Section";
import Textarea from "@/shared/Textarea";
import React from "react";
import Subtitle from "./Typography";
import { LinkedInIcon, MailIcon, TwitterIcon } from "./Icons";
import Socials from "./Socials";
import Link from "next/link";

const ContactMe = () => {
  return (
    <Section
      background="dark"
      className="grid grid-cols-1 items-center gap-14 md:grid-cols-2"
      id="contact"
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
          Ready to kickstart your project or have questions? Let&apos;s chat!
          Reach out to discuss how I can help you achieve your web development
          goals.
        </p>

        <Link
          href="mailto:akashmoradiya3444@gmail.com"
          className="mt-6 inline-block"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
              <MailIcon />
            </div>
            <span>akashmoradiya3444@gmail.com</span>
          </div>
        </Link>

        <div className="mt-12">
          <h6 className="mb-4 text-xl font-semibold">My Socials</h6>
          <Socials />
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
