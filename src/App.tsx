import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

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
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleViewExamples = (webType: string) => {
    setActiveFilter(webType);
    scrollToSection("proyectos");
  };

  return (
    <div className="bg-pure-white dark:bg-off-black-ink min-h-screen text-off-black-ink dark:text-off-white-canvas transition-colors duration-300 selection:bg-electric-lime selection:text-off-black-ink">
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

      <About />

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Skills />

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Projects
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <Services />

      <hr className="border-ash/20 dark:border-graphite/20 max-w-6xl mx-auto" />

      <ContactForm onViewExamples={handleViewExamples} />

      <Footer />
    </div>
  );
}