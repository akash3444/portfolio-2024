import About from "@/components/About";
import { HeroAbstract } from "@/components/Abstracts";
import Contact from "@/components/Contact";
import ContactMe from "@/components/ContactMe";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HelpBuildProject from "@/components/HelpBuildProject";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Subtitle from "@/components/Typography";
import Button from "@/shared/Button";
import Section from "@/shared/Section";

export default function Home() {
  return (
    <>
      <Section background="dark" className="pt-0 md:pt-0 lg:min-h-[100dvh]">
        <Navbar />
        {/* Hero section */}
        <div className="mt-24 items-center gap-20 md:flex lg:justify-between">
          <HeroAbstract className="h-80 w-full lg:h-auto lg:max-w-md" />
          <div className="mt-8 md:max-w-xl">
            <Subtitle>Akash Moradiya</Subtitle>
            <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-6xl lg:leading-tight">
              The Simple, Clean Design
            </h1>
            <p className="mt-2 text-slate-300">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <Button className="mt-4" variant="contained">
              See My Work
            </Button>
          </div>
        </div>
      </Section>

      <main>
        <Services />
        <Projects />
        <About />
        <Features />
        <Contact />
        <ContactMe />
        <HelpBuildProject />
        <Footer />
      </main>
    </>
  );
}
