import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Awards from '@/components/sections/Awards';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
