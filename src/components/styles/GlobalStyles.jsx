import { createGlobalStyle } from "styled-components";
// import { useTheme } from "../../context/ThemeContext";

export const GlobalStyles = createGlobalStyle`
  :root {
    --fs-200: .6875rem;
    --fs-300: .8125rem;
    --fs-400: .875rem;
    --fs-500: .875rem;
    --fs-600: 1rem;
    --fs-700: 1rem;
    --fs-800: 1.625rem;

    @media only screen and (min-width: 37.5em) {
      --fs-200: .8125rem; 
      --fs-300: .9375rem; 
      --fs-400: 1rem; 
      --fs-500: 1.125rem; 
      --fs-600: 1.375rem; 
      --fs-700: 1.625rem; 
      --fs-800: 1.625rem; 
    }

    @media only screen and (min-width: 60em) {
      --fs-200: .8125rem; // Stat titles
      --fs-300: .9375rem; // Body
      --fs-400: 1rem;     // Handle and button
      --fs-500: 1.125rem; // Search input
      --fs-600: 1.375rem; // Stat numbers
      --fs-700: 1.625rem; // Name
      --fs-800: 1.625rem; // Logo
    }
  }

  * {
    --duration: 200ms;
    --timing-function: ease;
    transition: 
      color var(--duration) var(--timing-function),
      background-color var(--duration) var(--timing-function),
      box-shadow var(--duration) var(--timing-function),
      fill var(--duration) var(--timing-function);
  }
  body {
    font-family: "Space Mono";
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.bodyPrimary};

    @media only screen and (min-width: 60em) {
      display: grid;
      place-items: center;
    }
  } 
`;
