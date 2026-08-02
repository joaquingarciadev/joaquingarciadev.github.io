import { useState, useEffect, lazy, Suspense } from "react";
import { useLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const ContactForm = lazy(() => import("./components/ContactForm"));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("joaquin_portfolio_dark");
      if (stored !== null) {
        return stored === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const lenis = useLenis();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("joaquin_portfolio_dark", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const sections = ["inicio", "sobre-mi", "habilidades", "proyectos", "servicios", "contacto"];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      lenis?.scrollTo(element, { offset: -90 });
    }
  };

  const handleViewExamples = (webType: string) => {
    setActiveFilter(webType);
    scrollToSection("proyectos");
  };

  return (
    <div className="bg-pure-white dark:bg-off-black-ink min-h-screen text-off-black-ink dark:text-off-white-canvas transition-colors duration-300 selection:bg-brand selection:text-pure-white dark:selection:bg-brand-glow dark:selection:text-off-black-ink">
      <CustomCursor />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      <Hero
        onContactClick={() => scrollToSection("contacto")}
        onProjectsClick={() => scrollToSection("proyectos")}
      />

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Suspense fallback={<SectionFallback />}>
        <Projects
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Suspense>

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Suspense fallback={<SectionFallback />}>
        <ContactForm onViewExamples={handleViewExamples} />
      </Suspense>

      <Footer />
    </div>
  );
}