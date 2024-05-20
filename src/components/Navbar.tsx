import React from "react";
import { MenuIcon } from "./Icons";
import Logo from "@/shared/Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Logo />
      <button className="rounded border border-slate-600 p-1.5">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
