import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "context/ThemeContext";

export function Grid() {
  const { theme, setTheme } = useContext(ThemeContext);
  const updateTheme = () => {};
  return (
    <div
      className={theme === "light" ? "bg-light" : "bg-dark"}
      style={{ height: "100vh" }}
    >
      <ThemeToggle themeUpdated={updateTheme} />
    </div>
  );
}
