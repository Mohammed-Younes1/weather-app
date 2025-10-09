import UntilOptions from "./UntilOptions";
import Image from "next/image";

function MainMenu({
  unit,
  windSpeedUnit,
  precipitationUnit,
  setUnit,
  setWindSpeedUnit,
  setPrecipitationUnit,
}: {
  unit: "C" | "F";
  windSpeedUnit: "km/h" | "mph";
  precipitationUnit: "mm" | "in";
  setUnit: (unit: "C" | "F") => void;
  setWindSpeedUnit: (unit: "km/h" | "mph") => void;
  setPrecipitationUnit: (unit: "mm" | "in") => void;
}) {
  return (
    <nav className="flex justify-between px-[16%] py-[48px]">
      <div className="flex  gap-3">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={40}
          height={40}
          className=" mt-1 "
        />

        <h1 className="flex items-center font-bold text-[22px]">Weather Now</h1>
        {/* font-[bricolage] */}
      </div>

      <UntilOptions
        unit={unit}
        windSpeedUnit={windSpeedUnit}
        precipitationUnit={precipitationUnit}
        setUnit={setUnit}
        setWindSpeedUnit={setWindSpeedUnit}
        setPrecipitationUnit={setPrecipitationUnit}
      />
    </nav>
  );
}
export default MainMenu;
