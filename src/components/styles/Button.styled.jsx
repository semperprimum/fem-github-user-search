import {styled} from "styled-components";

export const Button = styled.button`
  font-size: var(--fs-400);
  line-height: normal;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: .78rem 1rem;
  border-radius: .625rem;
  background-color: ${({theme}) => theme.colors.primary};
`
