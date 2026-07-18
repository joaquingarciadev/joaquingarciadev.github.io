import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { projectsData, Project } from "../data";
import RevealText from "./RevealText";
import FlipText from "./FlipText";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface ProjectsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function Projects({
  activeFilter,
  setActiveFilter,
}: ProjectsProps) {
  const { t } = useTranslation();

  const filters = [
    { id: "Todos", label: t("projects.filters.Todos") },
    { id: "Landing page", label: t("projects.filters.Landing page") },
    { id: "Institucional", label: t("projects.filters.Institucional") },
    { id: "Catálogo", label: t("projects.filters.Catálogo") },
    { id: "Ecommerce", label: t("projects.filters.Ecommerce") },
    { id: "Otros", label: t("projects.filters.Otros") },
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projectsData
      : projectsData.filter((project: Project) => project.type === activeFilter);

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0, 0);
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  }, [activeFilter, swiperInstance]);

  return (
    <section
      id="proyectos"
      className="py-24 bg-off-white-canvas dark:bg-deep-charcoal transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-display font-medium text-graphite dark:text-ash uppercase tracking-[0.15em] mb-3">
            {t("projects.eyebrow")}
          </span>
          <RevealText
            as="h2"
            text={t("projects.title")}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-black-ink dark:text-off-white-canvas"
          />
          <div className="h-1 w-16 bg-electric-lime mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-1 bg-pure-white dark:bg-off-black-ink p-1.5 rounded-full border border-ash/30 dark:border-graphite/30 max-w-full overflow-x-auto no-scrollbar shadow-sm relative z-0">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`relative px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer select-none focus:outline-none ${
                    isActive
                      ? "text-off-black-ink"
                      : "text-graphite dark:text-ash hover:text-off-black-ink dark:hover:text-pure-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-electric-lime rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <FlipText>{f.label}</FlipText>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Counter and Navigation Controls */}
        <div className="flex justify-between items-center mb-6 px-2">
          <p className="font-mono text-[11px] uppercase tracking-wider text-graphite dark:text-ash">
            {t("projects.showing")}{" "}
            <span className="font-bold text-off-black-ink dark:text-electric-lime">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1
              ? t("projects.project_single")
              : t("projects.project_plural")}
          </p>

          {filteredProjects.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                disabled={isBeginning}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-ash/30 dark:border-graphite/40 transition-all duration-200 cursor-pointer ${
                  isBeginning
                    ? "opacity-30 cursor-not-allowed text-stone"
                    : "text-off-black-ink dark:text-off-white-canvas bg-pure-white dark:bg-off-black-ink hover:border-electric-lime dark:hover:border-electric-lime hover:scale-105 active:scale-95"
                }`}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                disabled={isEnd}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-ash/30 dark:border-graphite/40 transition-all duration-200 cursor-pointer ${
                  isEnd
                    ? "opacity-30 cursor-not-allowed text-stone"
                    : "text-off-black-ink dark:text-off-white-canvas bg-pure-white dark:bg-off-black-ink hover:border-electric-lime dark:hover:border-electric-lime hover:scale-105 active:scale-95"
                }`}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Carousel with Swiper */}
        {filteredProjects.length > 0 ? (
          <Swiper
            key={activeFilter}
            modules={[Pagination]}
            pagination={{ type: "progressbar" }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="projects-swiper w-full"
          >
            {filteredProjects.map((project: Project) => {
              const translatedDesc = t(project.descriptionKey);

              return (
                <SwiperSlide key={project.name} className="!h-auto flex">
                  <div
                    id={`project-card-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                    data-project-type={project.type}
                    className="group relative bg-pure-white dark:bg-off-black-ink rounded-[28px] overflow-hidden border border-ash/30 dark:border-graphite/20 hover:border-electric-lime dark:hover:border-electric-lime transition-all duration-300 flex flex-col h-full w-full"
                  >
                    {/* Project Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-off-white-canvas dark:bg-deep-charcoal border-b border-ash/20 dark:border-graphite/20">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {/* Category overlay */}
                      <span className="absolute bottom-4 left-4 bg-off-black-ink/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-electric-lime uppercase px-2.5 py-1 rounded-full border border-electric-lime/20">
                        {t(`projects.filters.${project.type}`)}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between relative">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -top-7 right-6 w-14 h-14 bg-electric-lime text-off-black-ink hover:text-electric-lime hover:bg-off-black-ink dark:hover:bg-pure-white dark:hover:text-off-black-ink rounded-full flex items-center justify-center border-4 border-pure-white dark:border-off-black-ink hover:scale-110 active:scale-95 transition-all z-20"
                        title={t("projects.view_live")}
                      >
                        <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                      </a>

                      <div>
                        <h3 className="font-display font-bold text-xl text-off-black-ink dark:text-off-white-canvas leading-snug mb-3 pr-12 truncate" title={project.name}>
                          {project.name}
                        </h3>

                        <div
                          className="font-sans text-sm text-graphite dark:text-ash leading-relaxed mb-6 select-text prose prose-sm dark:prose-invert"
                          dangerouslySetInnerHTML={{ __html: translatedDesc }}
                        />
                      </div>

                      {/* Skills tags */}
                      <div className="pt-4 border-t border-ash/15 dark:border-graphite/10">
                        <div className="flex flex-wrap gap-1.5">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-off-white-canvas dark:bg-deep-charcoal text-[10px] font-mono font-medium tracking-wide text-graphite dark:text-ash px-2 py-0.5 rounded-full border border-ash/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-pure-white dark:bg-off-black-ink rounded-[28px] border border-ash/30 dark:border-graphite/20">
            <AlertCircle className="w-10 h-10 text-stone mb-3" />
            <p className="font-sans text-sm text-graphite dark:text-ash">
              {t("projects.no_projects")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}