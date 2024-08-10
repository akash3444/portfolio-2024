import Section from "@/shared/Section";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { MailIcon } from "./Icons";
import Socials from "./Socials";
import Subtitle from "./Typography";

const ContactMe = () => {
  return (
    <Section
      // background="dark"
      className="grid grid-cols-1 items-center gap-14 md:grid-cols-2"
      id="contact"
    >
      <ContactForm />
      <div className="text-slate-900">
        <Subtitle>Contact</Subtitle>
        <h3 className="mt-4 text-4xl">Contact Me</h3>
        <p className="mt-4">
          Ready to kickstart your project or have questions? Let&apos;s chat!
          Reach out to discuss how I can help you achieve your web development
          goals.
        </p>

        <Link
          href="mailto:akashmoradiya3444@gmail.com"
          className="mt-6 inline-block"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
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
