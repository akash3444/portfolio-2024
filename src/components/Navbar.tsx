import React from "react";
import { MenuIcon } from "./Icons";
import Logo from "@/shared/Logo";
import Link from "next/link";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Logo />
      <ul className="hidden items-center gap-12 md:flex">
        {links.map(({ name, href }) => (
          <li key={name} className="text-slate-300">
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <button className="rounded border border-slate-600 p-1.5 md:hidden">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
