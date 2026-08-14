import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import FlipText from "./FlipText";

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (dark: boolean) => void;
    activeSection: string;
}

export default function Navbar({
    darkMode,
    setDarkMode,
    activeSection,
}: NavbarProps) {
    const { t, i18n } = useTranslation();
    const [isOpenSobreMi, setIsOpenSobreMi] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuToggleAnim, setMenuToggleAnim] = useState<
        "idle" | "active" | "not-active"
    >("idle");

    const currentLang = i18n.language as "es" | "en";

    const switchLanguage = (lang: "es" | "en") => {
        i18n.changeLanguage(lang);
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
            setIsMenuOpen(false);
            setMenuToggleAnim("not-active");
            setIsOpenSobreMi(false);
        }
    };

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        setMenuToggleAnim((prev) =>
            prev === "active" ? "not-active" : "active",
        );
    };

    const navItems = [
        { id: "inicio", label: t("navbar.inicio") },
        {
            id: "sobre-mi",
            label: t("navbar.sobre_mi"),
            hasSubmenu: true,
        },
        { id: "servicios", label: t("navbar.servicios") },
        { id: "contacto", label: t("navbar.contacto") },
    ];

    return (
        <>
            {/* Desktop Header/Navbar */}
            <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max transition-all duration-300">
                <div
                    id="navbar-pill"
                    className="flex items-center justify-center gap-5 px-6 py-2.5 rounded-full border border-brand-glow/20 bg-deep-charcoal/95 backdrop-blur-md transition-all duration-300"
                >
                    {/* Desktop Navigation Menu */}
                    <nav className="flex items-center gap-1">
                        {navItems.map((item) => {
                            if (item.hasSubmenu) {
                                return (
                                    <div
                                        key={item.id}
                                        className="relative group"
                                        onMouseEnter={() =>
                                            setIsOpenSobreMi(true)
                                        }
                                        onMouseLeave={() =>
                                            setIsOpenSobreMi(false)
                                        }
                                    >
                                        <button
                                            onClick={() =>
                                                handleScrollTo("sobre-mi")
                                            }
                                            className={`px-4 py-2 rounded-full font-sans text-base font-medium tracking-wide flex items-center gap-1 transition-all cursor-pointer ${
                                                activeSection === "sobre-mi" ||
                                                activeSection ===
                                                    "habilidades" ||
                                                activeSection === "proyectos"
                                                    ? "bg-brand text-pure-white"
                                                    : "text-ash hover:text-brand-glow"
                                            }`}
                                        >
                                            <FlipText>{item.label}</FlipText>
                                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        </button>

                                        {/* Dropdown Submenu */}
                                        <div
                                            className={`absolute left-0 top-full w-44 pt-2 transition-all duration-200 origin-top-left z-50 ${
                                                isOpenSobreMi
                                                    ? "opacity-100 scale-100 pointer-events-auto"
                                                    : "opacity-0 scale-95 pointer-events-none"
                                            }`}
                                        >
                                            <div className="rounded-2xl bg-deep-charcoal border border-graphite/30 p-2 shadow-xl">
                                                <button
                                                    onClick={() =>
                                                        handleScrollTo(
                                                            "habilidades",
                                                        )
                                                    }
                                                    className="w-full text-left px-3 py-2 rounded-xl text-base font-medium text-ash hover:bg-brand/15 hover:text-brand-glow transition-all cursor-pointer"
                                                >
                                                    <FlipText>
                                                        {t(
                                                            "navbar.habilidades",
                                                        )}
                                                    </FlipText>
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleScrollTo(
                                                            "proyectos",
                                                        )
                                                    }
                                                    className="w-full text-left px-3 py-2 rounded-xl text-base font-medium text-ash hover:bg-brand/15 hover:text-brand-glow transition-all cursor-pointer"
                                                >
                                                    <FlipText>
                                                        {t("navbar.proyectos")}
                                                    </FlipText>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    className={`px-4 py-2 rounded-full font-sans text-base font-medium tracking-wide transition-all cursor-pointer ${
                                        activeSection === item.id
                                            ? "bg-brand text-pure-white"
                                            : "text-ash hover:text-brand-glow"
                                    }`}
                                >
                                    <FlipText>{item.label}</FlipText>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Toolbar (Lang Flags & Theme Toggle) */}
                    <div className="flex items-center gap-3">
                        {/* Language selection flags */}
                        <div className="flex items-center gap-1.5 bg-graphite/10 p-1 rounded-lg border border-graphite/20">
                            <button
                                onClick={() => switchLanguage("es")}
                                className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                                    currentLang === "es"
                                        ? "opacity-100 scale-110"
                                        : "opacity-40 hover:opacity-100"
                                }`}
                                title="Español"
                            >
                                <img
                                    src="/images/misc/es.webp"
                                    alt="Español"
                                    className="w-5 h-5 object-cover rounded-sm"
                                />
                            </button>
                            <button
                                onClick={() => switchLanguage("en")}
                                className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                                    currentLang === "en"
                                        ? "opacity-100 scale-110"
                                        : "opacity-40 hover:opacity-100"
                                }`}
                                title="English"
                            >
                                <img
                                    src="/images/misc/en.webp"
                                    alt="English"
                                    className="w-5 h-5 object-cover rounded-sm"
                                />
                            </button>
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-1.5 rounded-full border border-graphite/30 text-pure-white cursor-pointer flex items-center justify-center"
                            aria-label="Toggle dark mode"
                        >
                            <div
                                className={`theme-toggle-container is-desktop ${darkMode ? "is-dark" : ""}`}
                            >
                                <svg
                                    className="sun-element"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle
                                        fill="currentColor"
                                        cx="12"
                                        cy="12"
                                        r="5"
                                    />
                                    <g stroke="currentColor">
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line
                                            x1="4.22"
                                            y1="4.22"
                                            x2="5.64"
                                            y2="5.64"
                                        />
                                        <line
                                            x1="18.36"
                                            y1="18.36"
                                            x2="19.78"
                                            y2="19.78"
                                        />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line
                                            x1="4.22"
                                            y1="19.78"
                                            x2="5.64"
                                            y2="18.36"
                                        />
                                        <line
                                            x1="18.36"
                                            y1="5.64"
                                            x2="19.78"
                                            y2="4.22"
                                        />
                                    </g>
                                </svg>
                                <div className="moon-element" />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Header/Navbar */}
            <div className="md:hidden">
                <div className={`menu-panel ${isMenuOpen ? "open" : ""}`}>
                    <div className="menu-content">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <button
                                    onClick={() => handleScrollTo("inicio")}
                                >
                                    <FlipText>{t("navbar.inicio")}</FlipText>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() => handleScrollTo("sobre-mi")}
                                >
                                    <FlipText>{t("navbar.sobre_mi")}</FlipText>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() =>
                                        handleScrollTo("habilidades")
                                    }
                                >
                                    <FlipText>
                                        {t("navbar.habilidades")}
                                    </FlipText>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() => handleScrollTo("proyectos")}
                                >
                                    <FlipText>{t("navbar.proyectos")}</FlipText>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() => handleScrollTo("servicios")}
                                >
                                    <FlipText>{t("navbar.servicios")}</FlipText>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={() => handleScrollTo("contacto")}
                                >
                                    <FlipText>{t("navbar.contacto")}</FlipText>
                                </button>
                            </li>
                        </ul>

                        {/* Custom Language Flags & Darkmode Switch inside mobile pill panel */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-off-black-ink/15 dark:border-pure-white/15">
                            <div className="flex items-center gap-1.5 bg-off-black-ink/10 dark:bg-pure-white/10 p-1 rounded-lg border border-off-black-ink/10 dark:border-pure-white/10">
                                <button
                                    onClick={() => switchLanguage("es")}
                                    className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                                        currentLang === "es"
                                            ? "opacity-100 scale-110"
                                            : "opacity-40 hover:opacity-100"
                                    }`}
                                    title="Español"
                                >
                                    <img
                                        src="/images/misc/es.webp"
                                        alt="Español"
                                        className="w-5 h-5 object-cover rounded-sm"
                                    />
                                </button>
                                <button
                                    onClick={() => switchLanguage("en")}
                                    className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                                        currentLang === "en"
                                            ? "opacity-100 scale-110"
                                            : "opacity-40 hover:opacity-100"
                                    }`}
                                    title="English"
                                >
                                    <img
                                        src="/images/misc/en.webp"
                                        alt="English"
                                        className="w-5 h-5 object-cover rounded-sm"
                                    />
                                </button>
                            </div>

                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2.5 rounded-full border border-off-black-ink/20 dark:border-pure-white/20 text-off-black-ink dark:text-pure-white cursor-pointer flex items-center justify-center"
                                aria-label="Toggle dark mode"
                            >
                                <div
                                    className={`theme-toggle-container is-mobile ${darkMode ? "is-dark" : ""}`}
                                >
                                    <svg
                                        className="sun-element"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle
                                            fill="currentColor"
                                            cx="12"
                                            cy="12"
                                            r="5"
                                        />
                                        <g stroke="currentColor">
                                            <line
                                                x1="12"
                                                y1="1"
                                                x2="12"
                                                y2="3"
                                            />
                                            <line
                                                x1="12"
                                                y1="21"
                                                x2="12"
                                                y2="23"
                                            />
                                            <line
                                                x1="4.22"
                                                y1="4.22"
                                                x2="5.64"
                                                y2="5.64"
                                            />
                                            <line
                                                x1="18.36"
                                                y1="18.36"
                                                x2="19.78"
                                                y2="19.78"
                                            />
                                            <line
                                                x1="1"
                                                y1="12"
                                                x2="3"
                                                y2="12"
                                            />
                                            <line
                                                x1="21"
                                                y1="12"
                                                x2="23"
                                                y2="12"
                                            />
                                            <line
                                                x1="4.22"
                                                y1="19.78"
                                                x2="5.64"
                                                y2="18.36"
                                            />
                                            <line
                                                x1="18.36"
                                                y1="5.64"
                                                x2="19.78"
                                                y2="4.22"
                                            />
                                        </g>
                                    </svg>
                                    <div className="moon-element" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    className={`menu-toggle ${
                        menuToggleAnim === "active"
                            ? "active"
                            : menuToggleAnim === "not-active"
                              ? "not-active"
                              : ""
                    }`}
                    onClick={handleToggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </>
    );
}