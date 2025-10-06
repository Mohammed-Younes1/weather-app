"use client";
import { useState } from "react";
import MainMenu from "./MainMenu";
import Search from "./Search";

function WeatherApp() {
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [windSpeedUnit, setWindSpeedUnit] = useState<"km/h" | "mph">("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState<"mm" | "in">("mm");

  return (
    <div>
      <MainMenu
        unit={unit}
        windSpeedUnit={windSpeedUnit}
        precipitationUnit={precipitationUnit}
        setUnit={setUnit}
        setWindSpeedUnit={setWindSpeedUnit}
        setPrecipitationUnit={setPrecipitationUnit}
      />
      <h1 className="text-[52px] text-center font-bold py-[35px]">
        How&apos;s the sky looking today?
      </h1>
      <Search
        unit={unit}
        windSpeedUnit={windSpeedUnit}
        precipitationUnit={precipitationUnit}
      />
    </div>
  );
}

export default WeatherApp;
