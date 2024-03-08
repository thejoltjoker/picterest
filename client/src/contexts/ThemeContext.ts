import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type ThemeContent = {
  theme: "light" | "dark" | undefined;
  setTheme: Dispatch<SetStateAction<"light" | "dark" | undefined>>;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: "light",
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
