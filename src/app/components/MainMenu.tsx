import UntilOptions from "./UntilOptions";

function MainMenu() {
  return (
    <nav className="flex justify-between px-[16%] py-[48px]">
      <div className="flex  gap-3">
        <img src={"/logo.svg"} alt="Logo" className="h-[40px] w-[40px] mt-1" />

        <h1 className="flex items-center font-bold text-[22px]">Weather Now</h1>
        {/* font-[bricolage] */}
      </div>
      <UntilOptions />
      {/* <div className="flex items-center px-4 py-2 gap-3 rounded-md bg-gray-800">
        <UnitsIcon />

        <span className="text-[16px]">Units</span>

        <DropDownIcon className="mt-[13px] " />
      </div> */}
    </nav>
  );
}
export default MainMenu;
