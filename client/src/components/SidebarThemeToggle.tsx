import { FaMoon, FaSun } from "react-icons/fa6";
import { useThemeContext } from "../contexts/ThemeContext";
import { toggleDarkTheme } from "../utils/theme";

const SidebarThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const themeValue = e.target.checked ? "dark" : "light";
    setTheme(themeValue);
    localStorage.theme = themeValue;
    toggleDarkTheme();
  };
  return (
    <li>
      <label
        htmlFor="theme"
        className={
          theme === "light"
            ? "text-theme-900 cursor-pointer dark:text-white"
            : "cursor-pointer text-stone-500 dark:text-stone-400"
        }
      >
        <span className="group flex items-center rounded-lg p-2  hover:bg-stone-200 hover:dark:bg-zinc-800">
          <span className="text-xl">
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </span>

          <span className="ms-3 flex-1 whitespace-nowrap">
            {theme === "light" ? "Light" : "Dark"}
          </span>
        </span>
      </label>

      <input
        type="checkbox"
        name="theme"
        id="theme"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
      />
    </li>
  );
};

export default SidebarThemeToggle;
