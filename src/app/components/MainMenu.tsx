import UntilOptions from "./UntilOptions";

function MainMenu({
  setUnit,
  setWindSpeedUnit,
  setPrecipitationUnit,
}: {
  setUnit: (unit: "C" | "F") => void;
  setWindSpeedUnit: (unit: "km/h" | "mph") => void;
  setPrecipitationUnit: (unit: "mm" | "in") => void;
}) {
  return (
    <nav className="flex justify-between px-[16%] py-[48px]">
      <div className="flex  gap-3">
        <img src={"/logo.svg"} alt="Logo" className="h-[40px] w-[40px] mt-1" />

        <h1 className="flex items-center font-bold text-[22px]">Weather Now</h1>
        {/* font-[bricolage] */}
      </div>

      <UntilOptions
        setUnit={setUnit}
        setWindSpeedUnit={setWindSpeedUnit}
        setPrecipitationUnit={setPrecipitationUnit}
      />
    </nav>
  );
}
export default MainMenu;
