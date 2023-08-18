import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { SearchIcon, SearchInput, SearchWrapper } from "./styles/Search.styled";
import { ReactComponent as IconSearch } from "../assets/icon-search.svg";
import { useTheme } from "../context/ThemeContext";

export const Search = ({ searchQuery, setSearchQuery, getUser }) => {
  const { themeName } = useTheme();
  const isTablet = matchMedia("(min-width: 24.375rem)").matches;
  return (
    <Container>
      <SearchWrapper $themeName={themeName}>
        <SearchIcon as={IconSearch} />
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            isTablet ? "Search GitHub username..." : "Search username..."
          }
        />
        <Button onClick={(e) => getUser(e)}>Search</Button>
      </SearchWrapper>
    </Container>
  );
};
