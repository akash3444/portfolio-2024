import Section from "@/shared/Section";
import Link from "next/link";
import { FC, Fragment, SVGProps } from "react";
import {
  ArrowUpRightIcon,
  NextIcon,
  NextUiIcon,
  ReactIcon,
  ShadCnUiIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";
import Subtitle from "./Typography";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  "react-js": ReactIcon,
  "next-js": NextIcon,
  "tailwind-css": TailwindIcon,
  "shadcn-ui": ShadCnUiIcon,
  typescript: TypeScriptIcon,
  "next-ui": NextUiIcon,
};

const Projects = async () => {
  const projectList = await client.fetch(PROJECTS_QUERY);

  return (
    <Section background="dark" id="projects">
      <Subtitle className="text-center">Portfolio</Subtitle>
      <h3 className="mt-6 text-center text-4xl font-extrabold text-foreground">
        Latest Work
      </h3>

      <div className="mt-20 space-y-20">
        {projectList.map(({ name, description, image, techStack, url }) => (
          <div
            key={name}
            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14 md:even:flex-row-reverse"
          >
            <div className="w-full grow rounded bg-card p-2 text-card-foreground">
              <img
                src={image!}
                alt={name}
                className="aspect-video h-full w-full object-cover"
              />

              <div className="mb-1 mt-2 flex items-center justify-center gap-4">
                {techStack.map((technology) => {
                  const Icon = icons[technology.slug] ?? Fragment;

                  return <Icon key={technology.slug} />;
                })}
              </div>
            </div>
            <div className="shrink-0 md:w-1/2">
              <h4 className="text-3xl font-semibold text-foreground">{name}</h4>
              <p className="mt-4 text-[17px] leading-[1.6rem] text-muted-foreground">
                {description}
              </p>
              {url && (
                <Link href={url} target="_blank">
                  <Button className="mt-6">
                    View Live
                    <ArrowUpRightIcon className="mb-1 h-5 w-5 align-top" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
