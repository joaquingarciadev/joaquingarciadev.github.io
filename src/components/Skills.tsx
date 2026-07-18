import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { skillsData, Skill, projectsData } from "../data";
import RevealText from "./RevealText";

interface OpenWindow {
    skill: Skill;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Skills() {
    const { t, i18n } = useTranslation();
    const [openWindows, setOpenWindows] = useState<{
        [skillName: string]: OpenWindow;
    }>({});
    const [focusedWindow, setFocusedWindow] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState("");

    const locale = i18n.language === "es" ? "es-AR" : "en-US";

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString(locale, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }),
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [locale]);

    const openSkillWindow = (skill: Skill) => {
        setFocusedWindow(skill.name);
        if (openWindows[skill.name]) return;

        setOpenWindows((prev) => ({
            ...prev,
            [skill.name]: { skill },
        }));
    };

    const closeWindow = (name: string) => {
        setOpenWindows((prev) => {
            const copy = { ...prev };
            delete copy[name];
            return copy;
        });
        if (focusedWindow === name) {
            setFocusedWindow(null);
        }
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elRect = el.getBoundingClientRect().top;
            const pos = elRect - bodyRect - offset;
            window.scrollTo({ top: pos, behavior: "smooth" });
        }
    };

    return (
        <section
            id="habilidades"
            className="py-20 bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
        >
            <div className="w-full max-w-6xl mx-auto px-6">
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-xs font-display font-medium text-graphite dark:text-ash uppercase tracking-[0.15em] mb-3">
                        {t("skills.subtitle")}
                    </span>
                    <RevealText
                        as="h2"
                        text={t("skills.title")}
                        className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
                    />
                    <div className="h-1 w-16 bg-electric-lime mt-4 rounded-full" />
                </div>

                {/* Physical Monitor Container */}
                <div className="w-full max-w-5xl mx-auto">
                    {/* Monitor Frame */}
                    <div className="relative mx-auto bg-stone-200 dark:bg-stone-900 rounded-3xl p-3 md:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-4 border-stone-300 dark:border-stone-800 transition-all">
                        {/* Screen Bezel */}
                        <div className="relative bg-black rounded-xl overflow-hidden border border-neutral-900 shadow-inner">
                            {/* Virtual Screen Content Area */}
                            <div
                                className="min-h-[580px] max-h-[580px] sm:min-h-[500px] sm:max-h-[500px] aspect-[9/14] sm:aspect-[16/10] w-full relative select-none overflow-hidden bg-cover bg-center transition-all duration-500"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle at 50% 50%, rgba(190, 255, 80, 0.05) 0%, rgba(20, 20, 15, 0.95) 100%), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80")',
                                    backgroundColor: "#050505",
                                }}
                            >
                                <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-4">
                                    {/* Desktop Icon Grid */}
                                    <div className="flex-1 overflow-auto pb-14 pr-2">
                                        <div className="grid grid-flow-col grid-rows-5 sm:grid-rows-4 w-fit h-full justify-start gap-3 md:gap-4 p-1">
                                            {skillsData.map((skill) => {
                                                const isSelected =
                                                    focusedWindow ===
                                                    skill.name;
                                                return (
                                                    <button
                                                        key={skill.name}
                                                        onClick={() =>
                                                            openSkillWindow(
                                                                skill,
                                                            )
                                                        }
                                                        className={`flex flex-col items-center p-2 rounded-xl border border-transparent transition-all outline-none text-center cursor-pointer w-[72px] sm:w-[84px] ${
                                                            isSelected
                                                                ? "bg-white/15 dark:bg-white/15 border-white/20 scale-[1.03]"
                                                                : "hover:bg-white/5 dark:hover:bg-white/5 hover:border-white/10"
                                                        }`}
                                                    >
                                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 dark:bg-stone-950/40 backdrop-blur-md rounded-xl p-2 border border-white/10 shadow flex items-center justify-center relative">
                                                            <img
                                                                src={skill.img}
                                                                alt={skill.name}
                                                                className="w-full h-full object-contain filter brightness-110"
                                                                referrerPolicy="no-referrer"
                                                            />
                                                            {/* Shortcut Arrow Overlay */}
                                                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white/90 rounded border border-neutral-300 flex items-center justify-center shadow-xs">
                                                                <ExternalLink className="w-2.5 h-2.5 text-neutral-800" />
                                                            </div>
                                                        </div>
                                                        <span className="text-[10px] md:text-xs text-white font-sans font-medium mt-2 truncate w-full drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.85)]">
                                                            {skill.name}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Window Layer */}
                                    <AnimatePresence>
                                        {Object.keys(openWindows).map(
                                            (skillName) => {
                                                const win =
                                                    openWindows[skillName];
                                                const isFocused =
                                                    focusedWindow === skillName;
                                                const relatedProjects =
                                                    projectsData.filter((p) =>
                                                        p.skills.some(
                                                            (s) =>
                                                                s.toLowerCase() ===
                                                                skillName.toLowerCase(),
                                                        ),
                                                    );

                                                return (
                                                    <motion.div
                                                        key={skillName}
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.95,
                                                            y: 10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0.95,
                                                            y: 10,
                                                        }}
                                                        transition={{
                                                            duration: 0.15,
                                                        }}
                                                        onPointerDown={() =>
                                                            setFocusedWindow(
                                                                skillName,
                                                            )
                                                        }
                                                        className={`absolute flex flex-col rounded-xl overflow-hidden shadow-2xl border transition-all ${
                                                            isFocused
                                                                ? "border-electric-lime/80 bg-stone-900/98 dark:bg-stone-950/98 shadow-electric-lime/5 z-30"
                                                                : "border-white/10 bg-stone-900/85 dark:bg-stone-950/90 z-20"
                                                        }`}
                                                        style={{
                                                            top: "10%",
                                                            left: "10%",
                                                            width: "80%",
                                                            height: "calc(100% - 130px)",
                                                            minHeight: "220px",
                                                        }}
                                                    >
                                                        {/* Window Title Bar */}
                                                        <div className="bg-stone-850 border-b border-white/10 px-3 py-1.5 flex items-center justify-between">
                                                            <div className="flex items-center gap-2 text-[11px] font-mono text-white truncate">
                                                                <img
                                                                    src={
                                                                        win
                                                                            .skill
                                                                            .img
                                                                    }
                                                                    className="w-3.5 h-3.5 object-contain"
                                                                    referrerPolicy="no-referrer"
                                                                />
                                                                <span>
                                                                    {
                                                                        win
                                                                            .skill
                                                                            .name
                                                                    }
                                                                    .info
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={() =>
                                                                    closeWindow(
                                                                        skillName,
                                                                    )
                                                                }
                                                                className="w-5 h-5 rounded hover:bg-red-500 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                                                            >
                                                                <X className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>

                                                        {/* Window Content */}
                                                        <div className="flex-1 p-3 md:p-5 overflow-y-auto bg-stone-950/95 text-stone-200 space-y-4">
                                                            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                                                                <div className="min-w-0">
                                                                    <h4 className="text-lg md:text-xl font-bold font-display text-white">
                                                                        {
                                                                            win
                                                                                .skill
                                                                                .name
                                                                        }
                                                                    </h4>
                                                                    <p className="text-[10px] font-mono text-stone-400 mt-1">
                                                                        {t(
                                                                            "skills.since",
                                                                        )}{" "}
                                                                        {
                                                                            win
                                                                                .skill
                                                                                .year
                                                                        }{" "}
                                                                        •{" "}
                                                                        {CURRENT_YEAR -
                                                                            parseInt(
                                                                                win
                                                                                    .skill
                                                                                    .year,
                                                                                10,
                                                                            )}{" "}
                                                                        {CURRENT_YEAR -
                                                                            parseInt(
                                                                                win
                                                                                    .skill
                                                                                    .year,
                                                                                10,
                                                                            ) ===
                                                                        1
                                                                            ? t(
                                                                                  "skills.yearSingle",
                                                                              )
                                                                            : t(
                                                                                  "skills.years",
                                                                              )}{" "}
                                                                        {t(
                                                                            "skills.exp",
                                                                        )}
                                                                    </p>
                                                                </div>
                                                                <img
                                                                    src={
                                                                        win
                                                                            .skill
                                                                            .img
                                                                    }
                                                                    className="w-10 h-10 object-contain bg-white/5 rounded-xl p-2 border border-white/10 shrink-0"
                                                                    referrerPolicy="no-referrer"
                                                                />
                                                            </div>

                                                            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
                                                                {t(win.skill.descriptionKey)}
                                                            </p>

                                                            {/* Proficiency slider */}
                                                            <div className="space-y-1.5">
                                                                <div className="flex justify-between text-[10px] font-mono text-stone-400">
                                                                    <span>
                                                                        {t(
                                                                            "skills.proficiency",
                                                                        )}
                                                                    </span>
                                                                    <span className="text-electric-lime font-bold">
                                                                        {Math.min(
                                                                            100,
                                                                            Math.max(
                                                                                70,
                                                                                100 -
                                                                                    (CURRENT_YEAR -
                                                                                        parseInt(
                                                                                            win
                                                                                                .skill
                                                                                                .year,
                                                                                        )) *
                                                                                        2.5,
                                                                            ),
                                                                        )}
                                                                        %
                                                                    </span>
                                                                </div>
                                                                <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
                                                                    <div
                                                                        className="h-full bg-electric-lime rounded-full"
                                                                        style={{
                                                                            width: `${Math.min(100, Math.max(70, 100 - (CURRENT_YEAR - parseInt(win.skill.year)) * 2.5))}%`,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Related Projects */}
                                                            <div className="pt-2">
                                                                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-2">
                                                                    {t(
                                                                        "skills.projectsWithSkill",
                                                                    )}
                                                                </span>
                                                                {relatedProjects.length ===
                                                                0 ? (
                                                                    <p className="text-[11px] text-stone-500 font-mono italic">
                                                                        {t(
                                                                            "skills.noProjects",
                                                                        )}
                                                                    </p>
                                                                ) : (
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {relatedProjects.map(
                                                                            (
                                                                                proj,
                                                                            ) => (
                                                                                <button
                                                                                    key={
                                                                                        proj.name
                                                                                    }
                                                                                    onClick={() => {
                                                                                        scrollToSection(
                                                                                            "proyectos",
                                                                                        );
                                                                                    }}
                                                                                    className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-850 border border-white/5 px-2.5 py-1 rounded-lg text-xs text-stone-300 hover:text-white transition-colors cursor-pointer text-left"
                                                                                >
                                                                                    <span className="w-1.5 h-1.5 rounded-full bg-electric-lime" />
                                                                                    <span className="font-medium">
                                                                                        {
                                                                                            proj.name
                                                                                        }
                                                                                    </span>
                                                                                    <ExternalLink className="w-2.5 h-2.5 text-stone-500" />
                                                                                </button>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                );
                                            },
                                        )}
                                    </AnimatePresence>

                                    {/* Centered Taskbar */}
                                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] h-11 bg-stone-900/85 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between px-3 z-45 shadow-lg">
                                        {/* Left corner: Static Start Button with no functionality */}
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40">
                                                <svg
                                                    className="w-4.5 h-4.5 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M0 0h11.2v11.2H0zm12.8 0H24v11.2h-11.2zM0 12.8h11.2V24H0zm12.8 0H24V24h-11.2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Centered App List of Open Windows */}
                                        <div className="flex items-center gap-1.5">
                                            {Object.keys(openWindows).map(
                                                (skillName) => {
                                                    const win =
                                                        openWindows[skillName];
                                                    const isFocused =
                                                        focusedWindow ===
                                                        skillName;
                                                    return (
                                                        <button
                                                            key={skillName}
                                                            onClick={() => {
                                                                setFocusedWindow(
                                                                    isFocused
                                                                        ? null
                                                                        : skillName,
                                                                );
                                                            }}
                                                            className={`w-8 h-8 rounded-lg flex flex-col items-center justify-center relative transition-all duration-200 cursor-pointer ${
                                                                isFocused
                                                                    ? "bg-white/10 border border-white/10"
                                                                    : "hover:bg-white/5"
                                                            }`}
                                                            title={skillName}
                                                        >
                                                            <img
                                                                src={
                                                                    win.skill
                                                                        .img
                                                                }
                                                                className="w-5.5 h-5.5 object-contain"
                                                                referrerPolicy="no-referrer"
                                                            />
                                                            <div
                                                                className={`absolute bottom-0.5 h-0.5 bg-electric-lime rounded-full transition-all ${isFocused ? "w-3" : "w-1"}`}
                                                            />
                                                        </button>
                                                    );
                                                },
                                            )}
                                        </div>

                                        {/* Right System Tray (Clock only) */}
                                        <div className="text-right select-none font-mono text-[10px] text-stone-300 font-medium px-1">
                                            {currentTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bezel Controls */}
                        <div className="flex items-center justify-center mt-4 px-3 text-[9px] text-stone-500 font-mono select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-lime shadow-[0_0_6px_#beff50]"></span>
                        </div>
                    </div>

                    {/* Physical Neck & Feet Base */}
                    <div className="relative -mt-1 flex flex-col items-center">
                        {/* Bezel neck */}
                        <div className="w-16 md:w-20 h-8 md:h-11 bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 shadow-inner"></div>
                        {/* Flat support stand base */}
                        <div className="w-32 md:w-44 h-2 bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 dark:from-neutral-800 dark:via-neutral-900 dark:to-black rounded-t-lg shadow"></div>
                        {/* Reflected shadow */}
                        <div className="w-48 md:w-64 h-2 bg-neutral-200 dark:bg-neutral-950/40 rounded-full blur-md -mt-0.5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
