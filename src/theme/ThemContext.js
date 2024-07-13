import { useState, createContext } from "react";

const ThemeContext = createContext();
console.log(ThemeContext);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleThem,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
