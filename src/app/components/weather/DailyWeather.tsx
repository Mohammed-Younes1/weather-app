import WeatherDisplay from "../WeatherDisplay";

type WeatherData = {
  date: string;
  weatherRn: number;
  dew_point: number;
  weatherCode: number;
};

function DailyWeather({ weekWeather }: { weekWeather: WeatherData[] }) {
  return (
    <nav className="flex flex-wrap gap-4">
      {weekWeather.map((weather) => (
        <div
          key={weather.date}
          className="flex flex-col text-lg border-[1px] border-gray-600 bg-gray-800 rounded-lg w-[100px] h-[165px] py-4 px-6 text-gray-200"
        >
          <div className="mb-4 flex justify-center">{weather.date}</div>
          <WeatherDisplay code={weather.weatherCode} />
          <div className="flex items-center mt-6 justify-between text-base font-medium mr-2">
            <div className="">{weather.weatherRn.toFixed(0)}°</div>
            <div className="text-gray-400 pl-5">
              {weather.dew_point.toFixed(0)}°
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
export default DailyWeather;
