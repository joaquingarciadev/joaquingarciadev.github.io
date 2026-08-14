import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "span" | "div";
    gradient?: boolean;
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

export default function RevealText({
    text,
    className = "",
    as = "h2",
    gradient = false,
}: RevealTextProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

        el.innerHTML = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br>");

        let split: SplitText | null = null;
        let tween: gsap.core.Tween | null = null;
        let disposed = false;

        const fontsReady = document.fonts?.ready ?? Promise.resolve();

        fontsReady.then(() => {
            if (disposed) return;

            split = SplitText.create(el, {
                type: "lines,words",
                mask: "lines",
                autoSplit: true,
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
                    } else {
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
        });

        return () => {
            disposed = true;
            if (tween) {
                tween.scrollTrigger?.kill();
                tween.kill();
            }
            if (split) split.revert();
        };
    }, [text, gradient]);

    const Tag = as;

    return (
        <Tag ref={ref as any} className={className}>
            {text}
        </Tag>
    );
}
