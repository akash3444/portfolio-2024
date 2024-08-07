import About from "@/components/About";
import { HeroAbstract } from "@/components/Abstracts";
import Contact from "@/components/Contact";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HelpBuildProject from "@/components/HelpBuildProject";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Subtitle from "@/components/Typography";
import Button from "@/shared/Button";
import Section from "@/shared/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          style={{ backgroundImage: "url(/grid-line.svg)" }}
          className="absolute inset-0"
        />
        <div className="absolute -left-14 top-36 h-48 w-48 rounded-full bg-slate-800 blur-[74px]" />
        <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-blue-900 blur-[84px] md:h-48 md:w-48" />
        <Section
          background="dark"
          className="relative z-[1] pt-0 md:pt-0 lg:min-h-[100dvh]"
        >
          <Navbar />
          {/* Hero section */}
          <div className="mt-24 items-center gap-20 md:flex lg:justify-between">
            <HeroAbstract className="h-80 w-full lg:h-auto lg:max-w-md" />
            <div className="mt-8 md:max-w-xl">
              <Subtitle>Akash Moradiya</Subtitle>
              <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-6xl lg:leading-tight">
                Crafting Engaging Web Experiences
              </h1>
              <p className="mt-2 leading-7 text-slate-300">
                I&apos;m Akash Moradiya, a front-end engineer with 2.5+ years of
                experience in React.js and Next.js. I specialize in creating
                efficient, scalable, and user-friendly applications.
              </p>
              <Link href="#projects">
                <Button className="mt-8" variant="contained">
                  See My Work
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <main>
        <About />
        <Projects />
        <Contact />
        <ContactMe />
        <HelpBuildProject />
        <Footer />
      </main>
    </>
  );
}
