import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Subtitle from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Section from "@/shared/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="/background-texture.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <Section
          background="dark"
          className="relative z-[1] min-h-[100dvh] pt-0 md:pt-0"
        >
          <Navbar />
          {/* Hero section */}
          <div className="mt-20 items-center gap-20 md:mt-24 md:flex lg:justify-between">
            <div className="mx-auto mt-8 text-center">
              <Subtitle>Akash Moradiya</Subtitle>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:mx-auto md:max-w-2xl md:text-6xl lg:text-7xl lg:leading-tight">
                Crafting Engaging Web Experiences
              </h1>
              <p className="mt-4 max-w-3xl leading-7 text-muted-foreground sm:text-lg">
                I&apos;m Akash Moradiya, a front-end engineer with 2.5+ years of
                experience in React.js and Next.js. I specialize in creating
                efficient, scalable, and user-friendly applications.
              </p>
              <Link href="#projects">
                <Button className="mt-8">See My Work</Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <main>
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
