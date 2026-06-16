import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/site/Background";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero, About, Skills, Services, Portfolio, Gallery,
  Experience, Testimonials, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050a1a] text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Experience />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
