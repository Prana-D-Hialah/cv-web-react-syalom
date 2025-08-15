import ToggleThemeNavbar from "./ToggleThemeNavbar";

export default function LandingNavbar() {
  return (
    <div className="bg-base-100 bg-opacity-60 backdrop-blur py-4">
      <div className="max-w-screen-lg flex justify-between mx-auto md:px-20 px-5">
        <a className="text-xl font-bold">Syalom Pranadhia Oktavino</a>
        <ToggleThemeNavbar />
      </div>
    </div>
  );
}
