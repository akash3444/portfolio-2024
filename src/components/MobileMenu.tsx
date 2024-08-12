"use client";

import { navbarLinks } from "@/description/navbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Logo from "@/shared/Logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import Copyright from "./Copyright";
import { CloseIcon, MenuIcon } from "./Icons";
import Socials from "./Socials";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileMenu = () => {
  const hideMobileMenu = useMediaQuery("(min-width: 768px)");

  if (hideMobileMenu) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded border border-border p-1.5 text-foreground md:hidden">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent
        /* Prevent scrolling the page to the top */
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="dark w-full bg-background"
      >
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <div className="flex items-center justify-between">
          <Logo />
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <CloseIcon />
            </Button>
          </SheetClose>
        </div>
        <div className="flex h-full flex-col bg-background px-6 pb-8 pt-6 md:hidden">
          <ul className="items-center gap-12 space-y-8 md:flex">
            {navbarLinks.map(({ name, href }) => (
              <li key={name} className="text-lg text-foreground">
                <SheetClose asChild>
                  <Link href={href} className="block">
                    {name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Socials className="mb-8 justify-center" />
            <Copyright className="mt-auto border-t border-border pt-8" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
