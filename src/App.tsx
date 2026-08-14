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
        const elements = sections
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        let offsets = elements.map((el) => ({
            el,
            top: el.offsetTop,
            height: el.offsetHeight,
        }));

        let frame = 0;

        const handleScrollSpy = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                const scrollPosition = window.scrollY + 160;

                for (const { el, top, height } of offsets) {
                    if (
                        scrollPosition >= top &&
                        scrollPosition < top + height
                    ) {
                        setActiveSection(el.id);
                        break;
                    }
                }
            });
        };

        const recomputeOffsets = () => {
            offsets = elements.map((el) => ({
                el,
                top: el.offsetTop,
                height: el.offsetHeight,
            }));
            handleScrollSpy();
        };

        window.addEventListener("scroll", handleScrollSpy, { passive: true });
        window.addEventListener("resize", recomputeOffsets);
        window.addEventListener("load", recomputeOffsets);
        handleScrollSpy();

        return () => {
            window.removeEventListener("scroll", handleScrollSpy);
            window.removeEventListener("resize", recomputeOffsets);
            window.removeEventListener("load", recomputeOffsets);
            if (frame) cancelAnimationFrame(frame);
        };
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
