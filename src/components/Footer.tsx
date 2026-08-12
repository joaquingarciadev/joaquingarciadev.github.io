import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-off-black-ink text-off-white-canvas py-12 transition-colors duration-300 border-t border-graphite/20 relative overflow-hidden">
            {/* Section background pattern */}
            <div className="section-bg-grid" />

            <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left/Center: Social Icons */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/joaquingarciadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-brand-glow text-ash hover:text-brand-glow hover:scale-115 transition-all cursor-pointer"
                        title="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joaquingarciadev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-brand-glow text-ash hover:text-brand-glow hover:scale-115 transition-all cursor-pointer"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="mailto:djoako22@gmail.com"
                        className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-brand-glow text-ash hover:text-brand-glow hover:scale-115 transition-all cursor-pointer"
                        title="Email"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                </div>

                {/* Right/Center: Copyright */}
                <p className="font-mono text-[10px] uppercase tracking-widest text-graphite text-center sm:text-right">
                    &copy; {new Date().getFullYear()} Joaquin Garcia.{" "}
                    {t("footer.rights")}
                </p>
            </div>
        </footer>
    );
}