import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import RevealText from "./RevealText";

export default function About() {
    const { t } = useTranslation();

    return (
        <section
            id="sobre-mi"
            className="py-24 bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
        >
            <div className="w-full max-w-5xl mx-auto px-6 relative">
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <RevealText
                        as="h2"
                        text={t("about.title")}
                        className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
                    />
                    <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand-light mt-4 rounded-full" />
                </div>

                {/* Centered content (Fade Up Animated Container) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Description */}
                    <div className="relative">
                        <RevealText
                            as="p"
                            text={t("about.description")}
                            className="font-sans text-lg text-off-black-ink dark:text-off-white-canvas leading-relaxed relative z-10 font-medium"
                            highlightNames={false}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}