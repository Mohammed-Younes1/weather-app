import type { WeatherDataInfo } from "../weather/type";
function WeatherInfo({
  weather,
  unit,
  windSpeedUnit,
  precipitationUnit,
}: {
  weather: WeatherDataInfo;
  unit: "C" | "F";
  windSpeedUnit: "km/h" | "mph";
  precipitationUnit: "mm" | "in";
}) {
  return (
    <nav className="flex justify-items-start">
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
              className="flex flex-col text-lg border-[1px] border-gray-600 bg-gray-800 rounded-lg min-w-[182px] h-[118px] py-3 px-5 mx-[10px]"
            >
              <div className="mb-auto text-gray-200">{label}</div>
              <div className="text-3xl py-4 font-light mt-3">{value}</div>
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
