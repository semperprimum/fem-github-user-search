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

  @media only screen and (min-width: 60em) {
    transform: translateX(0.3rem);
  }
`;
