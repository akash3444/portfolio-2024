import Logo from "@/shared/Logo";
import Section from "@/shared/Section";
import Link from "next/link";
import Socials from "./Socials";
import Subtitle from "./Typography";
import { navbarLinks } from "@/description/navbar";
import Copyright from "./Copyright";

const sections = [
  {
    name: "Menu",
    links: navbarLinks,
  },
  {
    name: "Services",
    links: [
      {
        name: "Design",
        href: "#",
      },
      {
        name: "Development",
        href: "#",
      },
      {
        name: "Marketing",
        href: "#",
      },
      {
        name: "See More",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Section
      component="footer"
      background="dark"
      className="divide-y divide-slate-700 py-0 md:py-0"
    >
      <div className="grid grid-cols-1 items-start gap-12 py-10 sm:grid-cols-4">
        <Logo />
        <div className="grid grid-cols-2 gap-4 sm:col-span-2">
          {sections.map(({ name, links }) => (
            <div key={name}>
              <Subtitle className="mb-4">{name}</Subtitle>
              <ul className="space-y-1.5">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Socials className="justify-center" />
      </div>
      <Copyright className="py-10" />
    </Section>
  );
};

export default Footer;
