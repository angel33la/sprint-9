import { ThemeContext } from "context/ThemeContext";
import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useContext, useEffect, useState } from "react";

export default function ThemeToggle(props) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    props.themeUpdated(theme);
  }, []);

  const changeTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    props.themeUpdated(newTheme);
  };

  return (
    <div>
      <label
        style={theme === "light" ? { color: "black" } : { color: "white" }}
      >
        Light Theme:{" "}
      </label>
      <input
        type="checkbox"
        value={theme}
        onChange={changeTheme}
        checked={theme == "light"}
      />
    </div>
  );
}
