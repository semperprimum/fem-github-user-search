import { ThemeSwitcherButton } from "./styles/ThemeSwitcher.styled";
import { ReactComponent as IconSun } from "../assets/icon-sun.svg";
import { ReactComponent as IconMoon } from "../assets/icon-moon.svg";
import { useTheme } from "../context/ThemeContext";
import {useEffect} from "react";

export const ThemeSwitcher = () => {
  const { themeName, toggleTheme } = useTheme();
  return (
    <ThemeSwitcherButton
      aria-label={
        themeName === "dark" ? "Disable dark theme" : "Enable dark theme"
      }
      onClick={toggleTheme}
      $themeName={themeName}
    >
      <span aria-hidden="true">{themeName === "light" ? "Dark" : "Light"}</span>
      {themeName === "light" ? (
        <IconMoon aria-hidden="true" />
      ) : (
        <IconSun aria-hidden="true" />
      )}
    </ThemeSwitcherButton>
  );
};
