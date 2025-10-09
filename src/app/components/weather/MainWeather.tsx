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
    <nav className="flex py-6 sm:justify-center">
      {loading ? (
        <Image
          width={800}
          height={286}
          src={"loading.svg"}
          alt="Main Weather"
          className="relative xl:w-[800px] max-w-full md:w-[720px] sm:w-[650px]"
        />
      ) : (
        <>
          <Image
            width={800}
            height={286}
            src={"bg-today-large.svg"}
            alt="Main Weather"
            className="relative xl:w-[800px] max-w-full lg:w-[720px] sm:w-[650px]"
          />

          {weather && (
            <div className="absolute flex items-center lg:justify-around lg:w-[780px] lg:bottom-[285px] md:bottom-[330px] text-white">
              <div>
                <div className="lg:text-[28px] sm:text-[24px] font-bold">
                  {weather.location}
                </div>
                <div className="lg:text-lg">{weather.date}</div>
              </div>
              <div className="lg:mr-[-110px] sm:ml-[30px] sm:mr-[-20px]">
                <WeatherDisplay
                  code={weather.weatherCode ?? 0}
                  height="120px"
                  width="120px"
                />
              </div>

              <div className="lg:text-8xl sm:text-6xl font-semibold">
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
