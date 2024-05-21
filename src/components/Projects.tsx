import Section from "@/shared/Section";
import React from "react";
import Subtitle from "./Typography";
import Button from "@/shared/Button";
import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";

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
  },
  {
    name: "Little Learners Academy",
    description: `Little Learners Academy is a vibrant kindergarten school website prototype, converted from design to a web interface. Built using Next.js, Tailwind CSS, and Shad CN UI, this project showcases my skills in transforming design concepts into responsive and visually appealing websites.`,
    imageUrl: "/projects/little-learners-academy.png",
    url: "https://little-learners.vercel.app/",
  },
  {
    name: "StreamVibe",
    description: `StreamVibe is a sleek and modern OTT platform website prototype, designed to provide an engaging user experience for streaming content. This project, also converted from design to web interface, is built using Next.js, Tailwind CSS, and Shad CN UI.`,
    imageUrl: "/projects/streamvibe.png",
    url: "https://streamvibe-ott.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Section background="dark" id="projects">
      <Subtitle className="text-center">Portfolio</Subtitle>
      <h3 className="mt-6 text-center text-4xl">Latest Work</h3>

      <div className="mt-20 space-y-20">
        {projects.map(({ name, description, imageUrl, url }) => (
          <div
            key={name}
            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14 md:even:flex-row-reverse"
            // className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="aspect-video w-full grow rounded bg-slate-800 p-2">
              <img
                src={imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="shrink-0 md:w-1/2">
              <h4 className="text-3xl font-bold">{name}</h4>
              <p className="mt-4 leading-7 text-slate-300">{description}</p>
              <Link href={url} target="_blank">
                <Button variant="contained" className="mt-6">
                  View Live{" "}
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
