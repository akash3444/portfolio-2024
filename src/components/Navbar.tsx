"use client";

import { navbarLinks } from "@/description/navbar";
import Logo from "@/shared/Logo";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";
import { cn } from "@/utils/lib";
import Socials from "./Socials";
import Copyright from "./Copyright";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={cn("flex items-center justify-between py-6", {
        "fixed inset-x-0 top-0 z-10 bg-slate-950 px-6 md:static": isMenuOpen,
      })}
    >
      <Logo />
      <ul className="hidden items-center gap-12 md:flex">
        {navbarLinks.map(({ name, href }) => (
          <li key={name} className="text-foreground">
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      {isMenuOpen && (
        <div className="bg-background fixed inset-0 top-20 z-10 flex flex-col px-6 pb-8 pt-6 md:hidden">
          <ul className="items-center gap-12 space-y-8 md:flex">
            {navbarLinks.map(({ name, href }) => (
              <li key={name} className="text-foreground text-lg">
                <Link href={href} className="block" onClick={toggleMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Socials className="mb-8 justify-center" />
            <Copyright className="border-border mt-auto border-t pt-8" />
          </div>
        </div>
      )}
      <button
        className="text-foreground border-border rounded border p-1.5 md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
