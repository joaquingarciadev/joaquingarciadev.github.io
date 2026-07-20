import { useTranslation } from "react-i18next";
import { MapPin, Code2, User, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";
import FlipText from "./FlipText";

export default function About() {
    const { t } = useTranslation();

    const handleScrollToContact = () => {
        const element = document.getElementById("contacto");
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
        }
    };

    return (
        <section
            id="sobre-mi"
            className="py-24 bg-off-white-canvas dark:bg-deep-charcoal transition-colors duration-300 relative overflow-hidden"
        >
            <div className="w-full max-w-5xl mx-auto px-6">
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
                    <div className="h-1 w-16 bg-electric-lime mt-4 rounded-full" />
                </div>

                {/* Content Card (White Surface Card) */}
                <div className="bg-pure-white dark:bg-off-black-ink rounded-[28px] p-8 md:p-12 border border-ash/30 dark:border-graphite/20 relative z-10 transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Side: Paragraph from User */}
                        <div className="lg:col-span-7 flex flex-col justify-center lg:order-first">
                            <div className="relative">
                                {/* Visual accent */}

                                <p className="font-sans text-lg text-off-black-ink dark:text-off-white-canvas leading-relaxed relative z-10 font-medium">
                                    {t("about.p1")}
                                </p>

                                <p className="font-sans text-base text-graphite dark:text-ash leading-relaxed mt-4 relative z-10">
                                    {t("about.p2")}
                                </p>

                                <div className="mt-8 relative z-10">
                                    <button
                                        onClick={handleScrollToContact}
                                        className="group px-6 py-3 bg-electric-lime text-off-black-ink hover:bg-electric-lime/90 rounded-full font-display font-semibold text-xs uppercase tracking-wider cursor-pointer transition-all active:scale-95 flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-electric-lime/10"
                                    >
                                        <FlipText>
                                            {t("about.contact")}
                                        </FlipText>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Editorial highlights */}
                        <div className="lg:col-span-5 flex flex-col gap-6 lg:order-last">
                            {/* Highlight Item: Profile */}
                            <div className="flex gap-4 items-start p-5 rounded-2xl bg-off-white-canvas dark:bg-deep-charcoal/40 border border-ash/15 transition-all">
                                <div className="p-3 rounded-xl bg-electric-lime text-off-black-ink">
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

                            {/* Highlight Item 2 (Specialty - now second) */}
                            <div className="flex gap-4 items-start p-5 rounded-2xl bg-off-white-canvas dark:bg-deep-charcoal/40 border border-ash/15 transition-all">
                                <div className="p-3 rounded-xl bg-electric-lime text-off-black-ink">
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

                            {/* Highlight Item 1 (Location - now third) */}
                            <div className="flex gap-4 items-start p-5 rounded-2xl bg-off-white-canvas dark:bg-deep-charcoal/40 border border-ash/15 transition-all">
                                <div className="p-3 rounded-xl bg-electric-lime text-off-black-ink">
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
            </div>
        </section>
    );
}
