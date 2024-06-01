import Button from "@/shared/Button";
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

const projects = [
  {
    name: "Hashnode Hub",
    description: `Hashnode Hub is an ongoing project aimed at replicating the
    functionality of Hashnode, a feature-rich blogging and community
    platform. This project leverages the latest advancements in
    Next.js 14, including the new app router and server components.
    It is built with a modern tech stack that includes Next.js,
    Tailwind CSS, Next UI, and TypeScript.`,
    imageUrl: "/projects/hashnode-hub.png",
    url: "https://hashnode-hub.vercel.app/",
    technologies: ["react", "next", "typescript", "tailwind", "nextUi"],
  },
  {
    name: "Little Learners Academy",
    description: `Little Learners Academy is a vibrant kindergarten school website prototype, converted from design to a web interface. Built using Next.js, Tailwind CSS, and ShadCN UI, this project showcases my skills in transforming design concepts into responsive and visually appealing websites.`,
    imageUrl: "/projects/little-learners-academy.png",
    url: "https://little-learners.vercel.app/",
    technologies: ["react", "next", "typescript", "tailwind", "shadcn"],
  },
  {
    name: "StreamVibe",
    description: `StreamVibe is a sleek and modern OTT platform website prototype, designed to provide an engaging user experience for streaming content. This project, also converted from design to web interface, is built using Next.js, Tailwind CSS, and ShadCN UI.`,
    imageUrl: "/projects/streamvibe.png",
    url: "https://streamvibe-ott.vercel.app/",
    technologies: ["react", "next", "typescript", "tailwind", "shadcn"],
  },
  {
    name: "Unit Converter",
    description: `The Universal Unit Converter is an efficient tool designed for fast and accurate unit conversions. Enter a value and instantly get the result in another unit. This project supports various conversions including Length, Area, Mass, Volume, Temperature, and many more. Built with React, Next.js, and Tailwind CSS, it ensures a seamless and modern user experience.`,
    imageUrl: "/projects/mass-unit-converter.png",
    url: "https://mass-unit-converter.vercel.app/",
    technologies: ["react", "next", "tailwind"],
  },
  {
    name: "Anime World",
    description: `Anime World is a dynamic website dedicated to listing animes, mangas, and characters. With a sleek and intuitive interface, users can effortlessly browse and view detailed information about their favorite animes and mangas, as well as explore character profiles. Built using React, Next.js, and Chakra UI, Anime World offers a seamless and engaging user experience for anime enthusiasts.`,
    imageUrl: "/projects/anime-world.png",
    url: "https://anime-world-nextjs.vercel.app/",
    technologies: ["react", "next"],
  },
];

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
  next: NextIcon,
  tailwind: TailwindIcon,
  shadcn: ShadCnUiIcon,
  typescript: TypeScriptIcon,
  nextUi: NextUiIcon,
};

const Projects = () => {
  return (
    <Section background="dark" id="projects">
      <Subtitle className="text-center">Portfolio</Subtitle>
      <h3 className="mt-6 text-center text-4xl">Latest Work</h3>

      <div className="mt-20 space-y-20">
        {projects.map(({ name, description, imageUrl, url, technologies }) => (
          <div
            key={name}
            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14 md:even:flex-row-reverse"
          >
            <div className="w-full grow rounded bg-slate-800 p-2">
              <img
                src={imageUrl}
                alt=""
                className="aspect-video h-full w-full object-cover"
              />

              <div className="mb-1 mt-2 flex items-center justify-center gap-4">
                {technologies.map((technology) => {
                  const Icon = icons[technology] ?? Fragment;

                  return <Icon key={technology} />;
                })}
              </div>
            </div>
            <div className="shrink-0 md:w-1/2">
              <h4 className="text-3xl font-bold">{name}</h4>
              <p className="mt-4 leading-7 text-slate-300">{description}</p>
              <Link href={url} target="_blank">
                <Button variant="contained" className="mt-6">
                  View Live
                  <ArrowUpRightIcon className="mb-1 h-5 w-5 align-top" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
