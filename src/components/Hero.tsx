import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, FolderGit2, Layout, Building2, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import RevealText from "./RevealText";
import FlipText from "./FlipText";

interface HeroProps {
    onContactClick: () => void;
    onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
    const { t } = useTranslation();
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const badge1Ref = useRef<HTMLDivElement>(null);
    const badge2Ref = useRef<HTMLDivElement>(null);
    const badge3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                eyebrowRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            );
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power2.out" },
            );
            gsap.fromTo(
                imageRef.current,
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
            );

            const fadeIn = (el: HTMLElement | null, delay: number, y: number) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { opacity: 0, y },
                    { opacity: 1, y: 0, duration: 0.6, delay, ease: "power2.out" },
                );
            };
            const oscillate = (
                el: HTMLElement | null,
                y: number,
                legDuration: number,
                delay: number,
            ) => {
                if (!el) return;
                gsap.to(el, {
                    y,
                    duration: legDuration,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    delay,
                });
            };

            fadeIn(badge1Ref.current, 0.6, 20);
            oscillate(badge1Ref.current, -6, 2, 1.2);
            fadeIn(badge2Ref.current, 0.8, 20);
            oscillate(badge2Ref.current, 6, 2.25, 1.4);
            fadeIn(badge3Ref.current, 1.0, 20);
            oscillate(badge3Ref.current, -5, 1.9, 1.6);
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="inicio"
            className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
        >
            {/* Quantix: background pattern (blur-free) */}
            <div className="section-bg-grid" />

            <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Side: Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    {/* Eyebrow Label */}
                    <div
                        ref={eyebrowRef}
                        className="flex items-center gap-2 px-3 py-1 bg-brand/10 dark:bg-brand/20 border border-brand/25 dark:border-brand-glow/30 text-brand dark:text-brand-glow rounded-full text-xs font-display font-medium tracking-widest uppercase mb-6"
                    >
                        <Sparkles
                            className="w-3.5 h-3.5 animate-spin"
                            style={{ animationDuration: "3s" }}
                        />
                        {t("hero.available")}
                    </div>

                    {/* Main Display Heading */}
                    <RevealText
                        as="h1"
                        gradient
                        text={t("hero.greeting")}
                        className="font-display text-5xl md:text-7xl font-bold leading-tight text-off-black-ink dark:text-off-white-canvas mb-6"
                    />

                    {/* Professional Role Subtitle */}
                    <div className="mb-10">
                        <RevealText
                            as="h2"
                            text={t("hero.role")}
                            className="font-display text-2xl md:text-4xl font-medium text-graphite dark:text-ash"
                        />
                    </div>

                    {/* CTA Button Group */}
                    <div
                        ref={ctaRef}
                        className="flex flex-wrap gap-4 w-full sm:w-auto"
                    >
                        {/* Primary Button (Purple Pill) */}
                        <button
                            onClick={onContactClick}
                            className="w-full sm:w-auto px-8 py-4 bg-brand text-pure-white rounded-full font-display font-medium text-base hover:bg-brand-light active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        >
                            <FlipText>{t("hero.cta_contact")}</FlipText>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </button>

                        {/* Secondary Ghost Button with Underline Link */}
                        <button
                            onClick={onProjectsClick}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-ash/60 dark:border-brand-glow/40 text-off-black-ink dark:text-pure-white rounded-full font-display font-medium text-base hover:border-brand dark:hover:border-brand-glow hover:bg-brand/5 dark:hover:bg-brand-glow/5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FolderGit2 className="w-5 h-5 text-brand dark:text-brand-glow" />
                            <FlipText>{t("hero.cta_work")}</FlipText>
                        </button>
                    </div>
                </div>

                {/* Right Side: Image with Floating Badges */}
                <div
                    ref={imageRef}
                    className="lg:col-span-5 flex justify-center"
                >
                    <div className="relative w-full max-w-[420px]">
                        <img
                            src="/images/misc/hero_image.webp"
                            alt="Joaquín García - Desarrollador Web"
                            width="700"
                            height="725"
                            fetchPriority="high"
                            decoding="async"
                            className="w-full h-auto object-cover rounded-[28px] drop-shadow-lg dark:drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
                        />

                        {/* Floating Badge 1: Landing page */}
                        <div
                            ref={badge1Ref}
                            className="absolute -top-3 -left-3 md:-top-5 md:-left-5 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-pink-500 text-pure-white">
                                <Layout className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Landing page")}
                            </span>
                        </div>

                        {/* Floating Badge 2: Institucional */}
                        <div
                            ref={badge2Ref}
                            className="absolute top-1/2 -right-3 md:-right-7 -translate-y-1/2 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-sky-500 text-pure-white">
                                <Building2 className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Institucional")}
                            </span>
                        </div>

                        {/* Floating Badge 3: Ecommerce */}
                        <div
                            ref={badge3Ref}
                            className="absolute -bottom-3 left-4 md:-bottom-5 md:left-6 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-amber-500 text-pure-white">
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Ecommerce")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}