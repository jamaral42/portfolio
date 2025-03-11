import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaStar, FaBook, FaBriefcase, FaGlobe, FaArrowDown, FaArrowUp } from "react-icons/fa";

type TimelineItem = {
  date: string;
  title: string;
  place: string;
  description: string;
  main_topics: string;
  important?: boolean;
  study?: boolean;
  work?: boolean;
};

type TimelineProps = {
  onHeightChange: (height: number) => void;
  isMobile: boolean;
};

const Timeline: React.FC<TimelineProps> = ({ onHeightChange, isMobile }) => {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = useMemo(
    () =>
      Object.values(t("timeline", { returnObjects: true }))
        .filter((item) => typeof item === "object") as TimelineItem[],
    [t]
  );

  const [activeFilter, setActiveFilter] = useState("important");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const displayedTimeline = useMemo(() => {
    return timelineData
      .filter((item) => {
        if (activeFilter === "all") return true;
        if (activeFilter === "important") return item.important;
        if (activeFilter === "study") return item.study;
        if (activeFilter === "work") return item.work;
        return false;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date.split("-")[0]).getTime();
        const dateB = new Date(b.date.split("-")[0]).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
  }, [timelineData, activeFilter, sortOrder]);

  // Measure and report timeline height
  useEffect(() => {
    const measureHeight = () => {
      if (timelineRef.current) {
        onHeightChange(timelineRef.current.clientHeight);
      }
    };
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [displayedTimeline, onHeightChange]);

  return (
    <section ref={timelineRef}>
      <h2 className="text-3xl md:text-5xl font-[audiowide] font-bold text-center text-gunmetal mt-20 mb-10">
        {t("timeline_title")}
      </h2>

      <div className="grid grid-cols-2 justify-items-center gap-4 md:flex md:justify-center md:items-center mb-8">
        {[
          { label: t("timeline_relevant"), value: "important", icon: <FaStar /> },
          { label: t("timeline_education"), value: "study", icon: <FaBook /> },
          { label: t("timeline_work"), value: "work", icon: <FaBriefcase /> },
          { label: t("timeline_all"), value: "all", icon: <FaGlobe /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex items-center justify-center space-x-2 px-4 py-2 w-40 md:w-50 rounded-full transition-all focus:ring cursor-pointer hover:bg-tiffany-blue hover:text-white ${
              activeFilter === value ? "bg-tiffany-blue text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveFilter(value)}
            aria-label={label}
          >
            {icon} <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <button
          className="px-4 py-2 w-40 md:w-50 rounded-full bg-gray-300 text-gray-800 cursor-pointer hover:bg-tiffany-blue hover:text-white flex items-center justify-center space-x-2 transition-all gap-2 focus:ring"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? t("timeline_oldest") : t("timeline_newest")}
          {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>

      {/* Timeline line */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute top-0 left-[6%] w-1 bg-tiffany-blue h-[calc(100%-80px)] md:left-1/2 md:transform md:-translate-x-1/2"></div>

        <div className="relative pb-20">
          {displayedTimeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center w-full py-2 ${
                index % 2 === 0 ? "justify-center md:justify-end" : "justify-center md:justify-start"
              }`}
              initial={{ opacity: 0, x: isMobile ? 100 : index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="absolute left-0 w-4 h-4 bg-tiffany-blue rounded-full border-4 border-white shadow-lg md:left-1/2 md:transform md:-translate-x-1/2 top-8"></div>

              <div className="w-[90%] bg-white p-3 rounded-2xl shadow-lg text-gray-800 md:w-[48%] md:p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-tiffany-blue font-semibold">{item.date}</h2>
                  <p className="text-sm text-gunmetal">{item.place}</p>
                </div>

                <div className="w-full h-0.5 bg-gunmetal/30"></div>
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                <div className="w-full h-0.5 bg-gunmetal/30"></div>

                <p className="text-md my-2">{item.description}</p>
                <p className="text-sm text-gunmetal/60 italic">{item.main_topics}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
