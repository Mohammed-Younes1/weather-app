import type { WeatherDataInfo } from "../weather/type";
function WeatherInfo({
  weather,
  unit,
  windSpeedUnit,
  precipitationUnit,
  loading,
}: {
  weather: WeatherDataInfo;
  unit: "C" | "F";
  windSpeedUnit: "km/h" | "mph";
  precipitationUnit: "mm" | "in";
  loading: boolean;
}) {
  return (
    <nav className="flex gap-6 ">
      {weather ? (
        <>
          {[
            {
              label: "Feels Like",
              value: `${weather.feelsLike}°${unit}`,
            },
            {
              label: "Humidity",
              value: `${weather.humidity?.toFixed(0) ?? 0}%`,
            },
            {
              label: "Wind",
              value: `${(weather.wind ?? 0).toFixed(0)} ${windSpeedUnit}`,
            },
            {
              label: "Precipitation",
              value: `${
                weather.precipitation?.toFixed(0) ?? 0
              } ${precipitationUnit}`,
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className={`flex flex-col text-lg border-[1px] border-gray-600 bg-gray-800 rounded-lg min-w-[182px] h-[118px] py-3 px-5 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              <div className="mb-auto text-gray-200">{label}</div>
              <div className="text-3xl py-4 font-light mt-3">
                {loading ? "–" : value}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>no weather</div>
      )}
    </nav>
  );
}

export default WeatherInfo;
