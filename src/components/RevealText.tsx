import { useEffect, useRef } from "react";
import type gsapType from "gsap";
import type { SplitText as SplitTextType } from "gsap/SplitText";

interface RevealTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
    gradient?: boolean;
    highlightNames?: boolean;
}

const GRADIENT_WORDS = new Set(["Joaquín", "Joaquin", "García", "Garcia"]);

const GRADIENT_CLASSES = [
    "text-transparent",
    "bg-clip-text",
    "bg-gradient-to-r",
    "from-brand-light",
    "via-brand-glow",
    "to-brand",
    "dark:from-pure-white",
    "dark:via-brand-glow",
    "dark:to-brand",
];

const LINE_GRADIENT_CLASSES = [
    "dark:text-transparent",
    "dark:bg-clip-text",
    "dark:bg-gradient-to-b",
    "dark:from-off-white-canvas",
    "dark:to-brand-glow",
];

// GSAP se descarga fuera del bundle inicial (una sola vez, compartido)
let gsapPromise: Promise<{
    gsap: typeof gsapType;
    SplitText: typeof SplitTextType;
}> | null = null;

function loadGsap() {
    if (!gsapPromise) {
        gsapPromise = Promise.all([
            import("gsap"),
            import("gsap/ScrollTrigger"),
            import("gsap/SplitText"),
        ]).then(([{ default: gsap }, { ScrollTrigger }, { SplitText }]) => {
            gsap.registerPlugin(ScrollTrigger, SplitText);
            return { gsap, SplitText };
        });
    }
    return gsapPromise;
}

export default function RevealText({
    text,
    className = "",
    as = "h2",
    gradient = false,
    highlightNames = true,
}: RevealTextProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // El HTML prerenderizado llega oculto (.reveal-pending) para que el texto no
        // aparezca quieto y luego "salte" a su animación de entrada
        const reveal = () => el.classList.remove("reveal-pending");

        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
            reveal();
            return;
        }

        el.innerHTML = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br>");

        let split: SplitTextType | null = null;
        let tween: ReturnType<typeof gsapType.from> | null = null;
        let disposed = false;

        const fontsReady = document.fonts?.ready ?? Promise.resolve();

        const run = () => {
            Promise.all([loadGsap(), fontsReady]).then(([{ gsap, SplitText }]) => {
                if (disposed) return;

                split = SplitText.create(el, {
                    type: "lines,words",
                    mask: "lines",
                    autoSplit: true,
                    // aria-label no está permitido en <p>/<span>/<div>: ahí se deja el texto legible
                    aria: /^h[1-6]$/.test(as) ? "auto" : "none",
                    onSplit: (self) => {
                        if (tween) {
                            tween.scrollTrigger?.kill();
                            tween.kill();
                            tween = null;
                        }

                        if (gradient) {
                            self.lines.forEach((line) =>
                                (line as HTMLElement).classList.add(
                                    ...LINE_GRADIENT_CLASSES,
                                ),
                            );
                        } else if (highlightNames) {
                            self.words.forEach((word) => {
                                const clean = word.textContent
                                    ?.replace(/[¡!.,¿?]/g, "")
                                    .trim();
                                if (clean && GRADIENT_WORDS.has(clean)) {
                                    (word as HTMLElement).classList.add(
                                        ...GRADIENT_CLASSES,
                                    );
                                }
                            });
                        }

                        tween = gsap.from(self.lines, {
                            yPercent: 110,
                            autoAlpha: 0,
                            stagger: 0.08,
                            duration: 0.7,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 88%",
                                once: true,
                            },
                        });
                    },
                });
                reveal();
            }).catch(reveal);
        };

        // Divide el texto recién cuando se acerca al viewport (un alto de pantalla antes)
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                run();
            },
            { rootMargin: "100% 0px 100% 0px" },
        );
        observer.observe(el);

        return () => {
            disposed = true;
            observer.disconnect();
            if (tween) {
                tween.scrollTrigger?.kill();
                tween.kill();
            }
            if (split) split.revert();
        };
    }, [text, gradient, highlightNames, as]);

    const Tag = as;

    return (
        <Tag ref={ref as any} className={`${className} reveal-pending`}>
            {text}
        </Tag>
    );
}
