import React, {useContext} from "react";
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
    href: "/stockscreener",
    image: stockPreview,
    alt: "Stock Screener Preview",
  },
];

const Main: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const [time, setTime] = React.useState<string | null>(null);
  const [weather, setWeather] = React.useState<string | null>(null);


  React.useEffect(() => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setWeather(data.weather));
  }, []);

  return (
    <section className="min-h-[80vh] bg-platinum text-gunmetal">

      <div className="grid grid-cols-4">
        <div className="col-span-2 flex items-center mt-8">
          <p className="font-bold text-2xl">{time}</p>
          <p className="text-xl">{weather}</p>
        </div>

        <div className="col-span-2 flex items-center mt-8">

        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
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
      </div>
    </section>
  );
};

export default Main;
