import React, { createContext } from "react";
import { useColorScheme } from "react-native";

type Props = {};

const ThemeContext = createContext(null);

export default function ThemeProvider({}: Props) {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeContext.Provider value={{}}>
      <div>ThemeContext</div>
    </ThemeContext.Provider>
  );
}
