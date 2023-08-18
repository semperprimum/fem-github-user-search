import { styled } from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 0.4rem 0.4rem 0.4rem 1rem;
  border-radius: 0.9375rem;
  margin-top: 2.25rem;
  box-shadow: ${({ $themeName }) =>
    $themeName === "light"
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.20)"
      : "none"};

  &:focus-within {
    outline: 1.5px solid ${({ theme }) => theme.colors.primary};
  }
`;
export const SearchIcon = styled.div`
  margin-right: 0.5rem;
  min-width: 1.25rem;
  max-width: 1.25rem;
`;
export const SearchInput = styled.input`
  font-size: var(--fs-500);
  width: 100%;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.bodyBold};
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.bodyPrimary};
    opacity: 1;
  }
`;
