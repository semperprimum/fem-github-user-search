import { styled } from "styled-components";

export const UserContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.9375rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: 2rem 1.5rem 3rem;
  box-shadow: ${({ $themeName }) =>
    $themeName === "light"
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.20)"
      : "none"};

  @media only screen and (min-width: 37.5em) {
    margin-top: 1.5rem;
    padding: 2.5rem;
  }
  @media only screen and (min-width: 60em) {
    display: flex;
    gap: 2.3rem;
    padding: 3rem;
  }
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media only screen and (min-width: 60em) {
    display: block;
  }
`;

export const UserImage = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 100vmax;

  @media only screen and (min-width: 37.5em) {
    width: 7.3125rem;
    height: 7.3125rem;
  }
`;

export const UserWrapper = styled.div`
  width: 100%;
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserNames = styled.div``;

export const UserName = styled.p`
  font-size: var(--fs-700);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.bodyBold};
  @media only screen and (min-width: 60em) {
    transform: translateY(-0.3rem);
  }
`;

export const UserHandle = styled.a`
  font-size: var(--fs-400);
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export const UserJoiningDate = styled.p`
  font-size: var(--fs-300);
  margin-top: 0.37rem;
  color: ${({ theme }) => theme.colors.bodyAccent};
  @media only screen and (min-width: 37.5em) {
    margin-top: 0.25rem;
  }
`;

export const UserBody = styled.p`
  font-size: var(--fs-300);
  margin-top: 2rem;
  line-height: 1.92308;
  opacity: ${({ $unavailable }) => ($unavailable ? "0.75" : "1")};
  @media only screen and (min-width: 37.5em) {
    margin-top: 1.5rem;
    line-height: 1.66667;
  }
  @media only screen and (min-width: 60em) {
    margin-top: 1.25rem;
  }
`;
