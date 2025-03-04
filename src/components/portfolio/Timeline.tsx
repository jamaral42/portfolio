import React, { useState, useMemo, useEffect, useRef, Dispatch, SetStateAction } from "react";
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
  onHeightChange: Dispatch<SetStateAction<number>>;
};

const Timeline: React.FC<TimelineProps> = ({ onHeightChange }) => {
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

  // Update height whenever timeline changes
  useEffect(() => {
    if (timelineRef.current) {
      onHeightChange(timelineRef.current.clientHeight);
    }
  }, [displayedTimeline, onHeightChange]);

  return (
    <section ref={timelineRef}>
      <h2 className="text-2xl font-bold text-center text-gunmetal mt-20 mb-10">
        {t("timeline_title")}
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {[
          { label: t("timeline_relevant"), value: "important", icon: <FaStar /> },
          { label: t("timeline_education"), value: "study", icon: <FaBook /> },
          { label: t("timeline_work"), value: "work", icon: <FaBriefcase /> },
          { label: t("timeline_all"), value: "all", icon: <FaGlobe /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all focus:ring cursor-pointer hover:bg-tiffany-blue hover:text-white ${
              activeFilter === value ? "bg-tiffany-blue text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveFilter(value)}
            aria-label={label}
          >
            {icon} <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Sort Order Toggle */}
      <div className="flex justify-center mb-8">
        <button
          className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 cursor-pointer hover:bg-tiffany-blue hover:text-white flex items-center space-x-2 transition-all gap-2 focus:ring"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? t("timeline_oldest") : t("timeline_newest")}
          {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-tiffany-blue h-[calc(100%-80px)]"></div>

        {/* Timeline Items */}
        <div className="relative px-2 pb-20">
          {displayedTimeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tiffany-blue rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Box */}
              <div className="w-[48%] bg-white p-4 rounded-2xl shadow-lg text-gray-800">
                <span className="text-tiffany-blue font-semibold">{item.date}</span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.place}</p>
                <p className="text-md mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
