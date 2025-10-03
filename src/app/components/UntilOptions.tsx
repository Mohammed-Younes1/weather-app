import DropDownIcon from "./icons/DropDownIcon";
import UnitsIcon from "./icons/UnitsIcon";

export default function UntilOptions() {
  return (
    // <nav className="flex items-center px-4 py-2 gap-3 rounded-md bg-gray-800">
    //   <UnitsIcon />

    //   <span className="text-[16px]">Units</span>

    //   <DropDownIcon className="mt-[13px] " />
    // </nav>
    <select className="flex items-center px-4 py-2 gap-3 rounded-md bg-gray-800">
      <option value="" disabled selected hidden>
        Untis
      </option>
      <option value={"celsius"} className="flex items-center gap-2">
        <span className="text-[16px]">°C</span>
      </option>
      <option value={"fahrenheit"} className="flex items-center gap-2">
        <span className="text-[16px]">°F</span>
      </option>
    </select>
  );
}
