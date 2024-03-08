import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type ThemeContent = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: "light",
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
