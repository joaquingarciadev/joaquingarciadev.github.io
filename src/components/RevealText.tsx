import { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export default function RevealText({ text, className = "", as = "h2" }: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false); // Reset visibility when text changes (e.g. language toggle)

    let active = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (active && entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Activates when 20% is visible
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      active = false;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [text]); // Re-run if text changes (e.g. language toggle)

  // Split text by space. Keep spaces clean.
  const words = text.trim().split(/\s+/);
  const Tag = as;

  return (
    <Tag
      ref={containerRef as any}
      className={`${className} ${isVisible ? "is-visible" : ""}`}
    >
      {words.map((word, index) => {
        // Calculate stagger delay
        const delay = index * 0.05;
        const cleanWord = word.replace(/[¡!.,¿?]/g, "");
        const isGradientWord = cleanWord === "Joaquín" || cleanWord === "García";
        const wordClass = isGradientWord
          ? "text-transparent bg-clip-text bg-gradient-to-r from-off-black-ink via-graphite to-stone dark:from-pure-white dark:via-ash dark:to-stone"
          : "";

        return (
          <span key={index} className="wrapper wrapper-words">
            <span
              className={`inner-text ${wordClass}`}
              style={{
                animationDelay: `${delay}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
