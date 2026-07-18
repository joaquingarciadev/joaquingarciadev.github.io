import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Zap, LifeBuoy } from "lucide-react";
import RevealText from "./RevealText";

export default function Services() {
  const { t } = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const servicesList = [
    {
      icon: <Layout className="w-6 h-6 text-off-black-ink dark:text-electric-lime" />,
      titleKey: "services.s1_title",
      descKey: "services.s1_desc",
    },
    {
      icon: <Zap className="w-6 h-6 text-off-black-ink dark:text-electric-lime" />,
      titleKey: "services.s2_title",
      descKey: "services.s2_desc",
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-off-black-ink dark:text-electric-lime" />,
      titleKey: "services.s3_title",
      descKey: "services.s3_desc",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-pure-white dark:bg-off-black-ink transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
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
          <div className="h-1 w-16 bg-electric-lime mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 spotlight-group"
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              id={`service-card-${index}`}
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
