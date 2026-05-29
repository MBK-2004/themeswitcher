import { useState, useEffect } from "react";
import "./App.css";

import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.documentElement;

    // remove previous class
    html.classList.remove("light", "dark");

    // add new class
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">

        <div className="w-full max-w-sm">

          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <Card />

        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;