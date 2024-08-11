import Logo from "@/shared/Logo";
import Section from "@/shared/Section";
import Link from "next/link";
import Socials from "./Socials";
import Subtitle from "./Typography";
import { navbarLinks } from "@/description/navbar";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Section
      component="footer"
      background="dark"
      className="divide-border divide-y py-0 md:py-0"
    >
      <div className="space-y-12 py-10">
        <Logo className="mx-auto max-w-max" />
        <ul className="text-foreground flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {navbarLinks.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
        <Socials className="justify-center gap-8" />
      </div>
      <Copyright className="py-10" />
    </Section>
  );
};

export default Footer;
