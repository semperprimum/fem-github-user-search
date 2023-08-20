import { styled } from "styled-components";

export const Button = styled.button`
  font-size: var(--fs-400);
  line-height: normal;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 0.78rem 1rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media only screen and (min-width: 37.5em) {
    padding: 0.8rem 1.5rem;
  }

  @media only screen and (min-width: 60em) {
    transition: filter 175ms ease;
    cursor: pointer;
    &:hover {
      filter: brightness(1.3);
  }
  }
`;
