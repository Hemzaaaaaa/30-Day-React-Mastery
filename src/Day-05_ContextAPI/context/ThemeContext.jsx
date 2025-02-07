import { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

// 2️⃣ Create Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom Hook to Use Context
export function useTheme() {
  return useContext(ThemeContext);
}
