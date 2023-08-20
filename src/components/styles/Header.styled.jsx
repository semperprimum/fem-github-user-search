import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (min-width: 37.5em) {
    margin-top: 5.75rem;
  }
`;
export const Logo = styled.p`
  line-height: normal;
  font-weight: 700;
  font-size: var(--fs-800);
  color: ${({ theme }) => theme.colors.bodyBold};
`;
