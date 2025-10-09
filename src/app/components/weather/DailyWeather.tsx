import { celsiusToFahrenheit } from "../Units";
import WeatherDisplay from "../WeatherDisplay";
import type { DailyWeatherData } from "../weather/type";

function DailyWeather({
  weekWeather,
  unit,
  loading,
}: {
  weekWeather: DailyWeatherData[];
  unit: "C" | "F";
  loading: boolean;
}) {
  return (
    <nav className="flex flex-wrap lg:gap-4 sm:gap-2 lg:px-1 sm:px-10">
      {(loading ? Array(7).fill(null) : weekWeather).map((weather, index) => {
        const temp =
          !loading && weather
            ? unit === "F"
              ? celsiusToFahrenheit(weather.weatherRn)
              : weather.weatherRn
            : null;

        const dewPoint =
          !loading && weather
            ? unit === "F"
              ? celsiusToFahrenheit(weather.dew_point)
              : weather.dew_point
            : null;

        return (
          <div
            key={loading ? index : weather.date}
            className={`flex flex-col text-lg border-[1px] border-gray-600
               bg-gray-800 rounded-lg lg:w-[100px] w-[90px] lg:h-[165px] h-[150px] py-4 px-6
                text-gray-200 ${loading ? "animate-pulse" : ""}`}
          >
            {loading ? (
              <div className="" />
            ) : (
              <>
                <div className="mb-4 flex justify-center">{weather.date}</div>
                <div className="flex justify-center">
                  <WeatherDisplay
                    code={weather.weatherCode}
                    height="45px"
                    width="45px"
                  />
                </div>
                <div className="flex items-center lg:mt-1 mt-5 justify-between lg:text-base text-sm font-medium lg:ml-[-17px] ml-[-19px]">
                  {temp.toFixed(0)}°{unit}
                  <div className="  text-gray-400 pl-5">
                    {dewPoint.toFixed(0)}°{unit}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
export default DailyWeather;
