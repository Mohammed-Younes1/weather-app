import React from "react";
import type { WeatherDisplayProps } from "./weather/type";

const weatherCategoryMap: Record<
  number,
  "sunny" | "partly" | "cloudy" | "fog" | "rain" | "snow" | "storm"
> = {
  0: "sunny",
  1: "sunny",
  2: "partly",
  3: "cloudy",
  45: "fog",
  48: "fog",
  51: "rain",
  53: "rain",
  55: "rain",
  56: "rain",
  57: "rain",
  61: "rain",
  63: "rain",
  65: "rain",
  66: "rain",
  67: "rain",
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snow",
  80: "rain",
  81: "rain",
  82: "rain",
  85: "snow",
  86: "snow",
  95: "storm",
  96: "storm",
  99: "storm",
};

const weatherImageMap: Record<
  "sunny" | "partly" | "cloudy" | "fog" | "rain" | "snow" | "storm",
  string
> = {
  sunny: "/icon-sunny.webp",
  partly: "/icon-partly-cloudy.webp",
  cloudy: "/icon-overcast.webp",
  fog: "/icon-fog.webp",
  rain: "/icon-rain.webp",
  snow: "/icon-snow.webp",
  storm: "/icon-storm.webp",
};

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  code,
  width = "60px",
  height = "60px",
}) => {
  const category = weatherCategoryMap[code];
  const imageSrc = category ? weatherImageMap[category] : undefined;

  return (
    <img
      src={imageSrc}
      alt={category}
      className={`w-[${width}] h-[${height}]`}
    />
  );
};

export default WeatherDisplay;
