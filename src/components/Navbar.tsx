import { navbarLinks } from "@/description/navbar";
import Logo from "@/shared/Logo";
import dynamic from "next/dynamic";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Logo />
      <ul className="hidden items-center gap-12 md:flex">
        {navbarLinks.map(({ name, href }) => (
          <li key={name} className="text-foreground">
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>

      <div className="space-x-3">
        <ThemeSelector />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
