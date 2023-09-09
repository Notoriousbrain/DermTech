import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Register } from "./pages";
import Mode from "./components/Mode";

function App() {
    const [isDark, setIsDark] = useState(true);
    const [userTheme, setUserTheme] = useState("dark");

    useEffect(() => {
      const themeSet = () => {
        document.documentElement.classList.add("dark");
        setUserTheme("dark");
        setIsDark(true);
        localStorage.setItem("theme", "dark");
      };
      themeSet();
    }, []);

    const themeSwitch = () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setUserTheme("light");
        setIsDark(false);
        return;
      }
      document.documentElement.classList.add("dark");
      setUserTheme("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    };

    
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Mode themeSwitch={themeSwitch} isDark={isDark} classStyles="absolute right-5 bottom-5" />
    </div>
  );
}

export default App;
