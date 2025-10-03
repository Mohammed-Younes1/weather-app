export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function units() {
  return (
    <div className="units">
      <div className="unit">°C</div>
      <div className="unit">°F</div>
    </div>
  );
}
export default units;
