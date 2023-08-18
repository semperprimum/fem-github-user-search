import { HeaderWrapper, Logo } from "./styles/Header.styled";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./styles/Container.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>devfinder</Logo>
        <ThemeSwitcher />
      </HeaderWrapper>
    </Container>
  );
};
