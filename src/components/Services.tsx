import { useRef, useEffect } from "react";
import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Zap, LifeBuoy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { t } = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const grid = gridRef.current;
      if (!grid) return;
      const cards = grid.children;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
      }
    });
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.querySelectorAll(".spotlight-card"),
        { opacity: 0, y: 35, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            once: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  const servicesList = [
    {
      icon: <Layout className="w-6 h-6 text-brand dark:text-brand-glow" />,
      titleKey: "services.s1_title",
      descKey: "services.s1_desc",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand dark:text-brand-glow" />,
      titleKey: "services.s2_title",
      descKey: "services.s2_desc",
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-brand dark:text-brand-glow" />,
      titleKey: "services.s3_title",
      descKey: "services.s3_desc",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-display font-medium text-graphite dark:text-ash uppercase tracking-[0.15em] mb-3">
            {t("services.eyebrow")}
          </span>
          <RevealText
            as="h2"
            text={t("services.title")}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
          />
          <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand-light mt-4 rounded-full" />
        </div>

        {/* Services Grid with Gsap Stagger Cards */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 spotlight-group"
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="spotlight-card flex flex-col"
            >
              <div className="spotlight-card-inner p-8 flex flex-col justify-between h-full">
                <div>
                  {/* Icon Badge container */}
                  <div className="w-12 h-12 rounded-2xl bg-pure-white dark:bg-off-black-ink border border-ash/20 dark:border-graphite/20 flex items-center justify-center mb-8 shadow-sm relative z-10">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-xl text-off-black-ink dark:text-off-white-canvas mb-4 leading-tight">
                    {t(service.titleKey)}
                  </h3>

                  {/* Service Description */}
                  <p className="font-sans text-sm text-graphite dark:text-ash leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}