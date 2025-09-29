import WeatherDisplay from "../WeatherDisplay";

interface WeatherData {
  date: string;
  location: string;
  weatherRn: number;
  weatherCode: number;
}

function MainWeather({ weather }: { weather: WeatherData | null }) {
  return (
    <nav className="flex py-6">
      <img
        src={"bg-today-large.svg"}
        alt="Main Weather"
        className="relative "
      />
      {weather && (
        <div className="absolute flex items-center">
          <div>
            <div className="text-[28px] font-bold">{weather.location}</div>
            <div className="text-lg">{weather.date}</div>
          </div>
          <WeatherDisplay
            code={weather.weatherCode}
            height="120px"
            width="120px"
          />
          <div className="text-8xl font-semibold">{weather?.weatherRn}°</div>
        </div>
      )}
    </nav>
  );
}

export default MainWeather;
