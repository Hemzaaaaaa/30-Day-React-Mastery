import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>React Context API Example</h1>
      <ThemeToggle />
    </div>
  );
}

function AppDay5() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default AppDay5;
