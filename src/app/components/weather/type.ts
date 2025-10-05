
export type WeatherData = {
  location: string;
  date: string;
  dew_point: number;
  weatherRn: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
  weatherCode: number;
};

export type MainWeatherData = {
  date?: string;
  location?: string;
  weatherRn?: number;
  weatherCode?: number;
};

export type WeatherDataInfo = {
  feelsLike?: number;
  humidity?: number;
  wind?: number;
  precipitation?: number;
};

export type HourlyWeatherData = {
  time: string; 
  date: string;
  weatherRn: number;
  weatherCode: number;
};

export type DailyWeatherData = {
  date: string;
  weatherRn: number;
  dew_point: number;
  weatherCode: number;
};

export type WeatherDisplayProps = {
  code: number;
  width?: string;
  height?: string;
};