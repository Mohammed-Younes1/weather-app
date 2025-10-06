import WeatherDisplay from "../WeatherDisplay";
import type { MainWeatherData } from "../weather/type";
import Image from "next/image";

function MainWeather({
  weather,
  unit,
  loading,
}: {
  weather: MainWeatherData;
  unit: "C" | "F";
  loading: boolean;
}) {
  return (
    <nav className="flex py-6">
      {loading ? (
        <Image
          width={800}
          height={286}
          src={"loading.svg"}
          alt="Main Weather"
          className="relative "
        />
      ) : (
        <>
          <Image
            width={800}
            height={286}
            src={"bg-today-large.svg"}
            alt="Main Weather"
            className="relative "
          />

          {weather && (
            <div className="absolute flex items-center justify-around w-[56%] bottom-[33%] text-white">
              <div>
                <div className="text-[28px] font-bold">{weather.location}</div>
                <div className="text-lg">{weather.date}</div>
              </div>
              <div className="mr-[-110px]">
                <WeatherDisplay
                  code={weather.weatherCode ?? 0}
                  height="120px"
                  width="120px"
                />
              </div>

              <div className="text-8xl font-semibold">
                {weather?.weatherRn}°{unit}
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
}

export default MainWeather;
