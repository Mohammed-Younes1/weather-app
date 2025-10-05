"use client";

import DropDownIcon from "./icons/DropDownIcon";
import UnitsIcon from "./icons/UnitsIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const options = [
  { id: 1, name: "Celsius (°C)" },
  { id: 2, name: "Fahrenheit (°F)" },
  { id: 3, name: "km/h" },
  { id: 4, name: "mph" },
  { id: 5, name: "Millimeter (mm)" },
  { id: 6, name: "Inches (in)" },
];

function UntilOptions({
  setUnit,
  setWindSpeedUnit,
  setPrecipitationUnit,
}: {
  setUnit: (unit: "C" | "F") => void;
  setWindSpeedUnit: (unit: "km/h" | "mph") => void;
  setPrecipitationUnit: (unit: "mm" | "in") => void;
}) {
  return (
    <div className="flex items-center px-2 py-2 gap-3 rounded-md bg-gray-800">
      <Menu>
        <MenuButton className="flex items-center gap-2 rounded-md px-3 py-1.5 text-[16px] text-white">
          <UnitsIcon />
          Units
          <DropDownIcon className="mt-[3px]" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="block w-[200px] origin-top-right mx-2 my-1.5 py-2 rounded-lg border-gray-600 border-[1px] bg-gray-800 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base"
              disabled
            >
              Switch to Imperial
            </button>
          </MenuItem>

          <MenuItem>
            <button
              className="flex items-center justify-start px-2 py-2 text-gray-300 text-sm w-[90%] m-auto"
              disabled
            >
              temperature
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setUnit("C")}
              className="flex items-center justify-start px-2 py-2 text-base w-[90%] m-auto hover:bg-white/10 rounded-md"
            >
              {options[0].name}
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setUnit("F")}
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base hover:bg-white/10 rounded-md"
            >
              {options[1].name}
            </button>
          </MenuItem>

          <div className="my-1 h-px bg-white/5" />
          {/* speed */}
          <MenuItem>
            <button
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-gray-300 text-sm"
              disabled
            >
              Wind Speed
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setWindSpeedUnit("km/h")}
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base hover:bg-white/10 rounded-md"
            >
              {options[2].name}
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setWindSpeedUnit("mph")}
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base hover:bg-white/10 rounded-md"
            >
              {options[3].name}
            </button>
          </MenuItem>

          <div className="my-1 h-px bg-white/5" />
          {/* precipitation */}
          <MenuItem>
            <button
              onClick={() => setPrecipitationUnit("mm")}
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base hover:bg-white/10 rounded-md"
            >
              {options[4].name}
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={() => setPrecipitationUnit("in")}
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-base hover:bg-white/10 rounded-md"
            >
              {options[5].name}
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default UntilOptions;
