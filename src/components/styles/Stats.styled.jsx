import { styled } from "styled-components";

export const StatsWrapper = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding: 1.15rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.625rem;

  @media only screen and (min-width: 37.5em) {
    margin-top: 2rem;
    text-align: start;
    padding: 1rem 2rem;
    gap: 0.75rem;
  }
  @media only screen and (min-width: 60em) {
    padding: 0.8rem 2rem 1.06rem;
    gap: 1.5rem;
  }
`;

export const Stat = styled.li``;

export const StatTitle = styled.p`
  font-size: var(--fs-200);
`;

export const StatNumber = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.bodyBold};
  font-size: var(--fs-600);
  margin-top: 0.5rem;
  font-weight: 700;
  @media only screen and (min-width: 60em) {
    margin-top: 0;
  }
`;
