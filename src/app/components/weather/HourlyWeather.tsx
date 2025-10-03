import WeatherDisplay from "../WeatherDisplay";
import type { HourlyWeatherData } from "../weather/type";
import { celsiusToFahrenheit } from "../Units";

function HourlyWeather({
  hourlyData,
  selectedDate,
  setSelectedDate,
  days,
}: {
  hourlyData: HourlyWeatherData[];
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  days: string[];
}) {
  const filteredData = hourlyData.filter((data) => {
    if (!data.time) return false;

    // const dt = new Date(data.time); // now works because `time` is ISO
    // const hour = dt.getHours();

    // return data.date === selectedDate && hour >= 15 && hour <= 22;
    return data.date === selectedDate;
  });

  return (
    <nav className="block bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-xl font-medium">Hourly forecast</h1>
        <select
          value={selectedDate ?? ""}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="rounded-lg bg-gray-600 text-white px-2 py-1 w-[120px] h-[40px] text-base"
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="max-h-[609px] overflow-y-auto pr-2">
        {filteredData.map((data) => {
          const dt = new Date(data.time);
          const hourLabel = dt.toLocaleTimeString([], {
            hour: "numeric",
            hour12: true,
          });

          return (
            <div
              key={data.time}
              className="flex text-lg border border-gray-600 bg-gray-600 rounded-lg w-[336px] h-[60px] mx-2 my-4 items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <WeatherDisplay
                  code={data.weatherCode}
                  height="40px"
                  width="40px"
                />
                <div className="text-xl">{hourLabel}</div>
              </div>
              <div className="text-base font-medium mr-2 text-base">
                {celsiusToFahrenheit(Math.round(data.weatherRn))}°
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default HourlyWeather;
