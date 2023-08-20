import { useState } from "react";
import { Attribution, Header, Search, User } from "./components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import ThemeProvider from "./context/ThemeContext";
import UserService from "./Services/UserService";
import octocat from "./octocat.json";

const App = () => {
  const [user, setUser] = useState(octocat);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");

  const getUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await UserService.getUserByName(searchQuery);
      if (response) {
        setUser(response.data);
        setSearchError("");
      }
    } catch (e) {
      if (e.response.status === 404) {
        setSearchError("No results");
      }
    }

    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <main>
        <Search
          searchError={searchError}
          getUser={getUser}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <User user={user} isLoading={isLoading} />
      </main>
      <footer>
        <Attribution />
      </footer>
    </ThemeProvider>
  );
};

export default App;
