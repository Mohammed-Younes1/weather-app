import MainMenu from "./components/MainMenu";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="text-white">
      <MainMenu />
      <h1 className="text-[52px] text-center font-bold py-[35px]">
        How&apos;s the sky looking today?
      </h1>
      <Search />
    </div>
  );
}
