import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, FolderGit2 } from "lucide-react";
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
      {/* Editorial Grid Background Decoration */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-off-black-ink dark:border-pure-white h-full" />
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 bg-electric-lime text-off-black-ink rounded-full text-xs font-display font-medium tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
            {t("hero.available")}
          </motion.div>

          {/* Main Display Heading */}
          <RevealText
            as="h1"
            text={t("hero.greeting")}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-off-black-ink dark:text-off-white-canvas mb-4"
          />

          {/* Professional Role Subtitle */}
          <div className="mb-6">
            <RevealText
              as="h2"
              text={t("hero.role")}
              className="font-display text-2xl md:text-4xl font-medium tracking-tight text-off-black-ink dark:text-electric-lime"
            />
            <div className="h-1.5 w-24 bg-electric-lime mt-3 rounded-full" />
          </div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-graphite dark:text-ash/90 leading-relaxed max-w-xl mb-10"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            {/* Primary Button (Electric Lime Pill) */}
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 bg-electric-lime text-off-black-ink rounded-full font-display font-medium text-base hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg hover:shadow-electric-lime/10"
            >
              <FlipText>{t("hero.cta_contact")}</FlipText>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary Ghost Button with Underline Link */}
            <button
              onClick={onProjectsClick}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-ash dark:border-graphite text-off-black-ink dark:text-off-white-canvas rounded-full font-display font-medium text-base hover:bg-off-white-canvas dark:hover:bg-deep-charcoal active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FolderGit2 className="w-5 h-5 text-graphite dark:text-ash" />
              <FlipText>{t("hero.cta_work")}</FlipText>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <img
            src="/images/misc/hero_image.webp"
            alt="Joaquín García - Desarrollador Web"
            className="w-full max-w-[420px] h-auto object-cover rounded-[28px] drop-shadow-lg dark:drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
