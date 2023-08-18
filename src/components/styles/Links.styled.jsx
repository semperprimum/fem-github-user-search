import { styled } from "styled-components";

export const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
`;

export const LinksItem = styled.li``;

export const Link = styled.a`
  ${({$notAvailable}) => $notAvailable && "opacity: 0.5;"}
  font-size: var(--fs-300);
  text-align: start;
  display: grid;
  grid-template-columns: 1.25rem auto;
  gap: .8rem;
  color: ${({ theme }) => theme.colors.bodyPrimary};
  svg {
    fill: ${({theme}) => theme.colors.bodyPrimary};
  }
`;

export const LinkIcon = styled.svg``;
