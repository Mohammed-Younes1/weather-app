"use client";

import CheckIcon from "./icons/CheckIcon";
import DropDownIcon from "./icons/DropDownIcon";
import UnitsIcon from "./icons/UnitsIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const options = [
  { id: 1, name: "Celsius (°C)", key: "C" },
  { id: 2, name: "Fahrenheit (°F)", key: "F" },
  { id: 3, name: "km/h", key: "km/h" },
  { id: 4, name: "mph", key: "mph" },
  { id: 5, name: "Millimeter (mm)", key: "mm" },
  { id: 6, name: "Inches (in)", key: "in" },
];

function UntilOptions({
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

          {/* Temperature label */}
          <MenuItem>
            <button
              className="flex items-center justify-start px-2 py-2 text-gray-300 text-sm w-[90%] m-auto"
              disabled
            >
              temperature
            </button>
          </MenuItem>

          {[options[0], options[1]].map(({ id, name, key }) => {
            const isSelected = unit === key;
            return (
              <MenuItem key={id}>
                <button
                  onClick={() => setUnit(key as "C" | "F")}
                  className={`flex justify-between items-center px-3 py-2 w-full rounded-md text-base ${
                    isSelected ? "bg-gray-700" : "hover:bg-white/10"
                  }`}
                >
                  {name}
                  {isSelected && <CheckIcon />}
                </button>
              </MenuItem>
            );
          })}

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

          {[options[2], options[3]].map(({ id, name, key }) => {
            const isSelected = windSpeedUnit === key;
            return (
              <MenuItem key={id}>
                <button
                  onClick={() => setWindSpeedUnit(key as "km/h" | "mph")}
                  className={`flex justify-between items-center px-3 py-2 w-full rounded-md text-base ${
                    isSelected ? "bg-gray-700" : "hover:bg-white/10"
                  }`}
                >
                  {name}
                  {isSelected && <CheckIcon />}
                </button>
              </MenuItem>
            );
          })}

          <div className="my-1 h-px bg-white/5" />
          {/* precipitation */}

          <MenuItem>
            <button
              className="flex items-center justify-start px-2 w-[90%] m-auto py-2 text-gray-300 text-sm"
              disabled
            >
              Precipitation
            </button>
          </MenuItem>

          {[options[4], options[5]].map(({ id, name, key }) => {
            const isSelected = precipitationUnit === key;
            return (
              <MenuItem key={id}>
                <button
                  onClick={() => setPrecipitationUnit(key as "mm" | "in")}
                  className={`flex justify-between items-center px-3 py-2 w-full rounded-md text-base ${
                    isSelected ? "bg-gray-700" : "hover:bg-white/10"
                  }`}
                >
                  {name}
                  {isSelected && <CheckIcon />}
                </button>
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </div>
  );
}

export default UntilOptions;
