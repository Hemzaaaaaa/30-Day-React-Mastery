import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: "10px", cursor: "pointer" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
