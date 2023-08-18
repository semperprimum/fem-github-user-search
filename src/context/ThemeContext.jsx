import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  colors: {
    primary: "hsla(212, 100%, 50%, 1)",
    card: "hsla(0, 0%, 100%, 1)",
    background: "hsla(227, 100%, 98%, 1)",
    bodyPrimary: "hsla(217, 35%, 45%, 1)",
    bodyAccent: "hsla(217, 20%, 51%, 1)",
    bodyBold: "hsla(217, 21%, 21%, 1)",
  },
};

const darkTheme = {
  colors: {
    primary: "hsla(212, 100%, 50%, 1)",
    card: "hsla(222, 41%, 20%, 1)",
    background: "hsla(220, 40%, 13%, 1)",
    bodyPrimary: "hsla(0, 0%, 100%, 1)",
    bodyAccent: "hsla(0, 0%, 100%, 1)",
    bodyBold: "hsla(0, 0%, 100%, 1)",
  },
};

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const prefersDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const ThemeProvider = ({ children }) => {
  const [themeObject, setThemeObject] = useState(
    localStorage.getItem("theme") === "dark"
      ? darkTheme
      : localStorage.getItem("theme") === "light"
      ? lightTheme
      : prefersDarkTheme
      ? darkTheme
      : lightTheme
  );

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setThemeObject(
        localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeObject === lightTheme ? darkTheme : lightTheme;
    setThemeObject(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeObject,
        toggleTheme,
        themeName: themeObject === darkTheme ? "dark" : "light",
      }}
    >
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
