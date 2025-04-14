import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import wordleLogo from "../assets/wordle-logo.webp";
import stockPreview from "../assets/stock-preview.webp";

const projects = [
  {
    href: "/wordle",
    image: wordleLogo,
    alt: "Wordle App Preview",
  },
  {
    href: "/stock-tracker",
    image: stockPreview,
    alt: "Stock Screener Preview",
  },
];

interface WeatherData {
  current: {
    temp: number;
    description: string;
    icon: string;
  };
  forecast: {
    temp: number;
    description: string;
    icon: string;
    date: string;
  }[];
}

const Main: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const [time, setTime] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const date = new Date();
    setTime(date.toLocaleTimeString());

    fetch("/api/weather")
      .then((res) => res.json())
      .then((data: WeatherData) => setWeather(data))
      .catch((err) => console.error("Failed to fetch weather", err));
  }, []);

  const renderWeather = () => {
    if (!weather) return null;

    const { current } = weather;
    const iconUrl = `https://openweathermap.org/img/wn/${current.icon}@2x.png`;

    return (
      <div className="flex items-center gap-4 bg-white/80 p-4 rounded-2xl shadow-md border border-gray-300">
        <img src={iconUrl} alt={current.description} className="w-16 h-16" />
        <div>
          <p className="text-xl font-semibold">{current.temp}°C</p>
          <p className="text-gray-700 capitalize">{current.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-[80vh] bg-platinum text-gunmetal py-10 px-6 sm:px-10">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <div className="space-y-2">
          <p className="text-2xl font-bold">{time}</p>
          {renderWeather()}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full mx-auto">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="block group rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity duration-300"
            />
          </a>
        ))}
      </div>

    </section>
  );
};

export default Main;
