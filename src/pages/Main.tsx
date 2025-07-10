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
  const { url } = useContext(UserContext)!;

  const [time, setTime] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`${url}/weather`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
        }); 
        const data = await response.json();
        if (data.weather) {
          setWeather(data.weather); // ✅ Extract nested `weather`
        } else {
          console.warn("Unexpected weather format", data);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchWeather();
    // Update weather data every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const renderWeather = () => {
    if (!weather) return null;

    const { current, forecast } = weather;

    console.log("forecast", forecast);

    const iconUrl = `https://openweathermap.org/img/wn/${current.icon}@2x.png`;

    return (
      <div className="grid grid-cols-3 gap-4">
        
        <div className="flex items-center gap-4 rounded-lg bg-white/80 p-4 ">
          <img src={iconUrl} alt={current.description} className="w-16 h-16" />
          <div>
            <p className="text-xl font-semibold">{current.temp}°C</p>
            <p className="text-gray-700 capitalize">{current.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-white/80 p-4 ">
          <img src={iconUrl} alt={current.description} className="w-16 h-16" />
          <div>
            <p className="text-xl font-semibold">{current.temp}°C</p>
            <p className="text-gray-700 capitalize">{current.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-white/80 p-4 ">
          <img src={iconUrl} alt={current.description} className="w-16 h-16" />
          <div>
            <p className="text-xl font-semibold">{current.temp}°C</p>
            <p className="text-gray-700 capitalize">{current.description}</p>
          </div>
        </div>

      </div>
    );
  };

  return (
    <section className="min-h-[80vh] bg-platinum text-gunmetal py-10 px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
          {time && <p className="text-lg text-gray-700">{time}</p>}
        </div>
        {renderWeather()}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              className="block rounded-xl overflow-hidden border border-gray-300 shadow-md hover:shadow-lg transition duration-200 bg-white"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-medium text-gunmetal">{project.alt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
