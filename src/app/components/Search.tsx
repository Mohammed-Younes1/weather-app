"use client";
import SearchIcon from "./icons/SearchIcon";

import { useState } from "react";
import WeatherInfo from "./weather/WeatherInfo";

interface WeatherData {
  location: string;
  weatherRn: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
}

function Search() {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("Location not found");
        setLoading(false);
        return;
      }
      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto`
      );

      const weatherData = await weatherRes.json();

      const currentWeather = weatherData.current;

      setWeather({
        location: `${name}, ${country}`,
        weatherRn: currentWeather.temperature_2m,
        feelsLike: currentWeather.apparent_temperature,
        humidity: currentWeather.relative_humidity_2m,
        wind: currentWeather.wind_speed_10m,
        precipitation: currentWeather.precipitation,
      });
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center py-4">
        <div className="relative flex items-center ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a place..."
            className="rounded-md bg-gray-800 min-w-[526px] min-h-[52px] py-2 mr-4 pl-13"
          />
          <SearchIcon className="absolute left-4" />
        </div>

        <button
          className="rounded-md bg-blue-500 px-4 font-medium text-xl font-[dmSans] min-w-[114px] min-h-[51px] hover:bg-blue-700"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching" : "Search"}
        </button>
      </div>
      <div className="flex justify-center">
        <WeatherInfo weather={weather} />
      </div>
    </>
  );
}

export default Search;
