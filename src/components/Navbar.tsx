import { useState, useEffect } from "react";
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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenSobreMi, setIsOpenSobreMi] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentLang = i18n.language as "es" | "en";

    const switchLanguage = (lang: "es" | "en") => {
        i18n.changeLanguage(lang);
        /*     if (lang === "es") {
      window.location.href = "/";
    } else {
      window.location.href = "/en";
    } */
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
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
            setIsMenuOpen(false);
            setIsOpenSobreMi(false);
        }
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
            <style>{`
        @media (max-width: 767px) {
          .menu-panel {
            position: fixed;
            top: 24px;
            right: 24px;
            width: 50px;
            max-width: 460px;
            height: 50px;
            background: #beff50;
            border-radius: 30px;
            overflow: hidden;
            z-index: 999;
            transition:
                width .5s cubic-bezier(.76,0,.24,1),
                height .45s cubic-bezier(.76,0,.24,1),
                top .45s cubic-bezier(.16,1,.3,1),
                right .45s cubic-bezier(.16,1,.3,1),
                border-radius .45s cubic-bezier(.16,1,.3,1);
          }

          .menu-panel.open {
            top: 10px;
            right: 10px;
            width: calc(100% - 20px);
            max-width: 460px;
            height: 500px;
            border-radius: 20px;
          }

          .menu-toggle {
            position: fixed;
            top: 24px;
            right: 24px;
            width: 50px;
            height: 50px;
            border: none;
            background: transparent;
            border-radius: 30px;
            cursor: pointer;
            z-index: 1000;
            transition: background-color 0.3s;
          }

          .bar {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 25px;
            height: 2px;
            border-radius: 2px;
            background: #14140f;
            transition: .3s ease;
          }

          .bar:nth-child(1) {
            transform: translate(-50%, calc(-50% - 6px));
          }

          .bar:nth-child(2) {
            transform: translate(-50%, -50%);
          }

          .bar:nth-child(3) {
            transform: translate(-50%, calc(-50% + 6px));
          }

          .menu-toggle.active .bar:nth-child(1) {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .menu-toggle.active .bar:nth-child(2) {
            opacity: 0;
          }

          .menu-toggle.active .bar:nth-child(3) {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .menu-content {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            max-width: 460px;
            height: 500px;
            padding: 70px 25px 25px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            opacity: 0;
            pointer-events: none;
            transition: opacity .2s;
          }

          .menu-panel.open .menu-content {
            opacity: 1;
            pointer-events: auto;
            transition-delay: .15s;
          }

          .nav-links {
            list-style: none;
          }

          .nav-item {
            overflow: hidden;
            margin-bottom: 12px;
          }

          .nav-item:last-child {
            margin-bottom: 0;
          }

          .nav-item button {
            display: inline-block;
            text-decoration: none;
            color: #14140f;
            font-size: 26px;
            font-weight: 500;
            font-family: inherit;
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;
            width: 100%;
            opacity: 0;
            transform: translateY(100%);
            transition:
                opacity .15s ease,
                transform 0s .2s;
          }

          .nav-item button:hover {
            opacity: .6;
          }

          .menu-panel.open .nav-item button {
            opacity: 1;
            transform: translateY(0);
            transition:
                transform .6s cubic-bezier(.16,1,.3,1),
                opacity .1s;
          }

          .menu-panel.open .nav-item:nth-child(1) button {transition-delay: .15s;}
          .menu-panel.open .nav-item:nth-child(2) button {transition-delay: .20s;}
          .menu-panel.open .nav-item:nth-child(3) button {transition-delay: .25s;}
          .menu-panel.open .nav-item:nth-child(4) button {transition-delay: .30s;}
          .menu-panel.open .nav-item:nth-child(5) button {transition-delay: .35s;}
          .menu-panel.open .nav-item:nth-child(6) button {transition-delay: .40s;}
        }

        .theme-toggle-container {
          position: relative;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        .theme-toggle-container > * {
          transition: all 0.8s cubic-bezier(0.2, 0.2, 0.2, 1.2);
        }

        .theme-toggle-container .moon-element {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(320deg) scale(0.55);
          width: 20px;
          height: 20px;
          opacity: 1;
          pointer-events: none;
          background-color: currentColor;
          border-radius: 50%;
        }

        .theme-toggle-container .moon-element::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, -100%) scale(0);
          width: 16px;
          height: 16px;
          opacity: 0;
          background-color: #30302a;
          border-radius: 50%;
          transition: transform 0.8s ease, opacity 0.1s ease 0.2s, background-color 0.5s;
        }

        .theme-toggle-container .sun-element {
          transform: rotate(0deg);
        }

        .theme-toggle-container.is-dark .moon-element {
          transform: rotate(40deg) scale(0.85);
          opacity: 1;
          pointer-events: all;
        }

        .theme-toggle-container.is-dark .moon-element::before {
          transform: translate(-10%, -25%) scale(1);
          opacity: 1;
        }

        .theme-toggle-container.is-dark.is-mobile .moon-element::before {
          background-color: #beff50;
        }

        .theme-toggle-container.is-desktop {
          width: 16px;
          height: 16px;
        }
        .theme-toggle-container.is-desktop .moon-element {
          width: 16px;
          height: 16px;
        }
        .theme-toggle-container.is-desktop .moon-element::before {
          width: 13px;
          height: 13px;
        }

        .theme-toggle-container.is-dark .sun-element {
          transform: rotate(-360deg);
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

            {/* Desktop Header/Navbar */}
            <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max transition-all duration-300">
                <div
                    id="navbar-pill"
                    className={`flex items-center justify-center gap-5 px-6 py-2.5 rounded-full border transition-all duration-300 ${
                        isScrolled
                            ? "bg-deep-charcoal shadow-lg border-graphite/30"
                            : "bg-deep-charcoal border-graphite/20"
                    }`}
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
                                            className={`px-4 py-2 rounded-full font-sans text-sm font-medium tracking-wide flex items-center gap-1 transition-all cursor-pointer ${
                                                activeSection === "sobre-mi" ||
                                                activeSection ===
                                                    "habilidades" ||
                                                activeSection === "proyectos"
                                                    ? "bg-electric-lime text-off-black-ink"
                                                    : "text-ash hover:text-pure-white"
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
                                                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-ash hover:bg-off-black-ink hover:text-pure-white transition-all cursor-pointer"
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
                                                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-ash hover:bg-off-black-ink hover:text-pure-white transition-all cursor-pointer"
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
                                    className={`px-4 py-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all cursor-pointer ${
                                        activeSection === item.id
                                            ? "bg-electric-lime text-off-black-ink"
                                            : "text-ash hover:text-pure-white"
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
                            className="p-1.5 rounded-full border border-graphite/30 text-electric-lime cursor-pointer flex items-center justify-center"
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
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#14140f]/15">
                            <div className="flex items-center gap-1.5 bg-[#14140f]/10 p-1 rounded-lg border border-[#14140f]/10">
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
                                className="p-2.5 rounded-full border border-[#14140f]/20 text-[#14140f] cursor-pointer flex items-center justify-center"
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
                    className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
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
