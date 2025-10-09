import { celsiusToFahrenheit } from "../Units";
import WeatherDisplay from "../WeatherDisplay";
import type { HourlyWeatherData } from "../weather/type";

function HourlyWeather({
  hourlyData,
  selectedDate,
  setSelectedDate,
  days,
  unit,
  loading,
}: {
  hourlyData: HourlyWeatherData[];
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  days: string[];
  unit: "C" | "F";
  loading: boolean;
}) {
  const filteredData = hourlyData.filter((data) => {
    if (!data.time) return false;
    return data.date === selectedDate;
  });

  return (
    <nav
      className={`block bg-gray-800 rounded-lg px-2 lg:w-[350px] md:w-[680px] sm:w-[600px] lg:w-full mx-auto${
        loading ? "animate-pulse" : ""
      }`}
    >
      <div className="flex flex-wrap justify-between items-center px-4 py-2 gap-2 ">
        <h1 className="lg:text-xl font-medium text-white xlg:text-red-500">
          Hourly forecast
        </h1>
        <select
          value={selectedDate ?? ""}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="rounded-lg bg-gray-600 text-white px-2 py-1 w-[120px] h-[40px] text-base"
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {loading ? "-" : day}
            </option>
          ))}
        </select>
      </div>

      <div className="max-h-[609px]  overflow-y-auto pr-2 flex flex-col items-center">
        {(loading ? Array(10).fill(null) : filteredData).map((data, index) => {
          if (loading) {
            return (
              <div
                key={index}
                className="flex text-lg border border-gray-600 bg-gray-600 rounded-lg w-full max-w-[336px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[600px] h-[60px] mx-2 my-3 animate-pulse"
              />
            );
          }

          const dt = new Date(data.time);
          const hourLabel = dt.toLocaleTimeString([], {
            hour: "numeric",
            hour12: true,
          });
          const temp =
            !loading && data
              ? unit === "F"
                ? celsiusToFahrenheit(data.weatherRn)
                : data.weatherRn
              : null;

          return (
            <div
              key={loading ? index : data.time}
              className="flex text-lg border border-gray-600  bg-gray-600 rounded-lg w-full max-w-[400px] sm:max-w-[540px] md:max-w-[500px] lg:max-w-[800px] h-[60px] mx-2 my-2 py-1 px-3 items-center justify-between "
            >
              <div className="flex items-center gap-4">
                <WeatherDisplay
                  code={data.weatherCode}
                  height="40px"
                  width="40px"
                />
                <div className="text-xl text-white">{hourLabel}</div>
              </div>
              <div className="text-base font-medium text-white">
                {Math.round(temp)}°{unit}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default HourlyWeather;
