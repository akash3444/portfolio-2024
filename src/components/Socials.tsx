import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

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

const Socials: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {socialLinks.map(({ href, icon: Icon }) => (
        <Link key={href} href={href} target="_blank">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
