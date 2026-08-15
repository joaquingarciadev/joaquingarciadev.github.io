import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Code2, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { t } = useTranslation();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.92, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        once: true,
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="sobre-mi"
            className="py-24 bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
        >
            <div className="w-full max-w-5xl mx-auto px-6 relative">
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-display font-medium text-graphite dark:text-ash uppercase tracking-[0.15em] mb-3">
                        {t("about.eyebrow")}
                    </span>
                    <RevealText
                        as="h2"
                        text={t("about.title")}
                        className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
                    />
                    <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand-light mt-4 rounded-full" />
                </div>

                {/* Centered content (Fade Zoom Up Animated Container) */}
                <div
                    ref={contentRef}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Description */}
                    <div className="relative">
                        <p className="font-sans text-lg text-off-black-ink dark:text-off-white-canvas leading-relaxed relative z-10 font-medium">
                            {t("about.p1")}
                        </p>

                        <p className="font-sans text-base text-graphite dark:text-ash leading-relaxed mt-4 relative z-10">
                            {t("about.p2")}
                        </p>
                    </div>

                    {/* Horizontal list of highlights */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        {/* Highlight Item: Profile */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pure-white dark:bg-deep-charcoal/70 border border-ash/15 dark:border-brand-glow/15 transition-all">
                            <div className="p-3 rounded-xl bg-brand text-pure-white mb-4">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-display font-semibold text-sm text-off-black-ink dark:text-off-white-canvas">
                                    {t("about.developer")}
                                </h4>
                                <p className="font-sans text-xs text-graphite dark:text-ash mt-1">
                                    {t("about.since")}
                                </p>
                            </div>
                        </div>

                        {/* Highlight Item 2 (Specialty) */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pure-white dark:bg-deep-charcoal/70 border border-ash/15 dark:border-brand-glow/15 transition-all">
                            <div className="p-3 rounded-xl bg-brand text-pure-white mb-4">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-display font-semibold text-sm text-off-black-ink dark:text-off-white-canvas">
                                    {t("about.specialty")}
                                </h4>
                                <p className="font-sans text-xs text-graphite dark:text-ash mt-1">
                                    WordPress, WooCommerce & Elementor
                                </p>
                            </div>
                        </div>

                        {/* Highlight Item 3 (Location) */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pure-white dark:bg-deep-charcoal/70 border border-ash/15 dark:border-brand-glow/15 transition-all">
                            <div className="p-3 rounded-xl bg-brand text-pure-white mb-4">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-display font-semibold text-sm text-off-black-ink dark:text-off-white-canvas">
                                    {t("about.location")}
                                </h4>
                                <p className="font-sans text-xs text-graphite dark:text-ash mt-1">
                                    Córdoba, Argentina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}