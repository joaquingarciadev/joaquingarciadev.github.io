import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-off-black-ink text-off-white-canvas py-12 transition-colors duration-300 border-t border-graphite/20 relative overflow-hidden">
      {/* Subtle green accent gradient spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-electric-lime rounded-full filter blur-[150px] opacity-5 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left/Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/joaquingarciadev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-electric-lime text-ash hover:text-electric-lime hover:scale-115 transition-all cursor-pointer"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-electric-lime text-ash hover:text-electric-lime hover:scale-115 transition-all cursor-pointer"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:djoako22@gmail.com"
            className="p-3 rounded-full bg-deep-charcoal border border-graphite/20 hover:border-electric-lime text-ash hover:text-electric-lime hover:scale-115 transition-all cursor-pointer"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right/Center: Copyright */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-graphite text-center sm:text-right">
          &copy; {new Date().getFullYear()} Joaquín García. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

