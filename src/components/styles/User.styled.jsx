import { styled } from "styled-components";

export const UserContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.9375rem;
  margin-top: 1rem;
  padding: 2rem 1.5rem 3rem;
  box-shadow: ${({$themeName}) => $themeName === "light" ? "0px 16px 30px -10px rgba(70, 96, 187, 0.20)" : "none"};
`;

export const UserHeader = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const UserImage = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 100vmax;
`;

export const UserContent = styled.div``;

export const UserNames = styled.div``;

export const UserName = styled.p`
  font-size: var(--fs-700);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.bodyBold};
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
`;

export const UserBody = styled.p`
  font-size: var(--fs-300);
  margin-top: 2rem;
  line-height: 1.92308;
`;
