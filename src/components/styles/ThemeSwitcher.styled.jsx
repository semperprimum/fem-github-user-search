import { styled } from "styled-components";

export const ThemeSwitcherButton = styled.button`
  font-size: 0.8125rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: none;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.15625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bodyPrimary};
  svg {
    fill: currentColor;
  }

  @media only screen and (min-width: 60em) {
    transform: translateX(0.3rem);
    cursor: pointer;

    &:hover {
      color: ${({$themeName}) => ( $themeName === "dark" ? "hsla(222, 44%, 70%, 1)" : "hsla(220, 18%, 16%, 1)" )}; 
    }
  }
`;
