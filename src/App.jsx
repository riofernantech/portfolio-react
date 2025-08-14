import { useState, useEffect} from 'react';
import { PageContext } from './Context/PageContext';
import { ThemeContext } from './Context/ThemeContext';
import { NavLink, Outlet } from "react-router";
import Header from './Header/Header';
import Footer from './Footer/Footer';

function calculateInitialTheme() {
  const localTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localTheme) return localTheme;
  if (prefersDark) return "dark";
  return "light";
}

export default function App() {
  const [theme, setTheme] = useState(() => calculateInitialTheme());

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <PageContext.Provider value={NavLink}>
          <Header/>
        </PageContext.Provider>
        <Outlet/>
        <Footer/>
      </ThemeContext.Provider>
    </>
  )
}

