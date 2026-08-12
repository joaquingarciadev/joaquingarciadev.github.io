import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("joaquin_portfolio_dark");
            if (stored !== null) {
                return stored === "true";
            }
            return true; // Default to dark mode
        }
        return true;
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
        const sections = [
            "inicio",
            "sobre-mi",
            "habilidades",
            "proyectos",
            "servicios",
            "contacto",
        ];

        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 160;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
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
            element.scrollIntoView();
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

            <hr className="section-divider" />

            <About />

            <hr className="section-divider" />

            <Skills />

            <hr className="section-divider" />

            <Projects
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <hr className="section-divider" />

            <Services />

            <hr className="section-divider" />

            <ContactForm onViewExamples={handleViewExamples} />

            <Footer />
        </div>
    );
}