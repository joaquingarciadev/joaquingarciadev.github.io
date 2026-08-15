import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, FolderGit2, Layout, Building2, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import RevealText from "./RevealText";
import FlipText from "./FlipText";

interface HeroProps {
    onContactClick: () => void;
    onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
    const { t } = useTranslation();

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
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 px-3 py-1 bg-brand/10 dark:bg-brand/20 border border-brand/25 dark:border-brand-glow/30 text-brand dark:text-brand-glow rounded-full text-xs font-display font-medium tracking-widest uppercase mb-6"
                    >
                        <Sparkles
                            className="w-3.5 h-3.5 animate-spin"
                            style={{ animationDuration: "3s" }}
                        />
                        {t("hero.available")}
                    </motion.div>

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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
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
                    </motion.div>
                </div>

                {/* Right Side: Image with Floating Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, -6, 0] }}
                            transition={{
                                opacity: { duration: 0.6, delay: 0.6 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute -top-3 -left-3 md:-top-5 md:-left-5 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-pink-500 text-pure-white">
                                <Layout className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Landing page")}
                            </span>
                        </motion.div>

                        {/* Floating Badge 2: Institucional */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, 6, 0] }}
                            transition={{
                                opacity: { duration: 0.6, delay: 0.8 },
                                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute top-1/2 -right-3 md:-right-7 -translate-y-1/2 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-sky-500 text-pure-white">
                                <Building2 className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Institucional")}
                            </span>
                        </motion.div>

                        {/* Floating Badge 3: Ecommerce */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, -5, 0] }}
                            transition={{
                                opacity: { duration: 0.6, delay: 1.0 },
                                y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute -bottom-3 left-4 md:-bottom-5 md:left-6 bg-pure-white/85 dark:bg-deep-charcoal/80 backdrop-blur-md border border-ash/40 dark:border-brand-glow/25 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none select-none"
                        >
                            <div className="p-1.5 rounded-xl bg-amber-500 text-pure-white">
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                            <span className="font-display text-xs font-bold text-off-black-ink dark:text-off-white-canvas whitespace-nowrap">
                                {t("projects.filters.Ecommerce")}
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}