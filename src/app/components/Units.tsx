export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function kmhToMph(kmh: number): number {
  return kmh / 1.609;
}

export function mmToInches(mm: number): number {
  return mm / 25.4;
}
export default { celsiusToFahrenheit, kmhToMph, mmToInches };
