import { styled } from "styled-components";

export const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 37.5em) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 60em) {
    margin-top: 2.31rem;
    row-gap: 1.3rem;
    column-gap: 4.2rem;
  }
`;

export const LinksItem = styled.li`
  @media only screen and (min-width: 37.5em) {
    &:nth-child(2) {
      grid-column: 1 / 2;
  }
    &:nth-child(3) {
      grid-row: 1;
      grid-column: 2 / 3;
  }
`;

export const Link = styled.a`
  ${({ $unavailable }) => $unavailable && "opacity: 0.5;"}
  font-size: var(--fs-300);
    max-width: 13.125rem;
  text-align: start;
  display: grid;
    overflow: hidden;
    align-items: center;
  grid-template-columns: 1.25rem auto;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.bodyPrimary};
  svg {
    fill: ${({ theme }) => theme.colors.bodyPrimary};
  }
  }
`;

export const LinkIcon = styled.svg``;
