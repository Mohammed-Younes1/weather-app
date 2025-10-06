"use client";
import SearchIcon from "./icons/SearchIcon";

import { useMemo, useState, useEffect } from "react";
import WeatherInfo from "./weather/WeatherInfo";
import MainWeather from "./weather/MainWeather";
import DailyWeather from "./weather/DailyWeather";
import HourlyWeather from "./weather/HourlyWeather";
import { celsiusToFahrenheit, kmhToMph, mmToInches } from "./Units";
import type { WeatherData } from "./weather/type";
import type { HourlyWeatherData } from "./weather/type";

function Search({
  unit,
  windSpeedUnit,
  precipitationUnit,
}: {
  unit: "C" | "F";
  windSpeedUnit: "km/h" | "mph";
  precipitationUnit: "mm" | "in";
}) {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [weekWeather, setWeekWeather] = useState<WeatherData[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyWeatherData[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState<string>("");

  const days = useMemo(
    () => Array.from(new Set(hourlyData.map((d) => d.date))),
    [hourlyData]
  );

  const [localSelectedDate, setLocalSelectedDate] = useState<string | null>(
    selectedDay || days[0] || null
  );

  useEffect(() => {
    if (days.length > 0) {
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
      const match = days.find((d) => d === today);
      setLocalSelectedDate(match || days[0]);
    }
  }, [days]);

  const convertTemperature = (tempInCelsius: number) => {
    return unit === "F" ? celsiusToFahrenheit(tempInCelsius) : tempInCelsius;
  };

  const convertWindSpeed = (windSpeedInKmh: number) => {
    return windSpeedUnit === "mph" ? kmhToMph(windSpeedInKmh) : windSpeedInKmh;
  };

  const convertPrecipitation = (precipitationInMm: number) => {
    return precipitationUnit === "in"
      ? mmToInches(precipitationInMm)
      : precipitationInMm;
  };

  const currentTempUnit = weather
    ? convertTemperature(weather.weatherRn)
    : null;
  const currentWindSpeedUnit = weather ? convertWindSpeed(weather.wind) : null;
  const currentPrecipitationUnit = weather
    ? convertPrecipitation(weather.precipitation)
    : null;

  useEffect(() => {
    if (!dataFetched) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${dataFetched}`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          setError("Location not found");
          setLoading(false);
          return;
        }
        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,dew_point_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weathercode&hourly=temperature_2m,dew_point_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,dew_point_2m_max,weathercode,sunrise,sunset&timezone=auto`
        );

        const weatherData = await weatherRes.json();

        const currentWeather = weatherData.current;

        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        setWeather({
          location: `${name}, ${country}`,
          date: formattedDate,
          dew_point: currentWeather.dew_point_2m,
          weatherRn: currentWeather.temperature_2m,
          feelsLike: currentWeather.apparent_temperature,
          humidity: currentWeather.relative_humidity_2m,
          wind: currentWeather.wind_speed_10m,
          precipitation: currentWeather.precipitation,
          weatherCode: weatherData.current.weathercode,
        });

        const dailyWeather: WeatherData[] = weatherData.daily.time.map(
          (date: string, index: number) => ({
            date: new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
            }),
            dew_point: weatherData.daily.dew_point_2m_max[index],
            weatherRn: weatherData.daily.temperature_2m_max[index],
            weatherCode: weatherData.daily.weathercode[index],
          })
        );

        const hourlyData: HourlyWeatherData[] = weatherData.hourly.time.map(
          (time: string, index: number) => {
            const dt = new Date(time);

            return {
              time,
              date: dt.toLocaleDateString("en-US", { weekday: "long" }),
              dew_point: weatherData.hourly.dew_point_2m[index],
              weatherRn: weatherData.hourly.temperature_2m[index],
              weatherCode: weatherData.hourly.weathercode[index],
            };
          }
        );

        setWeekWeather(dailyWeather);

        setHourlyData(hourlyData);
      } catch (err) {
        // console.error(err, error);
        setError("Failed to fetch weather data");
      } finally {
        setTimeout(() => setLoading(false), 4000);
        // setLoading(false);
      }
    };

    fetchWeather();
  }, [dataFetched]);

  const handleSearchClick = () => {
    if (!query.trim()) return;
    setError("");
    setDataFetched(query.trim());
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
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSearchClick();
              }
            }}
            disabled={loading}
            className="rounded-md bg-gray-800 min-w-[526px] min-h-[52px] py-2 mr-4 pl-13"
          />

          <SearchIcon className="absolute left-4" />
        </div>
        <button
          className={`rounded-md bg-blue-500 px-4 font-medium text-xl font-[dmSans] min-w-[114px] min-h-[51px] hover:bg-blue-700 ${
            loading ? "cursor-wait bg-gray-700 opacity-60" : "bg-blue-500"
          }`}
          onClick={handleSearchClick}
          disabled={loading}
        >
          {loading ? "Searching" : "Search"}
        </button>
      </div>
      {/* main left */}

      {error && (
        <div className="text-center text-red-500 font-semibold mb-4">
          {error}
        </div>
      )}

      {weather && !error && (
        <div className="flex justify-between px-[8%]">
          <nav>
            <MainWeather
              weather={{
                ...weather,
                weatherRn: currentTempUnit ?? weather?.weatherRn ?? 0,
              }}
              unit={unit}
              loading={loading}
            />
            <WeatherInfo
              weather={{
                ...weather,
                feelsLike: currentTempUnit ?? 0,
                wind: currentWindSpeedUnit ?? 0,
                precipitation: currentPrecipitationUnit ?? 0,
              }}
              unit={unit}
              windSpeedUnit={windSpeedUnit}
              precipitationUnit={precipitationUnit}
              loading={loading}
            />
            <div className=" py-7">
              <h1 className="text-xl font-semibold  pb-4">Daily forecast</h1>
              <DailyWeather
                weekWeather={weekWeather}
                unit={unit}
                loading={loading}
              />
            </div>
          </nav>
          {/* main right */}
          <nav className="py-6">
            <HourlyWeather
              hourlyData={hourlyData}
              selectedDate={localSelectedDate}
              setSelectedDate={setLocalSelectedDate}
              days={days}
              unit={unit}
              loading={loading}
            />
          </nav>
        </div>
      )}
    </>
  );
}

export default Search;
