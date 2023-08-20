import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import {
  SearchError,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles/Search.styled";
import { ReactComponent as IconSearch } from "../assets/icon-search.svg";
import { useTheme } from "../context/ThemeContext";

export const Search = ({
  searchQuery,
  setSearchQuery,
  getUser,
  searchError,
}) => {
  const { themeName } = useTheme();
  const isTablet = matchMedia("(min-width: 24.375rem)").matches;
  return (
    <Container>
      <SearchWrapper $themeName={themeName}>
        <SearchIcon aria-hidden="true" as={IconSearch} />
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            isTablet ? "Search GitHub username..." : "Search username..."
          }
        />
        {searchError && <SearchError>{searchError}</SearchError>}
        <Button onClick={(e) => getUser(e)}>Search</Button>
      </SearchWrapper>
    </Container>
  );
};
