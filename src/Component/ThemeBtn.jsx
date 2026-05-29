import useTheme from "../contexts/Theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const handleChange = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="flex items-center cursor-pointer">

      <input
        type="checkbox"
        className="sr-only"
        checked={themeMode === "dark"}
        onChange={handleChange}
      />

      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-all">
        <div
          className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-all ${
            themeMode === "dark" ? "translate-x-6" : ""
          }`}
        />
      </div>

      <span className="ml-3 text-sm text-black dark:text-white">
        Theme
      </span>

    </label>
  );
}