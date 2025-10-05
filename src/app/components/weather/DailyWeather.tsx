import { celsiusToFahrenheit } from "../Units";
import WeatherDisplay from "../WeatherDisplay";
import type { DailyWeatherData } from "../weather/type";

function DailyWeather({
  weekWeather,
  unit,
}: {
  weekWeather: DailyWeatherData[];
  unit: "C" | "F";
}) {
  return (
    <nav className="flex flex-wrap gap-4">
      {weekWeather.map((weather) => {
        const temp =
          unit === "F"
            ? celsiusToFahrenheit(weather.weatherRn)
            : weather.weatherRn;

        const dewPoint =
          unit === "F"
            ? celsiusToFahrenheit(weather.dew_point)
            : weather.dew_point;

        return (
          <div
            key={weather.date}
            className="flex flex-col text-lg border-[1px] border-gray-600 bg-gray-800 rounded-lg w-[100px] h-[165px] py-4 px-6 text-gray-200"
          >
            <div className="mb-4 flex justify-center">{weather.date}</div>
            <WeatherDisplay code={weather.weatherCode} />
            <div className="flex items-center mt-6 justify-between text-base font-medium mr-2">
              <div className="">
                {temp.toFixed(0)}°{unit}
              </div>
              <div className="text-gray-400 pl-5">
                {dewPoint.toFixed(0)}°{unit}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
export default DailyWeather;
