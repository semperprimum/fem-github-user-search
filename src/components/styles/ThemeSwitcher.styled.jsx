import { styled } from "styled-components";

export const ThemeSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: none;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.15625rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.bodyPrimary};
`;

