import Logo from "@/shared/Logo";
import Section from "@/shared/Section";
import Link from "next/link";
import React from "react";
import Subtitle from "./Typography";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const sections = [
  {
    name: "Menu",
    links: [
      {
        name: "About",
        href: "#",
      },
      {
        name: "Services",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Contact",
        href: "#",
      },
    ],
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

const socialLinks = [
  {
    href: "https://twitter.com/akash_3444",
    icon: TwitterIcon,
  },
  {
    href: "https://www.linkedin.com/in/akash-3444",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/akash3444",
    icon: GithubIcon,
  },
];

const Footer = () => {
  return (
    <Section
      component="footer"
      background="dark"
      className="divide-y divide-slate-700 py-0 md:py-0"
    >
      <div className="grid grid-cols-1 gap-12 py-10 sm:grid-cols-4">
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

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon }) => (
            <Link key={href} href={href} target="_blank">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p className="py-10 text-center leading-loose text-slate-300">
        Copyright &copy; {new Date().getFullYear()} Akash.
        All&nbsp;Rights&nbsp;Reserved.
      </p>
    </Section>
  );
};

export default Footer;
